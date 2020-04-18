import axios from 'axios';
import { API_URL } from '../Config/index.dev';

const client = axios.create({
	baseURL: API_URL,
	headers: {
		Accept: 'application/json'
	}
});

export function setAxiosHeader(token) {
	client.defaults.headers.common.Authorization = `Bearer ${token}`;
}

export async function healthCheck() {
	await client.post('/health-check');
}
