import Stack from './Stack'

test('new stack is empty', () => {
    var st = new Stack();
    expect(st.empty()).toBe(true);
});

describe('Stack', () => {
    it('should create empty stack', () => {
        const stack = new Stack();
        expect(stack).not.toBeNull();
        expect(stack.empty()).toBe(true)
    })
    it('should add and return most recent value', () => {
        const stack = new Stack();
        const s = 'test'
        stack.push(s)
        expect(stack.peek()).toBe(s)
    })
    it('should remove top element with pop', () => {
        const stack = new Stack();
        const s = 'test'
        stack.push(s)
        expect(stack.pop()).toBe(s)
        expect(stack.empty()).toBe(true)
    })
    it('should print string of stack', () => {
        const stack = new Stack();
        for (let i = 0; i<6; i++){
            stack.push(i)
        }
        expect(stack.toString()).toBe("[5,4,3,2,1,0]")
    })
    it('should return size of stack', () => {
        const stack = new Stack();
        const s = 'test'
        stack.push(s)
        stack.push(s)
        stack.push(s)
        expect(stack.size()).toBe(3)
    })
})
