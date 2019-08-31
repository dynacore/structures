import LinkedList from './LinkedList'
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
var testOutput = '[{"key":"Buddy","value":{},"next":"Heeday"},{"key":"Heeday","value":{},"next":"Dwight"},{"key":"Dwight","value":{},"next":"Franklin"},{"key":"Franklin","value":{},"next":"Frank"},{"key":"Frank","value":{},"next":"Michael"},{"key":"Michael","value":{},"next":"Ricky"},{"key":"Ricky","value":{},"next":"Gob"},{"key":"Gob","value":{},"next":"Julian"},{"key":"Julian","value":{},"next":"Bubbles"},{"key":"Bubbles","value":{},"next":null}]';

var testOutput2 = '[{"key":"Buddy","value":{},"next":"Heeday"},{"key":"Heeday","value":{},"next":"Dwight"},{"key":"Dwight","value":{},"next":"Andy"},{"key":"Andy","value":{},"next":"Franklin"},{"key":"Franklin","value":{},"next":"Frank"},{"key":"Frank","value":{},"next":"Michael"},{"key":"Michael","value":{},"next":"Ricky"},{"key":"Ricky","value":{},"next":"Gob"},{"key":"Gob","value":{},"next":"Julian"},{"key":"Julian","value":{},"next":"Bubbles"},{"key":"Bubbles","value":{},"next":null}]';

var test = new LinkedList()
var test2 = new LinkedList()
for (var y in names) {
    test.add(names[y])
    test2.add(names[y])
}

describe('LinkedList', () => {
    it('should create empty linkedList', () => {
        const linkedList = new LinkedList();
        expect(linkedList).not.toBeNull();
        expect(linkedList.empty()).toBe(true)
    })
    it('should add new values to end', () => {
        const linkedList = new LinkedList();
        const s = 'test'
        linkedList.add(s)
        expect(linkedList.tail).toBe(s)
    })
    it('should insert value at correct index', () => {
        var newTest = test2
        var beforeSize = newTest.size()
        newTest.insertAt({key: "Andy", value: {}}, "Dwight")
        expect(newTest.size()).toBe(beforeSize + 1)
        expect(newTest.toString()).toBe(testOutput2)
    })
    it('should remove specific element', () => {
        const linkedList = new LinkedList();
        const one = '1st'
        const two = '2nd'
        const three = '3rd'
        linkedList.add(one)
        linkedList.add(two)
        linkedList.add(three)
        expect(linkedList.size()).toBe(3)
        expect(linkedList.tail).toBe(three)
        linkedList.removeNext(two)
        expect(linkedList.tail).toBe(two)
        expect(linkedList.size()).toBe(2)
    })
    it('should return next element with next()', () => {
        const linkedList = new LinkedList();
        const one = '1st'
        const two = '2nd'
        const three = '3rd'
        linkedList.add(one)
        linkedList.add(two)
        linkedList.add(three)
        expect(linkedList.next(one)).toBe(two)
        expect(linkedList.next(two)).toBe(three)
    })

    it('should print string of linkedList', () => {
        expect(test.toString()).toBe(testOutput)
    })
    it('should return size of linkedList', () => {
        const linkedList = new LinkedList();
        const s = 'test'
        linkedList.add(s)
        linkedList.add(s)
        linkedList.add(s)
        expect(linkedList.size()).toBe(3)
    })
})
