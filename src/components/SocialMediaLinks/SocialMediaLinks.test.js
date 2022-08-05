import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import SocialMediaLinks from './SocialMediaLinks';

describe('<SocialMediaLinks />', () => {
  test('it should mount', () => {
    render(<SocialMediaLinks />);
    
    const socialMediaLinks = screen.getByTestId('social-media-links');

    expect(socialMediaLinks).toBeInTheDocument();
  });
});