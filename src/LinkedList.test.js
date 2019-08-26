import LinkedList from './LinkedList'

test('new linkedList is empty', () => {
    var st = new LinkedList();
    expect(st.empty()).toBe(true);
});

describe('LinkedList', () => {
    it('should create empty linkedList', () => {
        const linkedList = new LinkedList();
        expect(queue).not.toBeNull();
        expect(queue.empty()).toBe(true)
    })
    it('should add new values to end', () => {
        const linkedList = new LinkedList();
        const s = 'test'
        linkedList.enqueue(s)
        expect(queue.tail()).toBe(s)
    })
    it('should remove values from head', () => {
        const linkedList = new LinkedList();
        const one = '1st'
        const two = '2nd'
        linkedList.enqueue(one)
        linkedList.enqueue(two)
        expect(queue.dequeue()).toBe(one)
        expect(queue.head()).toBe(two)
    })
    it('should print string of linkedList', () => {
        const linkedList = new LinkedList();
        for (let i = 0; i<6; i++){
            linkedList.enqueue(i)
        }
        expect(queue.toString()).toBe("[0,1,2,3,4,5]")
    })
    it('should return size of linkedList', () => {
        const linkedList = new LinkedList();
        const s = 'test'
        linkedList.enqueue(s)
        linkedList.enqueue(s)
        linkedList.enqueue(s)
        expect(queue.size()).toBe(3)
    })
})
