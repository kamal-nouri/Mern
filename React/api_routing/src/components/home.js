import React,{useState,useEffect} from 'react'
import axios from 'axios';
import { Link } from '@reach/router';
import Luke from './Luke';

const Home = (props) => {
const[name,setName]=useState("")
const[climate,setClimate]=useState("")
const[terrain,setTerrain]=useState("")
const[water,setWater]=useState("")

    useEffect(()=>{
        axios.get(`https://swapi.dev/api/${props.i}/${props.id}`)
            .then(response=>{
                // ({props.i}=="planets")
                setName(response.data.name);
                setClimate(response.data.climate);
                setTerrain(response.data.terrain);
                setWater(response.data.surface_water)
                console.log(response)
            })
        
    }, [props.id]); 
    
    return (
        <>
        <div>
            <Luke/>
        </div>
        
        <div>
        ({props.i}=="planets")?
            <h1>{props.i} and {props.id}</h1>
            <h2>{name}</h2>
            <h4>{climate}</h4>
            <h4>{terrain}</h4>
            {(water==1)?<h4>True</h4>:<h4>False</h4>}
            {/* <h4>{water}</h4> */}
            :<h2>Noo</h2>
        </div>
        <Link to='/'>Home</Link>
       
        </>
    )
}

export default Home
