class LinkedList {
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
        for(let i=1;i<=this.count;i++){
            this.storage[i-1] = this.storage[i]
        }
        delete this.storage[this.count];
        return result;

    }
    head(){
        return this.storage[0];
    }
    tail(){
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
        return JSON.stringify(Object.values(this.storage)); 
    }
    size() {
        return this.count;
    }
}

module.exports = LinkedList;

var test = new LinkedList()
console.log(test.empty())
test.enqueue("Bubbles")
test.enqueue("Gob")
test.enqueue("Frank")
console.log(test.head())
console.log(test.tail())
console.log(test.empty())
console.log(test.toString())
console.log(test.dequeue())
console.log(test.dequeue())
console.log(test.dequeue())
    /*
var linkedList = new LinkedList();
for (let i = 0; i<60; i++){
    linkedList.enqueue(i + "a")
    //console.log(i)
}
console.log(queue.toString())
*/
