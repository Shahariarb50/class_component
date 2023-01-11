import React from "react";
import Practice from "./component/Practice";
class App extends React.Component {
    constructor(){
        super();
        this.state = {
            value:true
        }
    }
    render(){

        return ( 
       <>
       {
        this.state.value?
        <Practice/>
        :
        <h1>Remove child</h1>
       }
      <button onClick={()=>{this.setState({value:!this.state.value})}}>Pom Pom</button>
       </>
        );
    }
}

export default App;