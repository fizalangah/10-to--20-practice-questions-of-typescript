//** */ QUESTION # 11;**
//Basic Types: Define a variable myNumber and assign it the value 5.Declare another variable myString and assign it the value "Hello, TypeScript!".

//     .....SOLUTION......
let myNumber:number = 5;
let myString1:string = "Hello, typescript !";

console.log(myNumber,myString1);

// ** QUESTION # 12; **
// Type Annotations: Write type annotations for the following variables:
//NAME,AGE, ISSTUDENT,

//      .......SOLUTION.....,

let myName1:string = "fiza langah";
let myAge:number = 22;
let isStudent:boolean = true;
console.log("myname = "+myName1 , ",", "myage = " +myAge ,",",  "isstudent = " +isStudent)
    
//** */ QUESTION # 13;**
// Type Inference: TypeScript automatically infers types. Declare a variable myArray and assign it an array of numbers.

//   ........SOLUTION.......,
let myArray:number[ ] = [1,2,3,4,5,6,7,8,9,10];
console.log(myArray);


// **QUESTION # 14;**
// Type Union: Create a function called printID that takes either a number or a string as an argument and prints it.

///    ......SOLUTION.....,
let printID = ((id:number|string):void=>{
 console.log(id)
})
 printID(6);
 printID("hello");

//** */ QUESTION # 15;**
// Interfaces: Define an interface Person with properties name of type string and age of type number.

//     .....SOLUTION.......,
interface Person0{
    name2:string;
    age2:number;
}

let nwepersonp:Person0 = {
    name2 : "kanwal",
    age2  : 22,
}
console.log(nwepersonp)

// ** Question # 16;**
// Implementing Interfaces: Create a class Student that implements the Person interface. Add a method introduce that prints "Hi, my name is [name] and I'm [age] years old."

//    ......SOLUTION......,

interface Personz{
     name2:string;
     age2:number;
     }
 class  Student2 implements  Personz {
      name2:string = "";
      age2:number = 0;

constructor(name2:string,age2:number){
       this.name2 = name2;
       this.age2 = age2;
        }
 information():void{
        console.log(`Hi,my name is" ${this.name2}  and I am  ${this.age2} years old`)
         }
     }
 const Student1 = new Student2("heer",22);
 console.log(Student1.age2);
 console.log(Student1.name2);
  console.log(Student1.information());


// ** QUESTION # 17** ;
//  Access Modifiers: Add access modifiers to the name and age properties in the Person interface to make them read-only.

//    ....SOLUTION.......,
interface Person1{
   readonly  name3:string;
   readonly  age3:number;
         }
class  Student6 implements  Person1 {
   readonly  name3:string = "";
   readonly  age3:number = 0;
    
constructor(name2:string,age2:number){
   this.name3 = name2;
   this.age3 = age2;
            }
information():void{
  console.log(`Hi,my name is" ${this.name3}  and I am  ${this.age3} years old`)
             }
         }
 const Student = new Student6("heer",22);
 console.log(Student.age3);
 console.log(Student.name3);
 console.log(Student.information());
// Student.name3 = "fiza"; not possible;
    
// **  QUESTION # 18 **;
// Type Assertion: Convert a variable myAny of type any to a string type.

 let myAny:any = "bilo";

 let myString:string = myAny as string;
console.log(myString);

//  **  QUESTION # 19; **

// Function Types: Define a function type for a function that takes two numbers and returns their sum.;

/// .....SOLUTION...;
function sum(a:number,b:number):number {
    return a + b;
}

const sum1 = sum(3,6);
   console.log(sum1);
 

// ** QUESTION # 20 **;
// Generics: Write a generic function called reverseArray that takes an array of any type and returns the reverse of that array.

//   .....SOLUTION......,
function reverseArray<T>(arr:T[]):T[] {
    return arr.reverse();
     
}

const newarray = reverseArray(["hi","hello"]);
console.log(newarray);
