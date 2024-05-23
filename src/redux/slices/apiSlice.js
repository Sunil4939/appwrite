import AsyncStorage from '@react-native-async-storage/async-storage';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
    reducerPath: 'api', // optional
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://jsonplaceholder.typicode.com/posts',
        timeout: 100000,
        credentials: 'include',
        prepareHeaders: async (headers, { getState }) => {
            const token = await AsyncStorage.getItem('@USER_TOKEN')

            // const { token } = getState().auth
            // console.log("api user token : ", token)
            
            if (token) {
                headers.set('Authorization', token);
                headers.set('Content-Type', 'application/json');
            }
            return headers;
        },
    }),
    tagTypes: [],
    endpoints: builder => ({})
})