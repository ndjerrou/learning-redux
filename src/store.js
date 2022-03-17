import { createStore } from "redux";
import reducer from "./reducer.js";

import { devToolsEnhancer } from "redux-devtools-extension";

const store = createStore(reducer, devToolsEnhancer({ trace: true })); // HOF

// console.log(store);

export default store;
