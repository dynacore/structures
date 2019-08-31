class Arr {
    constructor(name) {
        this.length = 0;
        this.storage = {};
    }
    pop() {
        if(this.length === 0){
            return undefined;
        }

        this.length--;
        var result = this.storage[this.length];
        delete this.storage[this.length];
        return result;

    }
    get(index) {
        return this.storage[index];
    }
    insertAt(val, index) {
        for(let i = this.length; i>index; i--){
            this.storage[i] = this.storage[i-1]
        }
        this.storage[index] = val
        this.length++
        return this.storage
    }
    deleteAt(index) {
        for(let i = index; i<this.length; i++){
            this.storage[i] = this.storage[i+1]
        }
        delete this.storage[this.length-1]
        this.length--
        return this.storage
    }
    push(val) {
        this.storage[this.length] = val;
        this.length++;
        return this.storage;
    }

    empty(){
        if(this.length === 0){
            return true;
        }
        else {
            return false;
        }
    }
    size() {
        return this.length;
    }
}

module.exports = Arr;
/*
var test = new Arr()
console.log(test.empty())
test.push("Bubbles")
console.log(test.length)
test.push("Gob")
console.log(test.length)
test.push("Frank")
console.log(test.storage)
console.log(test.storage[1])
console.log(test[1])
console.log(test.empty())
console.log(test.length)
console.log(test.pop())
console.log(test.length)
console.log(test.pop())
console.log(test.length)
console.log(test.pop())
*/
