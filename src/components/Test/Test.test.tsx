import { render, screen } from '@testing-library/react';
import Test from './Test';

it('renders welcome message', () => {
  render(<Test />);
  expect(screen.getByText('Learn React')).toBeInTheDocument();
});
