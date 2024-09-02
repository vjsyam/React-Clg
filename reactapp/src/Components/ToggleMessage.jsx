import React,{Component} from 'react';
class ToggleMessage extends Component{
    constructor(){
        super();
        this.state={isVisible: false}
    }
    toggleMessage=()=>{
        this.setState(prevState=>({
            isVisible: !prevState.isVisible
        }))
    }
    render(){
        return (
            <div>
                <button onClick={this.toggleMessage}>
                {this.state.isVisible? "HideComponent" : "ShowComponent"}
                </button>
                {this.state.isVisible && <p>Hi how are you</p>}
            </div>
        )
    }
}
export default ToggleMessage;
