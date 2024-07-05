"use strict";
//Task 34 Pizzas:
// Think of atleast three types of your favorite pizzas. store those pizza names in an array and
//then use a for loop to print the name of each pizza
//1) Modify your loop to print a sentence using the name of pizza instead of printing just the name 
//of the pizza. for each pizza you should have one line of output containing a simple statement
// like "i like pepperioni pizza"
//2)Add a line at the end of your program, outside the for loop that states how much you like pizza. the output
//should consists of three or more lines about the kinds of pizzas, you like and then an additional senstence,
//such as i really love pizza. 
let FavPizza = ["Creamy tikka", "Fajita", "Afgani feast"];
for (let i = 0; i < FavPizza.length; i++) {
    console.log(FavPizza[i]);
}
for (let i = 0; i < FavPizza.length; i++) {
    console.log(`i like ${FavPizza[i]}`);
}
console.log("\nI really love pizza");
