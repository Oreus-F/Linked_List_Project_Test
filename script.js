class LinkedList{
    constructor(){
        this.head = null
    }


    
    append(value, node = this.head){

        if(node === this.head && node === null){
            this.head = new Node(value)
            return
        }

        if(node.nextNode === null){
            node.nextNode = new Node(value)
            
        } else {
            let temp = node.nextNode;
            return this.append(value, temp)
        }

    }

    prepend(value){
        if(this.head === null){
            this.head = new Node(value)
        } else {
            const temp = this.head
            const newValue = new Node(value);
            newValue.nextNode = temp
            this.head = newValue
        }
    }


    printTest(){

        if(!this.head){
            return;
        }

        let node = this.head;
        let str = "";

        while(node){
            str += node.value + ' ';
            node = node.nextNode;
        }

        return str
    }
}

class Node{
    constructor(value = null, next = null){
        this.value = value,
        this.nextNode = next
    }
}


const list = new LinkedList;
list.append("dog");
list.append("cat");
list.append("bird");
list.append("train");


console.log(list.printTest());

list.prepend('monkey');

console.log(list.printTest());
