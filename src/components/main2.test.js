import React from 'react';
import { render, act } from '@testing-library/react'; // Import act from @testing-library/react
import { MemoryRouter } from 'react-router-dom';
import Main2 from './Main2';

test('Main2 component › fetchAPI function should fetch available times and update state', async () => {
  await act(async () => {
    render(
      <MemoryRouter>
        <Main2 />
      </MemoryRouter>
    );
  });
});