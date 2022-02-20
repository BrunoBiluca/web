import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ContentCardHorizontal from './ContentCardHorizontal';

describe('<ContentCardHorizontal />', () => {
  test('it should mount', () => {
    render(<ContentCardHorizontal />);
    
    const contentCardHorizontal = screen.getByTestId('ContentCardHorizontal');

    expect(contentCardHorizontal).toBeInTheDocument();
  });
});