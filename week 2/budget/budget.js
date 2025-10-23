//*Alize Jackson WEB 114 October 22nd, 2025 *//
let money= 1200;
let housing= 150;
let food= 300;
let monthlybills= 250;
let totalIncome= money;
let totalExpenses= housing + food + monthlybills;
let remainingMoney= totalExpenses - money;
let rentPercent= (housing / money) * 100;
let foodPercent= (food / money) * 100;

console.log("Total income was: " + money.toLocaleString("en-US", { style: "currency", currency:"USD" }));
console.log("Rent amount was: " + housing.toLocaleString("en-US", { style: "currency", currency:"USD" }));
console.log("Grocery total was: " + food.toLocaleString("en-US", { style: "currency", currency:"USD" }));
console.log("Percentage spent on rent is: " + rentPercent);
console.log("Percentage spent on groceries is: " + foodPercent);
