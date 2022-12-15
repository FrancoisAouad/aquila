export class list<T> {
    protected value: T;
    protected next: any;
    constructor(value: any = 0, next: any = null) {
        this.value = value;
        this.next = next;
    }
}
