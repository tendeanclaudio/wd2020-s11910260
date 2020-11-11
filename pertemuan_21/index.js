//console.log("Basic JavaScript");

//Conditional JavaScript
/* 
let firstName = "Claudio";
let isMarried = true;

if(isMarried)
{
    console.log(firstName + "is married");
}
else{
    console.log(firstName + "is nor married");
}
*/
/* 
    jika umur <13 maka tampilkan kategori ana-anak
    jika umur 13 sampai 16 tahun tampilkan kategory remaja
    jika umur 17 sampai 25 tahun tampilkann kategory anak muda
    jika umur 26 sampai 50 tahun tampilkan kategory orang dewasa
*/

/*
if(umur < 13)
{
    console.log("Kategori anak-anak");
}
else if(umur >=13 && umur <=16)
{
    console.log("Kategori remaja");
}
else if(umur >=17 && umur <=25)
{
    console.log("Kategori anak muda");
}
else if(umur >=26 && umur <=50)
{
    console.log("Kategori orang dewasa");
}
*/
/*
let firstName = "claudio";
let job ="teacher"
*/
/*
switch(true)
{
    case umur <13;
        console.log("Kategori anak-anak");
        break;
    case umur >= 13 && umur <=16;
        console.log("Kategori remaja");
        break;
    case umur >= 15 && umur <=25;
        console.log("Kategori anak muda");
        break;
    case umur >= 26 && umur <=50;
        console.log("Kategori anak dewasa");
        break;    
}
*/

//JavaScript Function

//function helloworld()
//{
    //console.log("Hello World function declaration");
//}

//let helloworld = function(nama)
//{
    //let age = 18;
    //console.log("Hello nama saya"+ nama +"umur saya adalah" + age + "tahun.");
//};
function hitung() {
let berat = prompt("masukan Berat badan anda = ");
console.log("Berat badan yang dimasukan adalah"+ berat);
let tinggi = prompt("masukan Tinggi anda =");
console.log("Berat badan yang dimasukan adalah"+ tinggi);
let bmi= berat / (tinggi*tinggi);
console.log("BMI = " + bmi);


if (bmi < 18.5) 
{
    console.log("underweight");
}
else if (bmi >= 18.5 && bmi <= 24.9)
{
    console.log("normal");
}
else if (bmi >= 25.0 && bmi <= 29.0)
{
    console.log("overweight");
}
else if (bmi >= 30.0 && bmi <= 34.9)
{
    console.log("obese");
}
else if (bmi >= 35.9 && bmi <= 39.9)
{
    console.log("very obese");
}
else if (bmi >=40)
{
    console.log("extremely obese");
}
}

hitung();