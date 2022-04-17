import { createStore } from "redux";
import { Loginreducer } from "./Login_Redux/Login_Redux";
import { Teacher_reducer } from "./Teacher_Redux/Teachers_reducer";
import { combineReducers } from "redux";

const rootreducer=combineReducers({Login:Loginreducer,Teacher:Teacher_reducer})
export const store= createStore(rootreducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
