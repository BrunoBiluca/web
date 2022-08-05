import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ContentCardHorizontal from './ContentCardHorizontal';

describe('<ContentCardHorizontal />', () => {
  test('it should mount empty card when has no content', () => {
    render(<ContentCardHorizontal />);
    
    const contentCardHorizontal = screen.getByTestId('content-card-horizontal-empty');

    expect(contentCardHorizontal).toBeInTheDocument();
  });
});