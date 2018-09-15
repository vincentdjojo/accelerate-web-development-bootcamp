// ES6

// ()=>{} new syntax for function

function add(a,b){
    return a+b;
}

var add = (a,b)=>{
    return a+b;
}

// can drop { } and return if there's only one return statement

var add = (a,b)=>a+b;

// can drop () if only one param

var numbers = [1,2,1,3,4,5,3];

var negatedNumbers = numbers.map(n=>-n); // yes, n=>-n is a function

console.log(numbers);

// var vs let: scope difference

// var: function scope
// let: block scope

// example 1

var v = 1;

function myFunc() {
    {
        var v = 2; // change to 'let v = 2;' and see the difference
        console.log(v);
        //v = 2;
    }
    console.log(v);
}

myFunc();
// prints 2,2 for var
// prints 1,2 for let


// example 2
for(var i=0;i<10;i++){
    setTimeout(()=>{
        console.log(i);
    })
} // prints 0,1,2,...,9

for(let i=0;i<10;i++){
    setTimeout(()=>{
        console.log(i);
    })
} // prints, 9,9,9,...,9

// const: immutable, same scope as let

const immutableVar = 1;
immutableVar = 2; // throw error when there's an assignment operation

// `` backquote string

var num = 11235;

// old syntax
var myStr = " HI \n I am multi line\n string "+num+"\n";

// backquote syntax
var myStr = ` HI
 I am multi line 
 string ${num}
`;

// destructuring

var bookInfo = {
    name: "Harry Potter: the myterious stone",
    author: "J. K. Rowling",
    sales: 100000000
};
let {name,author} = obj;

var newBookInfo = {
    ...bookInfo, //destructuring object
    ISBN: '0850948527340583',
    rating: 7.5
}