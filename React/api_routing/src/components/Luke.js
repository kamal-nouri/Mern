import React,{useState} from 'react'
import { Link } from '@reach/router';

const Luke = () => {

const[api,setApi]=useState(["People","planets","StarShips"]);
const [sel,setSel]=useState("");
const [id,setId]=useState("");

const selectHandler = (e)=>{
    setSel(e.target.value);
}
const inputHandler=(e)=>{
setId(e.target.value);
}

    return (
        <>
        <select onChange={selectHandler}>
        {
            api.map((item,i)=>{
                return <option key={i} value={item} >{item}</option>
            })
    }
    </select>
    <input type="text" onChange={inputHandler}></input>
    <Link to={`/${sel}/${id}`}>
    <button>Search</button>
    </Link>
    </>
    )
}

export default Luke
