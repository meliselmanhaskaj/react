import {useState} from "react";

export function TextComponent() {
    const [text, setText]= useState<string>("giacomo");
    const [password, setPassword] = useState<string>("")

    return <>
   <div> Text Component</div>
   <div> Username: <input type ="text" placeholder="Inserire nome" value={text} onChange={(ev) =>{ 
        console.log(ev.target.value);
        setText(ev.target.value);
    }}/> <button onClick={() => {
        setText("");
    }}>Pulisci</button></div>

    <div>Password: <input type ="text" onChange={(ev) =>{ 
        setPassword(ev.target.value);
    }}/></div>

    <div>Username{text}</div>
    <div>Password{password}</div>
    </>
}