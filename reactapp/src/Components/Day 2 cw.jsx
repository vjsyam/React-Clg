import React from 'react';

function Fun(){
    return(
        <div>
        <h1 style={{color:'green'}}>Inline Style in JSX example</h1>
        <div style={{backgroundColor:'lightblue', padding:'10px', border:'1px solid blue',borderRadius:'5px'}}>
            <p style={{color:'darkblue',fontSize:'16px'}}>This is a paragraph with inline styles applied.</p>
        </div>
        </div>
    )
}
export default Fun;