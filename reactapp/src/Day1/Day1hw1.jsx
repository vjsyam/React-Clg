import React from 'react';
import Team from './D1hw11';
function World()
{
    return(
        <div>
            <h1>Welcome to the World Component</h1>
            <Team />
        </div>
    )
}
export default World;

//File Name:D1hw11:
import React from 'react';
function Team(){
    return(
        <div>
            <p>This is Team Functional Component</p>
        </div>
    )
}
export default Team;
