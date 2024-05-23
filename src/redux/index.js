import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { persistReducer, persistStore } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import RootReducers from "./reducers"
import { apiSlice } from './slices/apiSlice';


// Configure persistence settings
const persistConfig = {
    key: 'root', // Key for the root of the storage
    storage: AsyncStorage, // AsyncStorage for React Native
    timeout: 100000,
    whitelist: ['auth', 'post'], // Whitelist: only 'token' slice will be persisted
    // blacklist: [ 
    //     'blockHome', 
    // ], // Blacklist: 'coupon' and 'wallet' slices won't be persisted
};

// Wrap reducers with persistReducer
const persistedReducer = persistReducer(
    persistConfig,
    combineReducers({
        ...RootReducers,
        [apiSlice.reducerPath]: apiSlice.reducer,
    
        
      }),
);

// Create the Redux store
export const store = configureStore({
    reducer: persistedReducer,  
    middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: {
        ignoredActions: ['persist/PERSIST'],
      },
    }).concat([
        apiSlice.middleware
    ]),
});

// Set up listeners after creating the store
setupListeners(store.dispatch);

// Create persistor object
export const persistor = persistStore(store);

