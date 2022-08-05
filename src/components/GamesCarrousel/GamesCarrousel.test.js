import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import GamesCarrousel from './GamesCarrousel';

describe('<GamesCarrousel />', () => {
  test('it should mount', () => {
    render(<GamesCarrousel />);
    
    const gamesCarrousel = screen.getByTestId('games-carrousel');

    expect(gamesCarrousel).toBeInTheDocument();
  });
});