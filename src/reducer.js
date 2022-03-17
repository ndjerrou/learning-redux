import * as actions from "./actionTypes.js";

let lastId = 0;
function reducer(state = [], action) {
  // returns the state based on an action
  switch (action.type) {
    case actions.BUG_ADDED:
      const newState = [
        ...state,
        {
          id: ++lastId,
          description: action.payload.description,
          resolved: false,
        },
      ];

      return newState;

    case actions.BUG_REMOVED:
      return state.filter((bug) => bug.id !== action.payload.id);

    case actions.BUG_RESOLVED:
      return state.map((bug) =>
        bug.id === action.payload.id ? { ...bug, resolved: true } : bug
      );

    default:
      return state;
  }
}

export default reducer;
