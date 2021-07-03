import {useState} from 'react'
// import ListCards from '../Cards/ListCards';


/* const calculadora = () =>{
    return(
      <div className="position-sticky col-sm-6 "> 
      <p className= 'text-primary' > 
        <h1>CALCULADORA</h1></p>
        <button type="button" class="btn btn-success"> + </button>
        <button type="button" class="btn btn-danger"> x2 onClick </button>
        <button type="button" class="btn btn-success"> - </button>
      </div>
    )
    
}
 */

import React, {Component} from 'react'
class calculadora extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        count: 0
      };
    }
  
    render() {
      if(this.state.count>=0){
        return (
          <div className='position-sticky col-sm-6 text-primary'>
            <h1>CALCULADORA</h1>
            <p class='fs-2'>{this.state.count}</p>
            <button className="btn btn-success" onClick={() => this.setState({ count: this.state.count - 1 })}>
              -
            </button>
            <button className="btn btn-danger" onClick={() => this.setState({ count: this.state.count + 2 })}>
              2
            </button>
            <button className="btn btn-success" onClick={() => this.setState({ count: this.state.count + 1 })}>
              +
            </button>
          </div>
        );    
      }else if (this.state.count==-1){
        this.setState({ count: this.state.count +1 })
        return (
          <div className='position-sticky col-sm-6'>
            
            <button  onClick={() => this.setState({ count: this.state.count - 1 })}>
              -
            </button>
            <button onClick={() => this.setState({ count: this.state.count + 2 })}>
              2
            </button>
            <button onClick={() => this.setState({ count: this.state.count + 1 })}>
              +
            </button>
          </div>
        );
      }
      
    }
  }

  export default calculadora;