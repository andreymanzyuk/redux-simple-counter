import {createStore} from "redux"
import reducer from "./reducer.js"

export default createStore(reducer, {counter: 1});
