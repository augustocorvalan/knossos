import { render, screen } from '@testing-library/react';
import InputScreen from '../InputScreen';

test('render input screen', () => {
  render(<InputScreen />);
  const titleElement = screen.getByText(/Input Screen/i);
  expect(titleElement).toBeInTheDocument();
  const ctaElement = screen.getByText(/Make Model/i);
  expect(ctaElement).toBeInTheDocument();
});
