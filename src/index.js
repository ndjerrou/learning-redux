import createStore from "./customStore.js";
import reducer from "./reducer.js";

// import store from "./store.js";

import * as actions from "./actions.js";

// old implementation
// store.subscribe(() => console.log("new state coming"));

// custom store
const customStore = createStore(reducer);

customStore.subscribe(() => console.log("custom store"));

customStore.dispatch(actions.bugAdded("new bug added right now "));
customStore.dispatch(actions.bugAdded("new bug added right now "));
customStore.dispatch(actions.bugAdded("new bug added right now "));
customStore.dispatch(actions.bugAdded("new bug added right now "));

// store.dispatch(actions.bugAdded("new bug added right before "));
