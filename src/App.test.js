import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('renders onto input screen', () => {
  render(<App />);
  const title = screen.getByText(/enter texts to combine/i);
  expect(title).toBeInTheDocument();
});

test('allow user to input text and submit', () => {
  render(<App />)
  const textareas = document.getElementsByTagName("textarea")
  // user should see at least two text inputs
  expect(textareas.length).toBeGreaterThanOrEqual(2)
  const cta = screen.getByText(/Make Model/i);

  expect(cta).toBeInTheDocument();
  fireEvent.click(cta)
})
