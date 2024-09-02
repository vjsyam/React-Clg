import React,{Component} from "react";
class Apps extends Component{
constructor(props){
    super(props);
    this.state={
        name : "Arun", Color : "Blue Green"
    };
    }
    changeName=()=>{
        this.setState(
            {name:"Varun"}
        );
    }
    render(){
        return(
            <div>
                <h1>
                I am {this.state.name} and I like {this.state.Color}</h1>
                <button onClick={this.changeName}>Change Name</button>
            </div>
        )
    }
}
export default Apps;