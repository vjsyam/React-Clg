import React from 'react';
function Class2()
{
    let myobject={name:"Madras"};
    let newObject=myobject;
    myobject.name="Chennai";
    console.log(myobject);
    
    let myarray=["a","e","i","o"];
    let vowelArray=myarray;
    myarray.push("u");
    console.log(myarray);
}
function Cw2()
{
    return(
        <div>
            <button onClick={Class2}>Cw2</button>
        </div>
    )
}
export default Cw2;