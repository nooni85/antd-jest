import Index from './index';
import { render, screen } from '@testing-library/react';

it('renders welcome message', () => {
  render(<Index />);
  expect(screen.getByText('Learn React')).toBeInTheDocument();
});
