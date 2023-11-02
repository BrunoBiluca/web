import React from 'react';
import { render, screen, within } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ResumePage from "./ResumePage";
import { BrowserRouter } from 'react-router-dom';

describe('<Resume />', () => {
  test('it should mount', () => {
    render(
      <BrowserRouter>
        <ResumePage />
      </BrowserRouter>
    );

    const resumePage = screen.getByTestId('resume-page');

    expect(resumePage).toBeInTheDocument();
  });

  test('it should mount header info', () => {
    render(
      <BrowserRouter>
        <ResumePage />
      </BrowserRouter>
    );

    const resumeHeader = screen.getByTestId('header-info');

    expect(resumeHeader).toBeInTheDocument();

    const name = within(resumeHeader).getByText("Bruno Bernardes da Costa");
    expect(name).toBeInTheDocument();

    const picture = within(resumeHeader).getByTestId("bruno-picture");
    expect(picture).toBeInTheDocument();

    const description = within(resumeHeader).getByTestId("description");
    expect(description).toBeInTheDocument();
  });
});