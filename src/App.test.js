import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event'; // Import userEvent for simulating user interactions
import BookingForm from './BookingForm';

describe('BookingForm component', () => {
  test('should display an error message when form is submitted with empty fields', async () => {
    const submitForm = jest.fn();

    const { getByLabelText, getByRole, getByText } = render(<BookingForm submitForm={submitForm} />);

    const submitButton = getByRole('button', { name: /Make Your Reservation/i });
    userEvent.click(submitButton);

    await waitFor(() => {
      expect(submitForm).not.toHaveBeenCalled();
      expect(getByText(/Please fill out all fields/i)).toBeInTheDocument();
    });
  });

  test('should call submitForm function with form data when all fields are filled out', async () => {
    const submitForm = jest.fn();

    const { getByLabelText, getByRole } = render(<BookingForm submitForm={submitForm} />);

    const dateInput = getByLabelText(/Choose date/i);
    const timeSelect = getByLabelText(/Choose time/i);
    const guestInput = getByLabelText(/Number of guests/i);
    const occasionSelect = getByLabelText(/Occasion/i);
    const submitButton = getByRole('button', { name: /Make Your Reservation/i });

    fireEvent.change(dateInput, { target: { value: '2024-05-15' } });
    fireEvent.change(timeSelect, { target: { value: '12:00' } });
    fireEvent.change(guestInput, { target: { value: '2' } });
    fireEvent.change(occasionSelect, { target: { value: 'Birthday' } });

    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(submitForm).toHaveBeenCalledWith({
        date: '2024-05-15',
        time: '12:00',
        guest: '2',
        occasion: 'Birthday'
      });
    });
  });
});
