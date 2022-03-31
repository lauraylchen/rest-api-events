import axios from 'axios';

// Link to backend REST API
const url = 'http://localhost:8080/api/events';

export const fetchEvents = () => axios.get(url);
export const createEvent = (newEvent) => axios.post(url, newEvent);
