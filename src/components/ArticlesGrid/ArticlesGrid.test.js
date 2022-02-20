import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ArticlesGrid from './ArticlesGrid';

describe('<ArticlesGrid />', () => {
  test('it should mount', () => {
    render(<ArticlesGrid />);
    
    const articlesGrid = screen.getByTestId('ArticlesGrid');

    expect(articlesGrid).toBeInTheDocument();
  });
});