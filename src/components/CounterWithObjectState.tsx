import {useState} from "react";
import Display from "./Display";

interface State {
    readonly value : number 

};

export default function CounterWithObjectState() {
    const [state, setState] = useState<State>({ value: 0});
    console.log("CounterWithObjectState()", state);

   return<>
   <Display n={state.value} color="blue"/>
   <button onClick={()=>{
    //setContatore(contatore + 1);
   //state.value = state.value + 1 ;
   //const newState2 = state;
    const newState: State = {
        ...state,
        value: state.value + 1
    };
    setState(newState)

    console.log("click, contatore:", newState);
    }}>premi</button>
    {state.value > 5 && <div>attenzione maggiore di 5</div>}
  
   </>
}