let score="33"
console.log(typeof score)//number    //string
console.log(typeof (score))//number    //string

let valueInNumber=Number(score)
console.log(typeof (valueInNumber))//number
console.log(valueInNumber)
//let score="33abc";//string //string console.log(typeof(valueInNumber))//number ;console.log(valueInNumber)//NaN
//let score=null;//object //object console.log(typeof(valueInNumber))//number ;console.log(valueInNumber)//0
//let score=undefined; //undefined //undefined console.log(typeof(valueInNumber))//number ;console.log(valueInNumber)//NaN 
//let score=true;//boolean //boolean let console.log(type(valueInNumber));//number ;console.log(valueInNumber)//1
//A STRING I.E. WHICH CANT BE CONVERTED -//let score="avnee";//string //string console.log(typeof(valueInNumber))//number ;console.log(valueInNumber)//NaN

//"33"=>33
//"33abc"=>NaN
//true=>1;false=>0

//NOW COMMENT ALL THE PREVIOUS console.log to convert number into boolean
let isLoggedIn=1
let booleanIsLoggedIn=Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);//true //""->false //"avnee"->true

//CONVERTING INTO STRING so comment prev console.log
let someNumber=33
let stringNumber=String(someNumber)
console.log(stringNumber);//33
console.log(typeof(stringNumber));//string

