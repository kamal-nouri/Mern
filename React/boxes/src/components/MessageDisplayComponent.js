import React from 'react'

const MessageDisplayComponent = (props) => {
    return (
        <div>
            <h1>Current Message</h1>
            <pre>{ props.message.map((item,i)=>{
                let style={background:item,height:"50px",width:"100px",border:"1px solid black"}
            return    <p key={i} style={style}>{item}</p>
            }) }</pre>
        </div>
    )
}

export default MessageDisplayComponent
