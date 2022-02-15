import { combineReducers } from '@reduxjs/toolkit';
import imageReducer from './imageReducer';

const rootReducer = combineReducers({
    imageReducer: imageReducer,

});

export default rootReducer;
