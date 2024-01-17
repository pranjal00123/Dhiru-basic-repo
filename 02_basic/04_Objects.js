// const newObject = new Object(); // singleton object

const eloeloUser = {}

eloeloUser.id = "abcd12234";
eloeloUser.name = "Dhirendra";
eloeloUser.isLoggedIn = false;

console.log("eloelo user", eloeloUser);

const userDetail = {
    Username : {
        name : {
            firstName : "Dhirendra",
            LastName : "Singh"
        }
    },
    Email : "dhiru@example.com",
    isLoggedIn : true,
    contectNumber : 1234567890,
} // non singleton object

// console.log("userDetail", userDetail)
// console.log(userDetail.Username.name.firstName);

let obj1 = {1: "a", 2: "b"}
let obj2 = {3: "c", 4: "d"}

let resultObj = {obj1 , obj2};

// console.log("resultObj", resultObj);
// // const obj3 = Object.assign(obj1, obj2); // Object.assign(taget, souce)
// // console.log("obj3", obj3);

// const obj4 = Object.assign({}, obj1, obj2)
// console.log("obj4",obj4);

// const obj5 = {...obj1 , ...obj2}// using spread Operator

// console.log("obj5", obj5);

console.log(Object.keys(eloeloUser));
console.log(Object.values(eloeloUser));
console.log(Object.entries(eloeloUser));

console.log(eloeloUser.hasOwnProperty("firstname")); // false
console.log(eloeloUser.hasOwnProperty("isLoggedIn")); // true





