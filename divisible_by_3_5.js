const readline = require('readline');

// Create an interface to read input from the user
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Ask the user for a number
rl.question("Enter a number: ", function(x) {
    x = parseInt(x);  // Convert the input to an integer
    
        for (let i = 1; i <= x; i++) {           
            if (i % 3 === 0 && i % 5 === 0) {
                console.log(i);  
            }
        }
    

    // Close the readline interface after finishing
    rl.close();
});
