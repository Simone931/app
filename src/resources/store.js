import React, { Component } from "react";
import { applyMiddleware, combineReducers, createStore, compose } from 'redux'
import { persistStore, persistReducer, persistCombineReducers } from "redux-persist";
import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger'
import { connect } from 'react-redux';
import { reducer as formReducer } from 'redux-form';
import { AsyncStorage } from 'react-native';
import keyboardDismisser from '../app/common/keyboardDismissSaga';

const navConfig = {
	key: "nav",
	storage: AsyncStorage,
	debounce: 1000
};
const authPersistConfig = {
	key: 'auth',
	storage: AsyncStorage,
	debounce: 1000
};
const secretConfig = {
	key: 'secretdetails',
	storage: AsyncStorage,
	debounce: 1000
};
const userConfig = {
	key: 'userdetails',
	storage: AsyncStorage,
	debounce: 1000
};
const formConfig = {
	key: 'form',
	storage: AsyncStorage,
	debounce: 1000
}

const appReducer = combineReducers({
    form: formReducer,
});

const sagaMiddleware = createSagaMiddleware();
const store = createStore(appReducer, applyMiddleware(sagaMiddleware) );
const persistor = persistStore(store);

const allSagas = [
	keyboardDismisser,
];

allSagas.forEach((i) => {
	sagaMiddleware.run(i);
});

export default configStore = () => {
	return {
		store,
		persistor
	}
};

