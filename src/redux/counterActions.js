export function incrementCounter() {
  return (dispatch, getState) => {
    const currentCounter = getState();
    if (currentCounter % 2 === 0) {
      dispatch({ type: "INCREMENT" });
    } else {
      setTimeout(() => {
        dispatch({ type: "INCREMENT" });
      }, 1500);
    }
  };
}
export function decrementCounter() {
  return { type: "DECREMENT" };
}

export function clearCounter() {
  return { type: "CLEAR" };
}
//Get Starwars people based on current counter value
export function getStarWarsPeople() {
  return (dispatch, getState) => {
    const number = getState();
    const baseUrl = "https://swapi.co/api/people";
    fetch(`${baseUrl}/${number}`)
      .then(res => res.json())
      .then(res => {
        console.log(res.name);
        dispatch({ type: "GET_PEOPLE", payload: res.name });
      })
      .catch(error => {
        console.log(error.message);
        dispatch({ type: "GET_PEOPLE_ERROR", payload: error.message });
      });
  };
}
