import React from 'react'
function AlertMsg()
{
    alert("Message from Javascriot Alert!");
    console.log("Message to developer");
}
function Cw1()
{
    return(
        <div>
            <h1>Let us see the output of Javascript</h1>
            <button onClick={AlertMsg}>Day1cw</button>
        </div>
    )
}
export default Cw1;
