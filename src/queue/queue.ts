export class queue<T> {
    protected element: any;
    constructor(element: any = []) {
        this.element = element ? [element] : [];
    }
}
export default queue;
