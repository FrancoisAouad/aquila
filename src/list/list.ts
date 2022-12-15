export class list<T> {
    protected value: T;
    protected next: any;
    protected index: number;
    constructor(value: any = 0, index: number = 0, next: any = null) {
        this.value = value;
        this.index = index;
        this.next = next;
    }
    mergeTwoLists = (list1: list<T>, list2: list<T>) => {
        if (!list1) {
            return list2;
        }
        if (!list2) {
            return list1;
        }

        if (list1.value <= list2.value) {
            list1.next = this.mergeTwoLists(list1.next, list2);
            return list1;
        } else {
            list2.next = this.mergeTwoLists(list1, list2.next);
            return list2;
        }
    };
    append = (value: any) => {
        console.log('iiiiiii', Object.keys(this));
        console.log('qqqqqq', this);
        return (this.next = new list(value, this.index + 1, null));
    };
    size = () => {};
    remove = () => {};
    isEmpty = () => {};
    getKeys = () => {
        return Object.keys(list);
    };
}
