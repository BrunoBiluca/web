import React from 'react';
import { render, screen, within } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Resume from './Resume';

describe('<Resume />', () => {
  test('it should mount', () => {
    render(<Resume />);
    
    const resumePage = screen.getByTestId('Resume');

    expect(resumePage).toBeInTheDocument();
  });

  test('it should mount header info', () => {
    render(<Resume />);
    
    const resumeHeader = screen.getByTestId('ResumeHeader');

    expect(resumeHeader).toBeInTheDocument();

    const name = within(resumeHeader).getByText("Bruno Bernardes da Costa");
    expect(name).toBeInTheDocument();

    const goal = within(resumeHeader).getByTestId("goal");
    expect(goal).toBeInTheDocument();

    const picture = within(resumeHeader).getByTestId("picture");
    expect(picture).toBeInTheDocument();

    const description = within(resumeHeader).getByTestId("description");
    expect(description).toBeInTheDocument();
  });

  // TODO: testar todos os links do pdf, 
  // testar usando os valores configurados nos respectivos componentes dos links

  // TODO: testar se imprime uma única página
});