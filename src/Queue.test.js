import Queue from './Queue'

test('new queue is empty', () => {
    var st = new Queue();
    expect(st.empty()).toBe(true);
});

describe('Queue', () => {
    it('should create empty queue', () => {
        const queue = new Queue();
        expect(queue).not.toBeNull();
        expect(queue.empty()).toBe(true)
    })
    it('should add new values to end', () => {
        const queue = new Queue();
        const s = 'test'
        queue.enqueue(s)
        expect(queue.rear()).toBe(s)
    })
    it('should remove values from front', () => {
        const queue = new Queue();
        const one = '1st'
        const two = '2nd'
        queue.enqueue(one)
        queue.enqueue(two)
        expect(queue.dequeue()).toBe(one)
        expect(queue.front()).toBe(two)
    })
    it('should print string of queue', () => {
        const queue = new Queue();
        for (let i = 0; i<6; i++){
            queue.enqueue(i)
        }
        expect(queue.toString()).toBe("[0,1,2,3,4,5]")
    })
    it('should return size of queue', () => {
        const queue = new Queue();
        const s = 'test'
        queue.enqueue(s)
        queue.enqueue(s)
        queue.enqueue(s)
        expect(queue.size()).toBe(3)
    })
})
