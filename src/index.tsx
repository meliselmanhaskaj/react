// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import App from './App';

// const root = ReactDOM.createRoot(
//   document.getElementById('root') as HTMLElement
// );
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );


export { }

console.log("hello!");

let i = 0;
let str:string = "hello";
let bool:boolean = true;
str = "world";

let array: number[] = [1,2,3];

enum WeekDays {
  MONDAY,
  TUESDAY,
  WEDNESDAY,
}

let myDay: WeekDays = WeekDays.MONDAY;
let dayArray: WeekDays[] = [
  WeekDays.MONDAY,
  WeekDays.WEDNESDAY
]

//operazioni con array
console.log(array);
array.push(5);
console.log(array);

let nuovoArray = array.concat(6);
console.log("array", array);
console.log("NuovoArray", nuovoArray);


const arrayImmutabile = [1,2,3];
arrayImmutabile.push(4)

//Oggetti e strutture dati
let punto = {
  x: 3, y: 7
};



interface Point {
  readonly x: number;
  readonly y:number;
  readonly z?: number;
}

const mioPunto: Point = {
  x: 5,
  y: 6
};

//mioPunto.x = 10;

interface Point3d extends Point{
  readonly z: number;
}
const punto3d: Point3d = {
  x:1,
  y:1,
  z:1,
};
console.log(punto3d)

function sum(n1: number, n2:number): number {
  return n1+n2;
}
console.log(sum(2,3));


interface Sum {
  (n1:number, n2: number): number 
}
const sum2 = (n1: number, n2:number) => {
  return n1 + n2; 
}
console.log(sum2(2,3));