import { render, screen } from '@testing-library/react';
import App from './App';

test('renders LITTERALLY! link', () => {
  render(<App />);
  const linkElement = screen.getByText(/LITTERALLY!/i);
  expect(linkElement).toBeInTheDocument();
});

//keep in for uwadiae testing purposes