import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import NavBar from './NavBar';
import { BrowserRouter } from 'react-router-dom';

describe('<NavBar />', () => {
  test('it should mount', () => {
    render(
      <BrowserRouter>
        <NavBar />
      </BrowserRouter>
    );

    const navBar = screen.getByTestId('navbar');

    expect(navBar).toBeInTheDocument();
  });
});