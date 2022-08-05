import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ContentsPage from './ContentsPage';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';

describe('<ContentsPage />', () => {
  test('it should mount', () => {
    const history = createMemoryHistory();
    render(
      <Router history={history}>
        <ContentsPage />
      </Router>
    );

    const contentsPage = screen.getByTestId('contents-page');

    expect(contentsPage).toBeInTheDocument();
  });
});