
import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import Header from './components/Header';
import Main2 from './components/Main2';

test('Renders the BookingForm heading', () => {
  render(
    <MemoryRouter>
      <Header />
    </MemoryRouter>
  );
  const headingElement = screen.getByText("Little Lemon");
  expect(headingElement).toBeInTheDocument();
});

