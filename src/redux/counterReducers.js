export default function counterReducers(counter = 0, action) {
  switch (action.type) {
    case "INCREMENT":
      return counter + 1;
    case "DECREMENT":
      return counter - 1;
    default:
      return counter;
  }
}
