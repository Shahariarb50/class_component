import React from 'react'
class Practice extends React.Component {
constructor(){
    super();
    this.state={
        count:0
    }
    console.log("From Cronstructor");

}
componentDidMount(){
    console.log("From Mount")
}
componentDidUpdate(prevProps,prevState,snapShot){
console.log("Prrevious State: "+prevState.count);
console.log("Snapshot: "+snapShot);
    console.log("From Update")
}
shouldComponentUpdate(){
console.log("Should");
console.log("Should Count: "+this.state.count)
if(this.state.count>5 && this.state.count<10)
    return true
}
getSnapshotBeforeUpdate() {
    return this.state.count;
  }
componentWillUnmount(){
    console.log("Component Removed");
  }

    render(){
    console.log("From Render");
        return (
        <>
          <h1>{this.state.count}</h1>
          <button onClick={()=>this.setState({count:this.state.count+1})}>Click</button>
        </>
        )
    }
}

export default Practice