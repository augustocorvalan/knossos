import { render, screen } from '@testing-library/react';
import InputScreen from '../InputScreen';

test('render input screen', () => {
  render(<InputScreen />);
  const linkElement = screen.getByText(/Input Screen/i);
  expect(linkElement).toBeInTheDocument();
});
