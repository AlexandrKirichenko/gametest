import React, { Component } from 'react';
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

export class GameMain extends Component<unknown, State> {
  state: State = {
    cells: gameInit(4),
    score: 0,
    bestScore: BEST_SCORE,
    size: 4,
    selectedTheme: 'light',
    gameOver: false,
  };
  
  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyPress);
  }
  
  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyPress);
  }
  
  newGame = () => {
    this.setState((state) => ({
      ...state,
      cells: gameInit(state.size),
      score: 0,
      gameOver: false,
    }));
  };
  
  handleKeyPress = (event: KeyboardEvent) => {
    const { gameOver } = this.state;
    if (!gameOver && mapKeyCodeToDirection[event.code]) {
      const { cells, score, bestScore, gameOver } = move(
        this.state.cells,
        mapKeyCodeToDirection[event.code],
      );
      this.setState({
        cells,
        score,
        bestScore,
        gameOver,
      });
      localStorage.setItem(BEST_SCORE_LS_KEY, bestScore.toString());
    }
  };
  
  changeTheme = () => {
    this.setState((state) => ({
      ...state,
      selectedTheme: state.selectedTheme === 'light' ? 'dark' : 'light',
    }));
  };
  
  render() {
    const { cells, score, bestScore, size, selectedTheme, gameOver } =
      this.state;
    return (
      <ThemeProvider
        theme={this.state.selectedTheme === 'light' ? light : dark}
      >
        <Container>
          <Wrapper>
            <ScoreBoard score={score} bestScore={bestScore} />
            <GameSettings
              selectedTheme={selectedTheme}
              changeTheme={this.changeTheme}
              newGame={this.newGame}
            />
          </Wrapper>
          <Wrapper>
            {gameOver && <GameOver />}
            <Game cells={cells} size={size} />
          </Wrapper>
        </Container>
      </ThemeProvider>
    );
  }
}

const Wrapper = styled.div`
  flex: 1;
  padding: 10px;
  flex-direction: column;
`;
