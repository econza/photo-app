import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';

import imagesState from "../redux/reducers/mainState"


let reducers = combineReducers({
  imagesState: imagesState,

});

let store = createStore(
  reducers,
  composeWithDevTools()
);

export default store;
