import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import GamesGrid from './GamesGrid';

describe('<GamesGrid />', () => {
  test('it should mount', () => {
    render(<GamesGrid />);
    
    const gamesGrid = screen.getByTestId('GamesGrid');

    expect(gamesGrid).toBeInTheDocument();
  });
});