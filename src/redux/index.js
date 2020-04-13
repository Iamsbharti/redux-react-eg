import { createStore } from "redux";
import counterReducers from "./counterReducers";

const store = createStore(counterReducers);

store.subscribe(() => {
  console.log(store.getState());
});

export default store;
