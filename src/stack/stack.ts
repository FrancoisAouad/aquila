export class stack<T> {
    protected element: any;
    constructor(element: any) {
        this.element = element ? [element] : [];
    }

    push = (value: T) => {
        this.element.push(value);
    };
    pop = () => {
        return this.element.pop();
    };
    top = () => {
        console.log(this.element[this.element.length - 1]);
        return this.element[this.element.length - 1];
    };
    print = () => {
        const temp = this.element.reverse();
        temp.forEach((e: any) => {
            console.log(e);
        });
    };
    size = () => {
        return this.element.length;
    };
    isEmpty = () => {
        if (this.element.length === 0) return true;
        return false;
    };
}
