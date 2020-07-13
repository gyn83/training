/* let name = "Gyurkovits Norbert";

function reverseName(name) {
    let reverse = name.split().reverse();
    console.log(reverse);
}; */

/* function reverseString(str) {
    var splitString = str.split("");
    
    var reverseArray = splitString.reverse(); 

    var joinArray = reverseArray.join();

    console.log(splitString);
    console.log(reverseArray);
    console.log(joinArray);
}

reverseString("Gyurkovits Norbert"); */

/* function reverseName(str) {
    
    let reverseName =  str.split('').reverse().join("").toUpperCase().trim();
    console.log(reverseName);
}

reverseName("Gyurkovits Norbert");
 */

 let user = {
    name: 'Végh Béla',
    age:"20",
    city: "Bp",
    balance = "$1.241.291"
 };


 user.minusBalance = function(amount) {
    this.balance -= amount; 
 }




 


