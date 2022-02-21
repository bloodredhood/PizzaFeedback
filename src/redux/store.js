import { combineReducers, createStore, applyMiddleware } from "redux";
import appReducer from "./appReducer";
import thunkMiddleware from "redux-thunk"

const rootReducer = combineReducers({
	app: appReducer,
})

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

window.store = store

export default store