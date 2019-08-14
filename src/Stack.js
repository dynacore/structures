class Stack {
    constructor(name) {
        this.count = 0;
        this.storage = {};
    }
    pop() {
        if(this.count === 0){
            return undefined;
        }

        this.count--;
        var result = this.storage[this.count];
        delete this.storage[this.count];
        return result;

    }
    peek(){
        return this.storage[this.count-1];
    }
    push(val) {
        this.storage[this.count] = val;
        this.count++;
    }
    empty(){
        if(this.count === 0){
            return true;
        }
        else {
            return false;
        }
    }
    toString(){
        var string = "["
        for(let i = this.count-1; i>=0;i--){
            string += this.storage[i]
            if(i>0){
                string += ", "
            }
        }
        string += "]"
        return string
    }
    size() {
        return this.count;
    }
}

module.exports = Stack;

var test = new Stack()
console.log(test.empty())
/*
test.push("Bubbles")
test.push("Gob")
test.push("Frank")
console.log(test.empty())
console.log(test.peek())
console.log(test.peek())
console.log(test.peek())
console.log(test.pop())
console.log(test.pop())
console.log(test.pop())
*/
