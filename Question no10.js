// TOtal totalMarks

let totalMarks=500

// Obtainet Marks in all subjects

let physics=+prompt("Enter your obtained marks in Physics max 100: ");

let chemistry=+prompt("Enter your obtained marks in Chemistry max 100: ");

let computer=+prompt("Enter your obtained marks in Computer max 100: ");

let english=+prompt("Enter your obtained marks in English max 100: ");

let maths=+prompt("Enter your obtained marks in Maths max 100:");

console.log(`
    Obtained Marks ${physics+chemistry+computer+english+maths}
    Total Marks ${totalMarks}
    Percentage: ${((physics+chemistry+computer+english+maths)/totalMarks)*100}%
    `);

