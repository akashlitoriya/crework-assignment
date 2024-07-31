// store/rootReducer.ts
import { combineReducers } from '@reduxjs/toolkit';
import exampleReducer from './userSlice';

const rootReducer = combineReducers({
  example: exampleReducer,
});

export default rootReducer;
