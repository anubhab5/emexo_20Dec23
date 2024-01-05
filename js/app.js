// var myName = "Rahul";
// var myMarks = 67;
// var isPassed = false;
// var myAge = 23;

// myAge = null;

// console.log("My age is : " + myAge); // concatenation of two strings


function addValues(num1, num2) {
    // console.log(num1);
    // console.log(num2);
    console.log(num1 + num2);
}

// addValues("Rahul", 4);

// function mouseEnterFn() {
//     console.log("mouse enter");
// }

// function mouseLeaveFn() {
//     console.log("mouse Leave called");
// }

// function mouseClickFn() {
//     console.log("mouse clicked");
// }

// let myMarks = 12;
// console.log(myMarks)


// myFunc();

// function myFunc() {

//     console.log('myFunc is called');

//     // if (true) {
//     //     const age = 23;
//     //     console.log(age);
//     // }

//     // console.log(age);
// }


// var myFunc = function () {
//     myFunc();
//     console.log("my func is called");
// }

// (function getMyName() {
//     console.log('My Name Is Ak');
// })();

let student = {
    sName: "Abc",
    sAge: 23,
    sMarks: [20, 12, 23],
    sIsPassed: true,
    sAddress: {
        houseNumber: "204"
    },
    sayMyName: function () {
        console.log("My name is Abc");
    }
};
console.log(student.sMarks[1])
// console.log(student.sayMyName());

let propName = 'sName';
console.log(student[propName]);

const arr = [1, 2, 3, 4];

console.log(arr[20]);