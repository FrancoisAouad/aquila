export class queue<T> {
    protected element: any;
    constructor(element: any = []) {
        this.element = element ? [element] : [];
    }

    enqueue = (element: any) => {
        this.element.unshift(element);
    };
    dequeue = () => {
        this.element.pop();
    };
    back = () => {
        return this.element[0];
    };
    front = () => {
        return this.element[this.element.length - 1];
    };
    size = () => {
        return this.element.length;
    };
    isEmpty = () => {
        if (this.element.length === 0) return true;
        return false;
    };
    print = () => {};
}
export default queue;
