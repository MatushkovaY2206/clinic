import { legacy_createStore } from 'redux';

import { composeWithDevTools } from '@redux-devtools/extension';

import userReducer from './reducer';


export const store = legacy_createStore(userReducer, composeWithDevTools());