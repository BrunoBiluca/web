import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import NewsLetterInput from './NewsLetterInput';

describe('<NewsLetterInput />', () => {
  test('it should mount', () => {
    render(<NewsLetterInput />);
    
    const newsLetterInput = screen.getByTestId('news-letter-subscribe');

    expect(newsLetterInput).toBeInTheDocument();
  });
});