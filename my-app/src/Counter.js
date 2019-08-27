import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';

class Counter extends Component {
  render() {
    return (
      <div className="App">
        <br />
        <h1 className="aHeader">Count</h1>
        <h1 className="aHeader">{this.props.count}</h1>
        <button  id="aButton2" className="btn btn-danger" onClick={this.props.onDecrementClick}> - </button>
        <button id="aButton" className="btn btn-primary" onClick={this.props.onIncrementClick}> + </button>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    count: state.count
  }
}
function mapDispatachToProps(dispatch) {
  return {
    onIncrementClick: () => {
      const action = {
        type: "INCREMENT"
      };
      dispatch(action)
    },
    onDecrementClick: () => {
      const action = {
        type: "DECREMENT"
      };
      dispatch(action)
    }
  }
}

export default connect(mapStateToProps, mapDispatachToProps)(Counter);
