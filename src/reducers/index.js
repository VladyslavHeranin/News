import { applyMiddleware, combineReducers, createStore } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import thunk from "redux-thunk"
import topikReducer from "./pageRedu"


const rootReducer = combineReducers({
    topik: topikReducer,
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))