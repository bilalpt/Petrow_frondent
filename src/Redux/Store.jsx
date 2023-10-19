import React from 'react'
import storage from 'redux-persist/lib/storage'
import {persistStore,persistReducer} from 'redux-persist'
import BoardUser from './BoardUser'
import { configureStore } from '@reduxjs/toolkit'
import Boardsplice from './BoardUser'


//storage kannan vendi
const persistConfig = {
    key: 'root',      
    storage,     
};

const persistedReducer = persistReducer(persistConfig, Boardsplice);


const Store = configureStore({
    reducer: {
        user: persistedReducer,
    },
});

const persistor = persistStore(Store);

export { Store, persistor };
