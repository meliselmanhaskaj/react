import { MyCustomInput } from "./MycustomInput";


export function Middlec(props: {
    onChange: (text:string) => void
})
    {
    const {onChange} = props;
    return<>
      <MyCustomInput 
      label={"Nome"} 
      required={true} 
      onChange={onChange}/>
    </>;

}