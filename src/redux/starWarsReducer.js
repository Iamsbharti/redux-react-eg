export default function starWarsReducers(starWarpeople = "", action) {
  switch (action.type) {
    case "GET_PROPLE":
      return action.payload;
    case "GET_PEOPLE_ERROR":
      return action.payload;
    default:
      return starWarpeople;
  }
}
