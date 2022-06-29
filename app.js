//----Return Value with function
let hello = function(name){
    return `Hello & Welcome ${name}`;
}
console.log(hello('Cyber Firebug'));


//----Arrow Function
var fullname = (firstname,lastname)=>{
    return `Welcome ${firstname} ${lastname}`
}
console.log(fullname('Cyber','firebug'));


//----Arrow function small version if statement is one line
var welcome = (name,age)=>`Welcome ${name} ${age}`
console.log(welcome('Santa','Banta'));
console.log(typeof welcome);

//Arrow Function small version if statement is one parameter value passing
var schoolName = name => `Welcome ${name}`
console.log(schoolName('Zilla School Jessore'))