let maxNum = parseInt(prompt("Enter you max num"));
while(!maxNum){
    maxNum = parseInt(prompt("Enter valid number:"))
}

let randomNumber = Math.floor(Math.random() *  userNum) + 1;
console.log(randomNumber);

let guess = parseInt(prompt("Enter your first guess!"))
let attempts = 1;

while(userGuess !== randomNumber){
    if(guess === 'q') break;
    attempts++;
    if(userGuess < randomNumber){
        userGuess = parseInt(prompt("Too high, try it again:"));
    } else {
        userGuess = parseInt(prompt("Too low, try it again:"));
    }
}
console.log(`YOU GOT IT. It took you ${attempts} tries`);
