import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ContentsPage from './ContentsPage';

describe('<ContentsPage />', () => {
  test('it should mount', () => {
    render(<ContentsPage />);
    
    const contentsPage = screen.getByTestId('ContentsPage');

    expect(contentsPage).toBeInTheDocument();
  });
});