import * as api from '../api';

// Action Creators
export const getEvents = () => async (dispatch) => {
  try {
    const { data } = await api.fetchEvents();

    dispatch({ type: 'FETCH_ALL', playload: data });
  } catch (error) {
    console.log(error.message);
  }
}
