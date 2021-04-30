import { createStore, combineReducers } from "redux";


import imagesState from "../redux/reducers/mainState"


let reducers = combineReducers({
  imagesState: imagesState,

});

let store = createStore(
  reducers,
);

export default store;
