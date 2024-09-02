import React, {Component} from 'react';
class Sample extends Component{
    constructor(){
        super();
            this.state={
                name: "aaaa"
            }
        }
    changeName=()=>{
        this.setState({name:"bbbb"})
    }
    render(){
        return(
            <div>My name is 
                <h1>{this.state.name}</h1>
                <button onClick={this.changeName}>Change Name</button>
            </div>
        )
    }
}
export default Sample;