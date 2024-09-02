import React,{Component} from 'react';
function ChildComponent(props){
    return(
        <button onClick={props.handleClick}>Click Here</button>
    )
}
export default ChildComponent;