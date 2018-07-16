import React, {Component} from 'react';

class Counter extends Component {
  constructor(props){
    super(props);
    this.state = {
      count: 0
    };
    this.add1 = this.add1.bind(this);
  }

  add1(){
    this.setState(state => {
      return {
        count: state.count + 1
      };
    });
  }

  render() {
    return(
      <div>
        <p>count: {this.state.count}</p>
        <button onClick={this.add1}>Add One</button>
      </div>
    );
  }
}

export default Counter;
