console.log("hello there")
console.warn("this is a threat")
console.error("this is error")

var a;
a = 45;
var b = 10;

var c = a*b;
console.log(a);
console.log(c);
console.log(a*c);
console.log(a%b);
alert ("hello");
// var ans = confirm("Are you an adult ?");
// console.log(ans);
// var Naam= prompt("Enter your name ?");
// console.log('Username is: ' ,Naam);

//js datatypes
// -premitive
  //  Number (1,2,3,4,5.098,...)
  //string ('a', 'sarthak')
  //Boolean (true, false)
  //undefined
  //null
  //symbol
  //NaN

// -Rerence
    //Array
    //object
    //functions

    var e = 4;

    if(e>5){
        console.log("Correct")
    }
    else{
        console.log("incorrect")
    }


//    var obj = {
//         greet: "hello im" ,
//         user : ' vicky ' ,    
//         age :  18,
//    }
//    console.log(obj.greet + obj.user + obj.age)

var a = document.querySelector("h1")
console.log(a)
a.innerHTML = "CHanged"
a.style.color = 'black'
a.style.backgroundColor = 'royalblue'
a.addEventListener("mouseenter",function(){
    a.innerHTML = "ho gya be"
    a.style.color = "yellow"
})