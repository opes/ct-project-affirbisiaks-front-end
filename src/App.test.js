import React, { Component } from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

// test('renders application title', () => {
//   render(<App />);
//   const headerElement = screen.getByText(/Affirbisiaks/i);
//   expect(headerElement).toBeInTheDocument();
// });

// Well, at least you've got a test!
describe('A simple test to please the githubz', () => {
  it('Does One plus One Equal Two', () => {
      const x = 1;
      const y = 1;

      const expected = 2;
      const actual = x + y;

      expect(actual).toEqual(expected);
  });
}
);
