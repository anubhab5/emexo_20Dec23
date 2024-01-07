// var myName = "Rahul";
// var myMarks = 67;
// var isPassed = false;
// var myAge = 23;

// myAge = null;

// console.log("My age is : " + myAge); // concatenation of two strings


// function addValues(num1, num2) {
//     // console.log(num1);
//     // console.log(num2);
//     console.log(num1 + num2);
// }

// // addValues("Rahul", 4);

// function mouseEnterFn() {
//     console.log("mouse enter");
// }

// function mouseLeaveFn() {
//     console.log("mouse Leave called");
// }

// function mouseClickFn() {
//     console.log("mouse clicked");
// }

// // let myMarks = 12;
// // console.log(myMarks)


// // myFunc();

// // function myFunc() {

// //     console.log('myFunc is called');

// //     // if (true) {
// //     //     const age = 23;
// //     //     console.log(age);
// //     // }

// //     // console.log(age);
// // }

// // var myFunc = function () {
// //     myFunc();
// //     console.log("my func is called");
// // }

// // (function getMyName() {
// //     console.log('My Name Is Ak');
// // })();

// let student = {
//     sName: "Abc",
//     sAge: 23,
//     sMarks: [20, 12, 23],
//     sIsPassed: true,
//     sAddress: {
//         houseNumber: "204"
//     },
//     sayMyName: function () {
//         console.log("My name is Abc");
//     }
// };
// console.log(student.sMarks[1])
// console.log(student.sayMyName());

// // let propName = 'sName';
// // console.log(student[propName]);

// // const arr = [1, 2, 3, 4];

// // console.log(arr[20]);

// // var grade = "B";

// // switch (grade) {
// //     case "A":
// //         console.log("very good");
// //     case "B":
// //         console.log(" good");
// //     case "C":
// //         console.log("passed");
// //         break;
// //     default:
// //         console.log("F");

// // }


// var student1 = {
//     sName: "Abc",
//     sAge: 23,
//     sMarks: [12, 23, 34],
//     sIsPassed: true
// };

// console.log(student1);

// console.log(student1.sName);

// var prop = "sAge"
// console.log(student1[prop]);


// function handleClick(num) {
//     console.log("Btn clicked", num);
// }


// function handleClickOne() {
//     console.log("Btn1 clicked");
// }

// function handleClickTwo() {
//     console.log("Btn  2 clicked");
// }

// function handleClickThree() {
//     console.log("Btn 3 clicked");
// }

// function handleClick() {
//     let fName = document.forms["demoForm"]["fName"].value;
//     let lName = document.forms["demoForm"]["lName"].value;
//     let gender = document.forms["demoForm"]["gender"].value;
//     let language = document.forms["demoForm"]["language"].value;
//     let idProofList = document.forms["demoForm"]["idProof"];
//     console.log('-----');
//     console.log(idProofList)
//     console.log('-----');
//     let idProofVals = [];

//     for (var i = 0; i < idProofList.length; i++) {
//         if (idProofList[i].checked) {
//             idProofVals.push(idProofList[i].value);
//         }
//     }
//     let color = document.forms["demoForm"]["myColor"].value;
//     console.log(fName);
//     console.log(lName);
//     console.log(gender);
//     // console.log(language);
//     // console.log(color);
//     console.log(idProofVals);
// }

// // console.log(document.getElementById("myId").innerHTML);
// console.log(document.getElementsByTagName('p'));

// console.log(document.querySelectorAll('p.intro')[1].innerHTML);

const para = document.createElement('p');
const value = document.createTextNode("This is new para.123");
para.style = 'background: blue; color: white';
para.className = 'container';


function eventListener() {
    console.log("clicked");
}


para.appendChild(value);
para.addEventListener('dblclick', eventListener)

document.getElementById('container').appendChild(para);


let arr = [1, 2, 3, 4];
arr.push(99)
console.log(arr)
arr.pop();
console.log(arr)
arr.unshift(0);
console.log(arr);
arr.shift();
console.log(arr);


// const toBeRemoved = document.getElementById('state');
// document.getElementById('container').removeChild(toBeRemoved);

// // expires=Thu, 01 Jan 1970 00:00:01 GMT;
// // document.cookie = "username=rahim;"

// // let t = confirm('Do you want to continue');
// // console.log(t)

// // console.log(prompt("Please enter your name", "Harry Potter"));

// console.log(document.getElementById("country").innerHTML)

// console.log(document.querySelectorAll("p.intro"));
// document.getElementsByTagName("p")[1].style = 'color: red'
// document.getElementsByTagName("p")[1].className = 'container';


// alert("this is alert")

// console.log(confirm("Are you done?"))


// const nameIs = prompt("Please enter your name", "Harry Potter")
// console.log(nameIs + " My name ");
// 

// // expires=Thu, 01 Jan 1970 00:00:01 GMT;
document.cookie = "username=ram123;expires=Thu, 07 Jan 2024 09:22:10 GMT"