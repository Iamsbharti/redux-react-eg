import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import counterReducers from "./counterReducers";

const store = createStore(counterReducers, applyMiddleware(thunk));

store.subscribe(() => {
  console.log(store.getState());
});

export default store;
