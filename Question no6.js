let item1 = +prompt("Enter 1st product price");
let item2 = +prompt("Enter 2nd product price");
let item3 = +prompt("Enter 3rd product price");

console.log(`
total amount ${item1+item2+item3}: 
discount amount ${(item1+item2+item3)/10}:
total amount after discount ${(item1+item2+item3)-((item1+item2+item3)/10)}:
    `);
