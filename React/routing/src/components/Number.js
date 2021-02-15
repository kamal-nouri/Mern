import React from 'react'
import { Link } from '@reach/router';


const Number = (props) => {
    return (
        
        isNaN(props.no)?
            <h1>Hello you shitt {props.no}</h1>
           : <h1>nice  {props.no}</h1>
       
    
    )
}

export default Number
