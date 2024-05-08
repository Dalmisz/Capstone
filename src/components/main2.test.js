import { fetchAPI } from './Main2'; // Assuming fetchAPI is exported from Main2
import { act } from 'react'; // Import act for async testing

describe('fetchAPI function', () => {
  it('should fetch available times and update state', async () => {
    const mockStateSetter = jest.fn(); // Mock setState function
    await act(async () => {
      const availableTimes = await fetchAPI(new Date(), mockStateSetter); // Assuming fetchAPI takes a date and a state setter function
      expect(availableTimes).toEqual(["12:00", "13:00", "14:00"]); // Ensure correct available times are returned
      expect(mockStateSetter).toHaveBeenCalledWith(["12:00", "13:00", "14:00"]); // Ensure state is updated with available times
    });
  });
});