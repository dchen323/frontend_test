import React, {Component} from 'react';
import Foo from './foo';

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

  makeFoo() {
    const returnArr = [];
    for (let i = 0; i < this.state.count; i++) {
      returnArr.push(<Foo key={i}/>);
    }
    return returnArr;
  }

  render() {
    return(
      <div>
        <p>count: {this.state.count}</p>
        <button className="add1" onClick={this.add1}>Add One</button>
        {this.makeFoo()}
      </div>
    );
  }
}

export default Counter;
