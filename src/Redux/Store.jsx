import React from 'react'
import storage from 'redux-persist/lib/storage'
import {persistStore,persistReducer} from 'redux-persist'
import BoardUser from './BoardUser'
import { configureStore } from '@reduxjs/toolkit'
import Boardsplice from './BoardUser'
import Takersplice from './BoardTakerRedux'

//storage kannan vendi
const persistConfig = {
    key: 'root',      
    storage,     
};

const persistedReducer = persistReducer(persistConfig, Boardsplice);
const persistTaker=persistReducer(persistConfig,Takersplice);


const Store = configureStore({
    reducer: {
        user: persistedReducer,
        takerforms: persistTaker,
    },
});

const persistor = persistStore(Store);

export { Store, persistor };
