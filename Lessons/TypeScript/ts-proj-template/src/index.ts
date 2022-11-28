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
function RoundUp(n:(string | number)):string{
    // n.

    if(typeof n === "number"){
        // n.
        return n.toFixed(2)
    }else{
        // n.
       return parseFloat(n).toFixed(2);

    }
}
console.log(RoundUp("6.825"));

function great(message: string, person:string):string{
    return message + " " + person +"!";
}

// const gr1=great("hello"); 2 PARAMETRE BEKLİYOR
const gr1=great("hello","jason");
console.log(gr1);
type Control = "user" | "admin"| "moderatör";
let c : Control = "user";
let d = c = "admin"
console.log(d);
console.log(c);


type Person = {
firstName:string
lastName:string
age?:number // opsiyonel olmuş oldu
};

let people: Person[]=[]
people.push({firstName:"jason",lastName:"Rain",age:33})