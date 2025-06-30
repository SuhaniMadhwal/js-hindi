// PRIMITIVE DATA TYPES

// 7 types : String, Number, Boolean, Null, Undefined, Symbol, BigInt

const score =100
const scoreValue =100.3
const isLoggedIn = false
let userEmail; //undefined

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId); //false

const bigNumber =23865476786n




//Refernce Type (Non- Primitive)

//Array, Objects, Functions

const heroes = ["ironman", "shaktiman", "superman"]
let myObj={
    name : "suhani",
    age : 22
}

//Function
const myFunction = function(){
    console.log("Hello Suhani");
}

console.log( typeof bigNumber); //undefined



/// ++++++++++++++++++++++++++++++++++++++++++++++


//Stack(Primitive), Heap(non-primitive)

let myytname = "Suhani"
let anothername = myytname
anothername = "chaiwala"
// console.log(myytname);
// console.log(anothername);


let user1 ={
    email : "sm@gmail.com",
    upi : "user123"
}

let user2 = user1
user2.email = "md@gmail.com"

console.log(user1.email);
console.log(user2.email);