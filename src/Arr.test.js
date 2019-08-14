import Arr from './Arr'

test('new arr is empty', () => {
    var st = new Arr();
    expect(st.empty()).toBe(true);
});

describe('Arr', () => {
    it('should create empty arr', () => {
        const arr = new Arr();
        expect(arr).not.toBeNull();
        expect(arr.length).toBe(0)
    })
    it('should add and return most recent value', () => {
        const arr = new Arr();
        const s = 'test'
        arr.push(s)
        expect(arr.get(0)).toBe(s)
    })
    it('should remove last element with pop', () => {
        const arr = new Arr();
        const s = 'test'
        arr.push(s)
        expect(arr.pop()).toBe(s)
        expect(arr.length).toBe(0)
    })
    it('should return size of arr', () => {
        const arr = new Arr();
        const s = 'test'
        arr.push(s)
        arr.push(s)
        arr.push(s)
        expect(arr.length).toBe(3)
    })
    it('should insert at specific element', () => {
        var test = new Arr()
        const s = 'Michael'
        test.push("Bubbles")
        test.push("Gob")
        test.push("Frank")
        test.insertAt(s,1)

        expect(test.get(1)).toBe(s)
        expect(test.length).toBe(4)
    })
    it('should delete at specific element', () => {
        var test = new Arr()
        test.push("Bubbles")
        test.push("Gob")
        test.push("Frank")
        test.deleteAt(1)

        expect(test.get(1)).toBe("Frank")
        expect(test.length).toBe(2)
    })

})
