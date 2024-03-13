import {useState} from "react";
import Display from "./Display";

export default function Counter(){
    const [contatore, setContatore] = useState(0);
    console.log("Counter()", contatore);

   return<>
   <Display n={contatore} color="blue"/>
   <button onClick={()=>{
    setContatore(contatore + 1);
    console.log("click, contatore:", contatore);
    }}>premi</button>
    {contatore > 5 && <div>attenzione maggiore di 5</div>}
  
   </>
}