//*Month Prompt*//
let favMonth = prompt ("What is your favorite month?");
let lowerfavMonth = favMonth.toLowerCase();

//*Switch Statement*//
switch (favMonth) {
    case "january":
        console.log('You share a birthday month with Jackie Robinson and Dolly Parton!');
        break;
    case "february":
        console.log('You share a birthday month with Harry Styles and The Weeknd!');
        break;
    case "march":
        console.log('You share a birthday month with Justin Bieber and Al Gore!');
        break;
    case "april":
        console.log('You share a birthday month with Selena Quintanilla and Martin Lawrence!');
        break;
    case "may":
        console.log('You share a birthday month with Malcolm X and Dwayne "The Rock" Johnson!');
        break;
    case "june":
        console.log('You share a birthday month with Tom Holland and Marilyn Monroe!');
        break;
    case "july":
        console.log('You share a birthday month with Vin Diesel and Jennifer Lopez!');
        break;
    case "august":
        console.log('You share a birthday month with Barack Obama and Michael Jackson!');
        break;
    case "september":
        console.log('You share a birthday month with Zendaya and Donald Glover!');
        break;
    case "october":
        console.log('You share a birthday month with Bruno Mars and Hugh Jackman!');
        break;
    case "november":
        console.log('You share a birthday month with Emma Stone and Tina Turner!');
        break;
    case "december":
        console.log('You share a birthday month with Taylor Swift and Billie Eilish!');
        break;
    default:
        console.log('That month does not exist.');
}
//*If Prompt*//
if (favMonth === "december" || favMonth === "january" || favMonth === "february") {
        console.log("You love the winter months!");
} else if (favMonth === "march" || favMonth === "april" || favMonth === "may") {
        console.log("You love the spring months!");
} else if (favMonth === "june" || favMonth === "july" || favMonth === "august") {
        console.log("You love the summer months!");
} else {
        console.log("You love the autumn months!");
}
