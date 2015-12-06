export default class BaseView {
    constructor(node) {
        this._node = node;
    }

    render(data) {
        throw new Error("Must be implemented");
    }
}