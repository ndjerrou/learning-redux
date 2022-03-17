export default function createStore(reducer) {
  // private property : how to create one?
  let state;
  let listeners = [];

  // create the getState method
  function getState() {
    return state;
  }

  function subscribe(listener) {
    listeners.push(listener);

    return () => {
      listeners.filter((l) => l !== listener);
    };
  }

  function dispatch(action) {
    // contact the reducer to update the state
    state = reducer(state, action);

    for (let i = 0; i < listeners.length; i++) {
      listeners[i]();
    }
  }

  return {
    getState,
    dispatch,
    subscribe,
  };
}
