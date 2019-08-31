function Tree () {
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
    this.insertAt = function(element, index = this.tail){
        if(element.key){
            var next = storage[index].next;
            storage[element.key] = {
                key: element.key,
                value: element.value,
                next: next
            }
            storage[index].next = element.key;
            count++
            return storage[element.key]
        } else {
            return "Element needs key to add to linked list."
        }
    }
    this.removeNext = function(index){
        var original_next = storage[index].next
        var new_next = storage[original_next].next
        if(original_next == this.tail){
            this.tail = index
            new_next = null
        }
        storage[index].next = new_next
        delete storage[original_next]
        count--
        return 
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
        var start = this.head
        var pointer = start
        var all = "["
        while (this.next(pointer) != undefined){
            all = all + JSON.stringify(storage[pointer])+","
            pointer = this.next(pointer)
        }
        all = all + JSON.stringify(storage[this.tail])+"]"
        return all
    }
    this.size = function () {
        return count;
    }
}

module.exports = Tree;
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
/*
var test = new Tree()
console.log(test.empty())
for (var y in names) {
    out(test.add(names[y]))
}
console.log(test.head)
console.log(test.tail)
console.log(test.empty())
out(test.toString())
console.log(test.head)
console.log(test.tail)
console.log(test.insertAt({key: "Andy", value: {}}, "Dwight"))

out(test.toString())
*/
//console.log(test.toString())
//console.log(test.next(test.head))
/*
var tree = new Tree();
for (let i = 0; i<60; i++){
    tree.enqueue(i + "a")
//console.log(i)
}
console.log(queue.toString())
*/
function out (x) {
    console.log(x)
}

    
