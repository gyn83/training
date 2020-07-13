// összegzés tétele 

let numericArray = [1,3,5,6,8,19,7];
let sum = 0;

for (let i=0; i< numericArray.length; i++) {
    sum += numericArray[i];
}

console.log("Sum: ", sum);

// számlálás tétele 

let db = 0;
for (let i = 0; i < numericArray.length; i++) {
    if (numericArray[i] % 2 ==0) {
        db++;
    }
}

console.log("Even num: ", db);

//szélsőérték keresése biggest

let biggest = numericArray[0];

for (let i = 0; i <numericArray.length; i++) {
    if (numericArray [i] > biggest) {
        biggest = numericArray[i];
    }
}

//szélsőérték keresése smallest

console.log("The Biggest element: ", biggest);

let smallest = numericArray[0];

for (let i = 0; i <numericArray.length; i++) {
    if (numericArray [i] < smallest) {
        smallest = numericArray[i];
    }
}

console.log("The Smallest element: ", smallest);

// Eldöntés tétele 

let contain = false; 

for (let i =0; i < numericArray.length && !contain; i++) {
    if (numericArray[i] == 15) {
        contain = true;
    }
}
console.log("This array contains 15: ", contain);

