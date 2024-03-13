import React, { useState } from 'react'
import styles from './App.module.scss';
import logo from "./assets/logo512.png";
import Display from './components/Display';
import Counter from './components/Counter';
import { TextComponent } from './components/TextComponent';
//import {CounterWithObjectState} from '/components/CounterWithObjectState';
import { MyCustomInput } from './components/MycustomInput';
import { Middlec } from './components/Middlec';
import { PersonInput } from './components/PersonInput';


export default function App() {     
  // const [text, setText] = useState("");
  // return 
  <>
  <div>App</div>
  <PersonInput salvaPersona={(persona)=> {
    console.log(persona);
  }} />
  {/* <Middlec onChange={text => {
    console.log(text);
    setText(text);
  }} />
  <div>Testo in App.tsx: {text}</div> */}
  {/* // {<MyCustomInput/>}
  // {/* {<CounterWithObjectState />} */}
  {/* // { { TextComponent } */}
   {/* { <Counter /> } }} */}
   {/* <MyCustomInput label={"Nome"} required={true} onChange={text=> {
  //   console.log(text);
  //   setText(text);
  // }}/> */}
   {/* <MyCustomInput label={"Cognome"} required={false}/> */
}
  </>
  
//   const [contatore, setContatore] = useState(0);
//   console.log ("App()")
//    return <>
//    <div>App</div>
//    <Display n={contatore} color="blue"/>

//    <button onClick={(ev)=>{
//     setContatore(contatore+1);
//     console.log("click, contatore:", contatore);
//     }}>premi</button>
  
//    </>
 }

//     { <Mycomponent /> 
//     <div className={styles.title}>
//     <img src={logo} alt="logo" />
//     <div>Fitstic React 2024</div>
//   </div>

//   </>;
// } 
//html mi permette di referenziare delle variabili qua 


// const sum = (n1: number, n2: number) => {
//   return n1 + n2
// }

// export function Mycomponent() { 
//   // function sum(n1:number, n2: number) {
//   //   return n1 + n2;
//   // }
  

//   let num:number = 5;
//   let str:string ="ciao";
//   let bool: boolean = true;


//   //Rendering condizionale con variabile di appoggio
//   let val: JSX.Element | null = null;
//   if (bool === true) {
//     val= <div>bool è true </div>
//   } else {
//     val =<div>Bool è false</div>
//   }

//   let varAppoggio
//   switch(num) {
//     case 1: {
//       val = <div>num è 1</div>
//       break;
//     }
//     case 2:{
//       val = <div>num è 1</div>
//       break;
//     }
//     default: {
//       varAppoggio = <div>altro!</div>;
//       break
//     }
//   }


//   let risultatoSomma = sum(2, 2);

//   return <div>
//     <h2>ciao</h2>
//     <div>num: {num}</div>
//     <div>str: {str}</div>
//     <div>bool: {bool}I Bool non vengono visualizzati</div>
   
//     {val}
//     {/*rendering condizionale con operatore ternario */}
//     {bool === true 
//     ? <div>bool è true</div> 
//     : <div>bool è false</div>}

//     {/*Rendering  */}
//     {bool === true && <div>bool è true</div>}
//     {null}

//     {varAppoggio}
    
//     <div>Risultato somma: {risultatoSomma}</div>
//     <div>Risultato somma: {sum(2,3)}</div>

// </div>;
// }

// export function CyclicRenderingComponent(){
//   let array = [2,3,4,5];
  
//   let arrayDiJsx = []
//   for (let i=0; i < array.length; i++) {
//     arrayDiJsx.push(<div key={i}> arrayDiJsx posizione{i}: {array[i]}</div>);
//   }

//   return <>
//   <h4>ciclico</h4>
//   {array.map((item, index) => <div key={index}> Num: {index}: {item}</div>)}
//   {arrayDiJsx}
//   </>
 
// }