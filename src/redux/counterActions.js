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
