import React,{useState} from 'react'
import { Button } from '@material-ui/core';
const taps = ["Tap1", "Tap2", "Tap3", "Tap4"];

const MyComponent = () => {
   const [msg, setMsg] = useState("");

    const onClickHandler = (e, value) => {
        setMsg(value + " this tab was pressed ");
    }
 
    return(
    <> 
    {taps.map( (item, index) => {
            return <Button variant="contained" color="secondary" onClick={ (e) => onClickHandler(e, item) }>{ item }</Button>

        })}
        <p>{msg}</p>
        </>
        )
}
        
export default MyComponent
