function reverseSort(arr){
    return arr.sort((a, b) => b - a);
};

function printList(list) {
    let current = list;
    while (current) {
        console.log(current.value);
        current = current.next;
    }
}

function printListRec(list) {
    if (!list) return;
    console.log(list.value);
    printListRec(list.next);
}

function printReverseListRec(list) {
    if (!list) return;
    printReverseListRec(list.next);
    console.log(list.value);
}

function printReverseList(list) {
    let stack = [];
    let current = list;
    
    while (current) {
        stack.push(current.value);
        current = current.next;
    }
    
    while (stack.length > 0) {
        console.log(stack.pop());
    }
}