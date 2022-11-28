export {};
console.log("Hello TypeScript!");
let a = 5;
console.log(a);

let myVar : any = "yasin";
myVar = 89;
console.log(myVar);

let number : number[]=[];


let v1 :unknown = 5;
let v2: number= v1 as number;
console.log(v1 , v2); 

let firstName = "Yasin";
let lastName ="jason";
// void değer döndürmeyen 

function getFullName(){
    // console.log(firstName +"" + lastName);
    // return(firstName +"" + lastName);
} 

let num = 4.325;
// function RoundUp(n:(string | number)):string{
//     // n.

//     if(typeof n === "number"{
//         // n.
//         null
//     }else (typeof n==="string"){
//         // n.
//         null

//     })
// }