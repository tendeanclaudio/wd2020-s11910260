// console.log("JavaScript DOM");

// const person = ["john", 24, "programmer", true];

// const person = {
//     name: "john",
//     age: 24,
//     job: "programmaer",
//     isMarried: true,
//     sayHello: function(){
//         console.log("Hello World");
//     },
// };


// person.age = 25;
// person["address"] = "Manado";

// console.log(person.name);
// console.log(person["age"]);

// delete person.address;
// console.log(person);

// person.sayHello();

let title = document.getElementsByTagName("h1")[0].innerText;

title = document.getElementById("header2").innerText;
console.log(title);

let umur = document.getElementById("umur").value;
console.log(umur);

function helloworld(){
    let value = document.getElementById("umur").value;
    document.getElementsByName("p")[1].innerText = value;
    document.querySelector(".header").stylecolor="red";
    document.querySelector("header").style.fontsize = "3em";
    document.querySelector(".header").style.backgroundColor = "yellow";

    let span = document.getElementsByTagName("span")[0];
}