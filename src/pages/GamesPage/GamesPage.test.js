import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import GamesPage from './GamesPage';

describe('<GamesPage />', () => {
  test('it should mount', () => {
    render(<GamesPage />);
    
    const gamesPage = screen.getByTestId('GamesPage');

    expect(gamesPage).toBeInTheDocument();
  });
});