const array = [ 3, 5, 2, 9, 11];
console.log("Відсортований масив:", reverseSort(array));

const list = { value: 1 };
list.next = { value: 2 };
list.next.next = { value: 3 };
list.next.next.next = { value: 4 };

console.log("Виведення списку за допомогою циклу:");
printList(list);

console.log("\nВиведення списку за допомогою рекурсії:");
printListRec(list);

console.log("\nВиведення елементів списку в оберненому порядку, за допомогою рекурсії:");
printReverseListRec(list);

console.log("\nВиведення елементів списку в оберненому порядку, за допомогою циклу:");
printReverseList(list);
