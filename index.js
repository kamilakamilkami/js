console.log("hello")
console.log("My name is Kamila.Im from SE-2311.")

let x = true;
console.log(x)

let h = false;
console.log(h)

let myName = "Kamila"
console.log("My name is " + myName)

let w = 10
console.log(w)

var a = parseFloat(prompt("Enter first numbers"));
var b = parseFloat(prompt("Enter second number"));
let oper = prompt("Enter the opertion");
var result;
switch(oper){
    case "add":
       result = a + b;
       break;
       case "sub":
        result = a - b;
        break;
        case "mlt":
            result = a * b;
            break;
            case "div":
                result = a / b;
                break;
}


document.getElementById("Kami").innerHTML = result;


function checkLeapyear(year){
    if((0==year%4) && (0!=year%100) || (0 == year%400)){
        
        document.getElementById("nigger").innerHTML = year + ' is a leap year';
    }
    else{
        
        document.getElementById("nigger").innerHTML = year + ' is not a leap year';

    }
}

const year = prompt('Enter a year:');
checkLeapyear(year);


function cTof(celious){
    var c = celious;
    var cTof = c *9/5 +32;
    var message = c + ' degrees celsius is '+ cTof + ' degrees fahrenheit. ';
    document.getElementById("cpepsi").innerText = message;
    
}

function fToc(farenheit){
    var f = farenheit;
    var fToc = (f-32)*5/9;
    var message = f + ' degrees fahrenheit is ' + fToc.toFixed(2) + ' degrees celsius. ';
    
    document.getElementById("fpepsi").innerText = message;
}

cTof(60);
fToc(45);

const num = prompt("Enter a number:");
if(num%2==0){
    n = "The number is even.";
    document.getElementById("resss").innerText= n ;
} else{
    b = "The number is odd.";
    document.getElementById("resss").innerText = b;
}

const num1 = parseFloat(prompt("Enter the first number:"));
const num2 = parseFloat(prompt("Enter the second number:"));
const num3 = parseFloat(prompt("Enter the third number:"));
let largest;
if(num1>=num2 && num1>=num3){
    largest = num1;
} else if(num1<=num2 && num2>=num3){
    largest = num2;
}else{
    largest = num3;
}

document.getElementById("lol").innerText = largest + " is the largest";

var side1 = 5;
var side2 = 6;
var side3 = 7;
var s = (side1+side2+side3)/2;
var area = Math.sqrt(s*((s-side1)*(s-side2)*(s-side3)));
document.getElementById("lolz").innerText = area;

function factorial(a){
    if (a == 1){
        return 1;
    }
    return a*factorial(a-1);
}

function fun(){
    a = document.getElementById("i1").value;
    fact = factorial(a);
    document.getElementById("output").innerHTML = fact;
}



function count_vov(line){
    let counter = 0;
    let vovs = ["e","o","a","i","u"];
    for (let i = 0;i<line.length;i++){
        if(vovs.includes(line[i])){
            counter += 1;
        }
    }
    return counter;
}


function count_con(line){
    let counter = 0;
    let cons = "bcdfghjklmnpqrstvwxyz";
    for (let i = 0;i<line.length;i++){
        if(cons.includes(line[i])){
            counter += 1;
        }
    }
    return counter;
}


function funccc(){
    let line = document.getElementById("i2").value;
    let vc = count_vov(line);
    let cc = count_con(line);
    document.getElementById("vovs_out").innerHTML = vc;
    document.getElementById("cons_out").innerHTML = cc;
   
}

function convertSeconds(){
    let seconds = document.getElementById("i3").value;
    if(!seconds || seconds<0){
        alert("enter positive number!");
        return;
    }

    let minutes = seconds/60;
    let hours = seconds/3600;

    document.getElementById("m_out").innerHTML = minutes;
    document.getElementById("h_out").innerHTML = hours;
}

function fibonacci(){
    let nums = document.getElementById("i4").value;
    let n1 = 0;
    let n2 = 1;
    let temp;
    let fibseq = " ";

    if (nums === "" || nums<0){
        alert("Pleae enter a valid pos num!")
        return;
    }

    nums = parseInt(nums);

    for(let i=1;i<=nums;i++){
        fibseq += n1+" ";
        temp = n1+n2;
        n1 = n2;
        n2 = temp;

        document.getElementById("f_out").innerHTML = fibseq;
    }
}