const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return {
        number: ++state.number,
      };
    case "decrement":
      return {
        number: --state.number,
      };
  }
};

export default reducer;