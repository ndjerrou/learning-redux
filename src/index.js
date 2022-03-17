import { createStore } from "./customStore.js";
import store from "./store.js";

import * as actions from "./actions.js";

const customStore = createStore();

console.log(customStore);

console.log(customStore.getState());

store.dispatch(actions.bugAdded("new bug added right now "));
store.dispatch(actions.bugAdded("new bug added right before "));

console.log(customStore.getState());

// add a bug

// 1 - define an action

// store.subscribe(() => console.log(store.getState()));

// store.dispatch(bugAdded("Buttons RS are not pointing to the good ressources"));
// store.dispatch(bugAdded("Footer link not working"));
// store.dispatch(bugAdded("Navbar not responsive"));

// store.dispatch(bugResolved(2));
// store.dispatch(bugResolved(1));
// store.dispatch(bugResolved(3));
