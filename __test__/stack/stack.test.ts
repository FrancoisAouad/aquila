const { stack } = require('../../dist/index');

describe('Stack Class', () => {
    describe('Create Instance', () => {
        const value = 2;
        const index = 0;
        describe('given the input data is valid', () => {
            it('should have an array with the same element ', () => {
                const Stack = new stack(value);
                expect(Stack).toBeInstanceOf(stack);
                expect(Stack.element[index]).toEqual(value);
            });
        });
        describe('given the input data is invalid', () => {
            it('should return an empty array', () => {
                const Stack = new stack(undefined);
                expect(Stack).toHaveProperty('element');
                expect(Stack.element).toEqual([]);
            });
        });
    });
    describe('Class Methods', () => {
        describe('push()', () => {
            const value = 1;
            describe('given that the value is valid', () => {
                const Stack = new stack(45);
                Stack.push(value);
                it('should add value to the top of the stack', () => {
                    const index = Stack.element.length - 1;
                    expect(Stack.element[index]).toEqual(value);
                });
            });
            describe('given that the value is not valid', () => {
                const Stack = new stack(45);
                Stack.push(undefined);
                it('should not push the value to the array', () => {
                    expect(Stack.element.length).toEqual(1);
                });
            });
        });
        describe('pop()', () => {});
        describe('top()', () => {});
        describe('print()', () => {});
        describe('size()', () => {});
        describe('isEmpty()', () => {});
    });
});
