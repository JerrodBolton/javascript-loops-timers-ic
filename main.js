// alert("What is going on");


// Review 1: loop

// Use a for loop to print numbers -3 through 8

// for (let idx = -3; idx <= 8; idx++) {
//      console.log(idx);
// }

//  Review 2: Loop

// Use a for loop to count from -5 to 5 three times in a row.

// for (let idx = -5; idx <= 5; idx++) {
    
//     console.log(idx);
//     console.log(idx);
//     console.log(idx);

// }

//  Review 3: Loop
// Use a for loop to print only even numbers from -50 to 50.
 
// for(let idx = -50; idx <= 50; idx++){
//  if(idx%2 === 0){
//     console.log(idx);
//  }
// }


// Review 4: Loop
// Use a for loop to print from 0 to 50. Once it gets to 10, print "TEN!!!" instead of the number.

// function review() {
//   for (let idx = 0; idx <= 9; idx++) {
//     console.log(idx);
//   }
//   let x = "TEN";
//   console.log(x);

//   for (let i = 11; i <= 50; i++) {
//     console.log(i);
//   }
// }
// review();

// Review 5: Loop
// Prompt the user to enter a number. Prompt the user to enter another number. Create a for loop that counts from the first number to the second number.


// let x = prompt("Can you put a number"); //I  have to ask a question(I need to the person to put a number in a the variable)
// let y = prompt("Can you enter one more number"); //I  have to ask a question(I need to the person to put a number in a the variable)

// x = parseFloat(x); //Make the string into a number 
// y = parseFloat(y);//Make the string into a number 

// // x my starting number 
// // y my ending number
// function numberEnterer(){
//     for(let i = x; i <= y; i++){
//        console.log(i)
       
//     }
// } 
// numberEnterer();


// Review 6: Loop
// Create a hardcoded/fixed password. Create a loop that will ask the user to enter a password until it matches the hardcoded password. 
// Once they match alert the user (`THAT’S CORRECT!!!`) Keep asking the user until they get the right password.
// NOTE: Your code should handle the password regardless of the case (upper or lower).


// I need to make some that is for password 

//  const password = ("CODE")
//  let notRight = true;

// // I need to ask a prompt question

//  while(notRight){
//      let x = prompt("What it the password?").toUpperCase();
//      if( x === password){
//         alert(`THAT’S CORRECT!!!`);
//         notRight = false;
//     }
//     else{
//         alert("Your wrong!!!!")
//     }
  
//  }


// I need to let the user know that they  got it right;