function Tree () {
    var count = 0;
    var storage = {};
    var root = null;
    this.add = function (p,k,v = {}) {
        if(root == null){
            root = k;
            p = null
        }
        storage[k] = { key: k, value: v, parents: p, children: [] } 
        if(p){
            storage[p].children.push(k)
        }
        count = count + 1
        return storage[k];

    }
    this.parents =  function (k) {
        if(storage[k] && storage[k].parents){
            return storage[k].parents
        } else {
            return undefined
        }
    }
    this.children =  function (k) {
        if(storage[k] && storage[k].children){
            return storage[k].children
        } else {
            return undefined
        }
    }
    this.root = function(){
        return root;
    }
    /*
    this.remove = function(index){
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
    */
    this.empty = function () {
        if(count === 0){
            return true;
        }
        else {
            return false;
        }
    }
    this.toString = function () {
        out(JSON.stringify(storage))
        return JSON.stringify(storage)
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
var tree = new Tree()
for (var i=0; i<names.length; i++){
    if(i>0){
        tree.add(names[i-1], names[i],{test: "asnery"})
    } else {
        tree.add(null,names[i],{})
    }
}
tree.toString()
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

    
