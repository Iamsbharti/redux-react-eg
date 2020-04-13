import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import counterReducers from "./counterReducers";
import starWarsReducers from "./starWarsReducer";
const rootReducer = combineReducers({
  count: counterReducers,
  starWarsPeople: starWarsReducers
});
const store = createStore(rootReducer, applyMiddleware(thunk));

store.subscribe(() => {
  console.log(store.getState());
});

export default store;
