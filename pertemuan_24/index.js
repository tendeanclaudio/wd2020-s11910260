//array

let nilai = [90, 80, 70, 100, 85];
for (let i = 0; i < array.length; i++) {
    console.log("Nilai =", nilai[i] + 5);
    
}

console.log(nilai);


//nilai[2] = 90;
//console.log(nilai[nilai.length - 1]);

let john = ["john", "Doe", 33, true];
let tendean = ["tendean", "Doe", 17, true];
let claudio = ["claudio", "Doe", 18, true];
console.log(john[john.length -1]);
console.log(john);

//toString()
console.log(john.toString());
//join()
console.log(john.join(" - "));

//pop()
john.pop();
console.log(john.join(" - "));

//push()
john.push(true);
john.push("Hello");
console.log(john.join(" - "));

//shift()
john.shift()
console.log(john.join(" - "));

//unshift()
john.unshift("john");
john.unshift("Prof");
console.log(john.join(" - "));

//splice()
john.splice("john");
console.log(john.join(" - "));

//concat()
let nama = john.concat(tendean, claudio);
console.log(nama);

//slice()
let claudio = ["claudio", "Doe", 18, true];
let rezy = ["Rezy", "Doe", 19, true];
let tendean = ["tendean", "Doe", 17, true];

console.log(rezy);
console.log(tendean);

//sort()
let claudio = ["claudio", "Doe", 18, true];
claudio.sort();

console.log(claudio);

let umur = [18, 17, 20, 30, 19];

umur.sort();
console.log(umur);

//reverse()
let claudio = ["claudio", "Doe", 18, true];

claudio.reverse();

console.log(claudio);




