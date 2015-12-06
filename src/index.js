import store from "./store.js"
import {incrementCounter} from "./reducer.js"
import CounterView from "./views/CounterView.js"
import connect from "./connect.js"

let counterView = new CounterView(document.querySelector('.counter'));
connect(store, counterView, (state) => state.counter);

document.querySelector('button').addEventListener('click', function() {
  store.dispatch(incrementCounter());
});

