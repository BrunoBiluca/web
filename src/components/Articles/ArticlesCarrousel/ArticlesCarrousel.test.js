import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ArticlesCarrousel from './ArticlesCarrousel';

describe('<ArticlesCarrousel />', () => {
  test('it should mount', () => {
    render(<ArticlesCarrousel />);
    
    const articlesCarrousel = screen.getByTestId('articles-carrousel');

    expect(articlesCarrousel).toBeInTheDocument();
  });
});