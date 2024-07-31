// store/rootReducer.ts
import { combineReducers } from '@reduxjs/toolkit';
import exampleReducer from './userSlice';
import taskReducer from './taskSlice';

const rootReducer = combineReducers({
  example: exampleReducer,
  task: taskReducer
});

export default rootReducer;
