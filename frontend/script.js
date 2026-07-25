function join(){
alert("Welcome to FitZone Gym!");
}

function bmi(){

let h=document.getElementById("height").value/100;
let w=document.getElementById("weight").value;

let b=w/(h*h);

document.getElementById("result").innerHTML=
"Your BMI : "+b.toFixed(2);

}

function send(){

let name=document.getElementById("name").value;

document.getElementById("msg").innerHTML=
"Thank you "+name+"! We will contact you soon.";

}
