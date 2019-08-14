class Queue {
    constructor(name) {
        this.count = 0;
        this.storage = {};
    }
    dequeue() {
        if(this.count === 0){
            return undefined;
        }

        this.count--;
        var result = this.storage[0];
        for(let i=1;i<=this.count,i++){
            this.storage[i-1] = this.storage[i]
        }
        delete this.storage[this.count];
        return result;

    }
    front(){
        return this.storage[0];
    }
    rear(){
        return this.storage[this.count-1];
    }
    enqueue(val) {
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
        return eval(string)
    }
    size() {
        return this.count;
    }
}

module.exports = Queue;

var test = new Queue()
console.log(test.empty())
/*
test.enqueue("Bubbles")
test.enqueue("Gob")
test.enqueue("Frank")
console.log(test.empty())
console.log(test.peek())
console.log(test.peek())
console.log(test.peek())
console.log(test.dequeue())
console.log(test.dequeue())
console.log(test.dequeue())
*/
