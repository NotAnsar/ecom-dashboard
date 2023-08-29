import axios from 'axios';

export const makeRequest = axios.create({
	withCredentials: true,
	baseURL: import.meta.env.VITE_BACKEND_URL,
	headers: {},
});
