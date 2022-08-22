import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ContentCard from './ContentCard';
import Content from '../model/Content.model';

describe('<ContentCard />', () => {
  test('it should mount', () => {
    render(<ContentCard content={new Content("test 1", "test summary content")}/>);
    
    const contentCard = screen.getByTestId('ContentCard');

    expect(contentCard).toBeInTheDocument();
  });
});