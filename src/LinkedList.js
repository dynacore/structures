function LinkedList () {
    var count = 0;
    var storage = {};
    this.head = null
    this.tail = null
    this.add = function (k,v = {}) {
        if(count > 0){
            storage[this.tail].next = k
        } else {
            this.head = k;
        }
        storage[k] = { key: k, value: v, next: null } 
        this.tail = k;
        count = count + 1
        return storage[k];

    }
    this.next =  function (k) {
        if(storage[k] && storage[k].next){
            return storage[k].next
        } else {
            return undefined
        }
    }
    
    this.empty = function () {
        if(count === 0){
            return true;
        }
        else {
            return false;
        }
    }
    this.toString = function () {
        return JSON.stringify(Object.values(storage)); 
    }
    this.list = function () {
        var start = this.head
        var pointer = start
        var all = ""
        while (this.next(pointer) != undefined){
            all = all + "\n" + JSON.stringify(storage[pointer])
            pointer = this.next(pointer)
        }
        all = all + "\n" + JSON.stringify(storage[this.tail])
        return all
    }
    this.size = function () {
        return count;
    }
}

module.exports = LinkedList;
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

var test = new LinkedList()
console.log(test.empty())
for (var y in names) {
    out(test.add(names[y]))
}
console.log(test.head)
console.log(test.tail)
console.log(test.empty())
//console.log(test.toString())
out(test.list())
console.log(test.head)
console.log(test.tail)
//console.log(test.next(test.head))
/*
var linkedList = new LinkedList();
for (let i = 0; i<60; i++){
    linkedList.enqueue(i + "a")
//console.log(i)
}
console.log(queue.toString())
*/
function out (x) {
    console.log(x)
}

    
