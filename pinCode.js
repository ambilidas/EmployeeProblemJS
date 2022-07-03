//UC1
let pinRegex=RegExp('^[0-9]{6}$');
let pinCode="400088";
if(pinRegex.test(pinCode)){
    console.log("Pin code is valid");
}
else{
    console.log("pin code is not valid");
}
//UC2
let pinRegex1=RegExp('^[0-9]{6}$');
let pinCode1="A400088";
if(pinRegex.test(pinCode1)){
    console.log("Pin code is valid");
}
else{
    console.log("pin code is not valid");
}
//UC3
let pinRegex2=RegExp('^[0-9]{6}$');
let pinCode2="400088B";
if(pinRegex.test(pinCode2)){
    console.log("Pin code is valid");
}
else{
    console.log("pin code is not valid");
}
//UC4
let pinRegex3=RegExp('^[0-9\\s]{6}$');
let pinCode3="400 088";
if(pinRegex.test(pinCode3)){
    console.log("Pin code is valid");
}
else{
    console.log("pin code is not valid");
}