import BaseView from "./BaseView.js"

export default class CounterView extends BaseView {
    render(counter) {
        this._node.textContent = counter;
    }
}