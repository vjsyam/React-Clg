import React,{Component} from "react";
class ConditionalRendering extends Component{
    constructor(props){
        super(props);
        this.state={
            isLoggedIn : false
        };
    }
    toggleLogin=()=>{
        this.setState(prevState=>(
            {
                isLoggedIn: !prevState.isLoggedIn
            }
        ));
    }
    render()
    {return(
        <div>
            {this.state.isLoggedIn ? <h1>Welcome Back!</h1> : <h1>Please Log In</h1>}
        <button onClick={this.toggleLogin}>{this.state.isLoggedIn ? 'Log Out' : 'Log In'}</button></div>
    )};
    
}
export default ConditionalRendering;