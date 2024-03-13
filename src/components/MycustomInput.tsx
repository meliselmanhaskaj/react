import {useState} from 'react';

export function MyCustomInput (props: { 
    readonly label:string;
    readonly required: boolean

    //Callback da ricevere in input 
    //serve per passare al genitore un contenuto informativo 
    //in questo caso si passa al genitore il testo dell'input ogni volta
    //che questo (il testo) cambia 
    readonly onChange: (text: string ) => void;
})
   {
    const {required, label, onChange} = props
    const [text, setText] = useState<string>("");
   return <>
   <div>
    <div> 
       <label>{label} {required ===true && <span>*</span>}</label> 
       <input type="text" value={text} onChange={ev=> {
        setText(ev.target.value);
        onChange(ev.target.value);
       }}/>
    </div>
       {text.length=== 0 && props.required === true && <div>Campo Obbligatorio</div>}
   </div>
 
   </>
}




// Creare un componente 
// <PersonInput>che dovrà visulizzare 
//     -due input testutali uno per il nome e uno per il cognome 
//     -un bottone con scritto salva 
    
// APP.tsx dovrà visualizzare questo componente e potrà passargli una callback 

// il comportamento deve essere:
// quando l'utente preme il bottone "salva" app deve essere notificato tramite la callback del salvataggio e ricevere la persona salvata 

// input della callback {"name": "<....>", "surname": "<....>"}