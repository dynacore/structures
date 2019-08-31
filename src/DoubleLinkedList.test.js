import DoubleLinkedList from './DoubleLinkedList'
var names = [
    "Buddy",
    "Heeday",
    "Dwight",
    "Franklin",
    "Frank",
    "Michael",
    "Ricky",
    "Gob",
    "Julian",
    "Bubbles"
]
var testOutput = '[{"key":"Buddy","value":{},"next":"Heeday","prev":null},{"key":"Heeday","value":{},"next":"Dwight","prev":"Buddy"},{"key":"Dwight","value":{},"next":"Franklin","prev":"Heeday"},{"key":"Franklin","value":{},"next":"Frank","prev":"Dwight"},{"key":"Frank","value":{},"next":"Michael","prev":"Franklin"},{"key":"Michael","value":{},"next":"Ricky","prev":"Frank"},{"key":"Ricky","value":{},"next":"Gob","prev":"Michael"},{"key":"Gob","value":{},"next":"Julian","prev":"Ricky"},{"key":"Julian","value":{},"next":"Bubbles","prev":"Gob"},{"key":"Bubbles","value":{},"next":null,"prev":"Julian"}]';

var testOutput2 = '[{"key":"Buddy","value":{},"next":"Heeday","prev":null},{"key":"Heeday","value":{},"next":"Dwight","prev":"Buddy"},{"key":"Dwight","value":{},"next":"Andy","prev":"Heeday"},{"key":"Andy","value":{},"next":"Franklin"},{"key":"Franklin","value":{},"next":"Frank","prev":"Dwight"},{"key":"Frank","value":{},"next":"Michael","prev":"Franklin"},{"key":"Michael","value":{},"next":"Ricky","prev":"Frank"},{"key":"Ricky","value":{},"next":"Gob","prev":"Michael"},{"key":"Gob","value":{},"next":"Julian","prev":"Ricky"},{"key":"Julian","value":{},"next":"Bubbles","prev":"Gob"},{"key":"Bubbles","value":{},"next":null,"prev":"Julian"}]';

var test = new DoubleLinkedList()
var test2 = new DoubleLinkedList()
for (var y in names) {
    test.add(names[y])
    test2.add(names[y])
}

describe('DoubleLinkedList', () => {
    it('should create empty doubleLinkedList', () => {
        const doubleLinkedList = new DoubleLinkedList();
        expect(doubleLinkedList).not.toBeNull();
        expect(doubleLinkedList.empty()).toBe(true)
    })
    it('should add new values to end', () => {
        const doubleLinkedList = new DoubleLinkedList();
        const s = 'test'
        doubleLinkedList.add(s)
        expect(doubleLinkedList.tail).toBe(s)
    })
    it('should insert value at correct index', () => {
        var newTest = test2
        var beforeSize = newTest.size()
        newTest.insertAt({key: "Andy", value: {}}, "Dwight")
        expect(newTest.size()).toBe(beforeSize + 1)
        expect(newTest.toString()).toBe(testOutput2)
    })
    it('should remove specific element', () => {
        const doubleLinkedList = new DoubleLinkedList();
        const one = '1st'
        const two = '2nd'
        const three = '3rd'
        doubleLinkedList.add(one)
        doubleLinkedList.add(two)
        doubleLinkedList.add(three)
        expect(doubleLinkedList.size()).toBe(3)
        expect(doubleLinkedList.tail).toBe(three)
        doubleLinkedList.removeNext(two)
        expect(doubleLinkedList.tail).toBe(two)
        expect(doubleLinkedList.size()).toBe(2)
    })
    it('should return next element with next()', () => {
        const doubleLinkedList = new DoubleLinkedList();
        const one = '1st'
        const two = '2nd'
        const three = '3rd'
        doubleLinkedList.add(one)
        doubleLinkedList.add(two)
        doubleLinkedList.add(three)
        expect(doubleLinkedList.next(one)).toBe(two)
        expect(doubleLinkedList.next(two)).toBe(three)
    })
    it('should return previous element with prev()', () => {
        const doubleLinkedList = new DoubleLinkedList();
        const one = '1st'
        const two = '2nd'
        const three = '3rd'
        doubleLinkedList.add(one)
        doubleLinkedList.add(two)
        doubleLinkedList.add(three)
        expect(doubleLinkedList.prev(one)).toBe(undefined)
        expect(doubleLinkedList.prev(two)).toBe(one)
        expect(doubleLinkedList.prev(three)).toBe(two)
    })

    it('should print string of doubleLinkedList', () => {
        expect(test.toString()).toBe(testOutput)
    })
    it('should return size of doubleLinkedList', () => {
        const doubleLinkedList = new DoubleLinkedList();
        const s = 'test'
        doubleLinkedList.add(s)
        doubleLinkedList.add(s)
        doubleLinkedList.add(s)
        expect(doubleLinkedList.size()).toBe(3)
    })
})
