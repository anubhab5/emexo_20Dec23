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

// const para = document.createElement('p');
// const value = document.createTextNode("This is new para.123");
// para.style = 'background: blue; color: white';
// para.className = 'container';


// function eventListener() {
//     console.log("clicked");
// }


// para.appendChild(value);
// para.addEventListener('dblclick', eventListener)

// document.getElementById('container').appendChild(para);


// let arr = [1, 2, 3, 4];
// arr.push(99)
// console.log(arr)
// arr.pop();
// console.log(arr)
// arr.unshift(0);
// console.log(arr);
// arr.shift();
// console.log(arr);


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
// document.cookie = "username=ram123;expires=Thu, 07 Jan 2024 09:22:10 GMT"

//
//
//

// slice vs splice
// array.slice(start, end)
// array.splice(index, howmany, item1, ....., itemX)
// console.log('111111111111111');

// // Create a new XMLHttpRequest object
// const xhr = new XMLHttpRequest();
// // Open a connection to the server
// xhr.open('GET', 'https://reqres.in/api/users', true);
// // Set the request headers
// xhr.setRequestHeader('Content-Type', 'application/json');
// // Send the request
// xhr.send();
// // Handle the response
// xhr.onreadystatechange = function () {
//     if (xhr.readyState === 4 && xhr.status === 200) {
//         console.log(xhr.responseText);
//     }
// };
// console.log('111111111111111');

// const person = {
//     firstName: "John",
//     lastName: "Doe",
//     fullName: function (age) {
//         return this.firstName + " " + this.lastName + " Age is " + age;
//     }
// };

// person1 = {
//     firstName: "Ram",
//     lastName: "Sharma"
// }

// console.log(person.fullName(21));

// console.log(person.fullName.call(person1, 22));
// console.log(person.fullName.apply(person1, [23]));

// var marks = 23;

// console.log(typeof marks);

// if (marks === 23) {
//     console.log("if block");
// } else {
//     console.log("else block");
// }

// function myFunc() {
//     console.log("Inside a function random");
// }

// function myFunc2() {
//     console.log("Its very high");
// }

// function alertMe() {
//     alert('alert me');
// }

// function add(num1, num2, cb) {
//     console.log('hii');
//     if (num1 + num2 > 10) {
//         cb();
//     }
//     return (num1 + num2 + 2);
// }

// var sum = add(1, 22, alertMe);
// add(11, 2, myFunc2);

// console.log(sum);

// alertMe();


// function outside() {

//     var outsideFuncVar = 12;
//     // return 5;
//     return function inside() {

//         console.log("outside var value is ", outsideFuncVar);
//     }

// }

// var abc = outside();
// // console.log("outsideFuncVar ", outsideFuncVar);
// abc();
// try {
//     var num1 = 10;
//     var num2 = 0;
//     if (num2 === 0) {
//         throw "Divison by Zero";
//     }
//     console.log(num1 / num2);
// } catch (exp) {
//     console.log(exp);
// } finally {
//     console.log('In finally')
// }

// var myDate = new Date();
// console.log(myDate.getHours());

// console.log(new Date(2024, 2, 13));

// const actions = {
//     sayMyName: function (greeting) {
//         console.log(greeting + ' My first Name is: ' + this.firstName)
//     },
//     sayMyAge: function () {
//         console.log('Age is: ' + this.age)
//     }
// }

// const person = {
//     firstName: "John",
//     lastName: "Doe",
//     age: 21
// };

// const person1 = {
//     firstName: "Mary",
//     lastName: "Doe",
//     age: 23
// };

// actions.sayMyName.call(person, 'hello');
// actions.sayMyName.call(person1, 'hi');
// console.log('')
// actions.sayMyName.apply(person, ['hello']);
// actions.sayMyName.apply(person1, ['hi']);

$(document).ready(function () {

    // $("p").click(function () {
    //     $(".intro").hide();
    //     $("#country").hide();
    //     // console.log("clicked");
    // });

    // $("p").on("click", function () {
    //     $(this).hide();
    // });

    // $("p").on({
    //     mouseenter: function () {
    //         $(this).css("background-color", "lightgray");
    //     },
    //     mouseleave: function () {
    //         $(this).css("background-color", "lightblue");
    //     },
    //     click: function () {
    //         $(this).css("background-color", "yellow");
    //     }
    // });

    // $("input").focus(function () {
    //     $(this).css("background-color", "#cccccc");
    // });

    // $("p").append("Some appended text.");

    // var txt1 = "<p>Text.</p>";               // Create element with HTML
    // var txt2 = $("<p></p>").text("Text.");   // Create with jQuery
    // var txt3 = document.createElement("p");  // Create with DOM
    // txt3.innerHTML = "Text.";
    // $("body").append(txt1, txt2, txt3);

});

// var person_3 = {
//     firstName: "John",
//     lastName: "Doe",
//     age: 22,
//     sayMyName: function (greeting, isPassed) {
//         console.log(greeting + " " + isPassed + " " + this.firstName, this.lastName, this.age);
//     }
// };

// var person_4 = {
//     firstName: "Mary",
//     lastName: "Fischer",
//     age: 21
// };

// var person_5 = {
//     firstName: "Mark",
//     lastName: "Zu",
//     age: 25
// };

// person_3.sayMyName("hi", true);
// person_3.sayMyName.call(person_4, "hello", false);
// var arr = ["hi", false];
// person_3.sayMyName.apply(person_5, arr);