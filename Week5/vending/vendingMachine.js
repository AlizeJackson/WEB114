let snackCount = prompt("How many snacks do you want?");
let totalSnacks = snackCount;

if (snackCount === null) {
    console.log("No snacks requested. Aren't you hungry?");
}

//*FOR LOOP*//
for (let i = 1; i <= snackCount; i++) {
    let snack = prompt("Enter snack # " + i + " name: ");
        console.log("Snack #" + i + ": " + snack+ " dispensed. Enjoy!");
    
    if (i % 3 === 0) {
        console.log("CONGRATS! You got a bonus snack!");
    }
    
    if (i % 5 === 0) {
        console.log("CONGRATS! You got extremely lucky with more snacks!");
    }
    
    if (snack === null) {
    console.log("No snacks requested. Aren't you hungry?");
    //*Stops loop immediately*//
    }
}