import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Client } from 'appwrite';
// import {getUniqueId} from 'react-native-device-info';

export const baseURL = 'https://jsonplaceholder.typicode.com/'
export const http2 = 'https://jsonplaceholder.typicode.com/'

export const client = new Client()
.setEndpoint(process.env.APPWRITE_ENDPOINT)
.setProject(process.env.APPWRITE_PROJECT_ID)

const http = axios.create({
	baseURL: 'https://jsonplaceholder.typicode.com/',
	timeout: 100000,
	headers: {
		'Content-Type': 'application/json',
		Accept: 'application/json',
		// ApiToken: 'U0RvR2x0SEZYa0ljSzgxUkFCUHZpRUpvREFlb0FuTFBPSFA=',
	},
});
// export const http2 = 'https://medzine.svisf.in/'
http.interceptors.request.use(
	async (config) => {
		const token = await AsyncStorage.getItem('@USER_TOKEN');
		// const signup_token = await AsyncStorage.getItem('@SIGNUP_TOKEN');
		// if(signup_token) config.headers.Authorization = `Bearer ${signup_token}`;
		if (token) config.headers.Authorization = `Bearer ${token}`;
		return config;
	},
	(error) => {
		return Promise.reject(error);
	},
);
export default http;