import React, { Component, FC, useEffect, useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Game } from '../components/Game';
import { mapKeyCodeToDirection } from '../constants/directions';

import { gameInit } from '../controller/gameInit';
import { move } from '../controller/move';
import { GameSettings } from '../components/GameSettings';
import { ScoreBoard } from '../components/ScoreBoard';
import { Container } from '../components/Container';
import { dark, light } from '../../../themes';
import { GameOver } from '../components/GameOver';
import { BEST_SCORE_LS_KEY } from '../config';

interface State {
  size: number;
  cells: number[][];
  score: number;
  bestScore: number;
  selectedTheme: string;
  gameOver: boolean;
}

const BEST_SCORE = Number.parseInt(
  localStorage.getItem(BEST_SCORE_LS_KEY) || '0',
);

export const GameMain: FC = () => {
  const [state, setState] = useState<State>({
    cells: gameInit(4),
    score: 0,
    bestScore: BEST_SCORE,
    size: 4,
    selectedTheme: 'light',
    gameOver: false,
  });

  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  const newGame = () => {
    setState((state) => ({
      ...state,
      cells: gameInit(state.size),
      score: 0,
      gameOver: false,
    }));
  };

  const handleKeyPress = (event: KeyboardEvent) => {
    const { gameOver } = state;
    if (!gameOver && mapKeyCodeToDirection[event.code]) {
      const { cells, score, bestScore, gameOver } = move(
        state.cells,
        mapKeyCodeToDirection[event.code],
      );
      setState((prev) => ({
        ...prev,
        cells,
        score,
        bestScore,
        gameOver,
      }));
      localStorage.setItem(BEST_SCORE_LS_KEY, bestScore.toString());
    }
  };
  
  const changeTheme = () => {
    setState((state) => ({
      ...state,
      selectedTheme: state.selectedTheme === 'light' ? 'dark' : 'light',
    }));
  };
  
  const { cells, score, bestScore, size, selectedTheme, gameOver } = state;

  return (
    <ThemeProvider theme={state.selectedTheme === 'light' ? light : dark}>
      <Container>
        <Wrapper>
          <ScoreBoard score={score} bestScore={bestScore} />
          <GameSettings
            selectedTheme={selectedTheme}
            changeTheme={changeTheme}
            newGame={newGame}
          />
        </Wrapper>
        <Wrapper>
          {gameOver && <GameOver />}
          <Game cells={cells} size={size} />
        </Wrapper>
      </Container>
    </ThemeProvider>
  );
};

const Wrapper = styled.div`
  flex: 1;
  padding: 10px;
  flex-direction: column;
`;
