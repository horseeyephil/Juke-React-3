'use strict';
// const React = require('react'); // import Reach from 'react'
import React, {Component} from 'react';
const ReactDom = require('../../node_modules/react-dom/index.js')



class Footer extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     value: "true",
  //   }
  // }

  render() {
    return (
        <footer>
        <div className="pull-left">
          <button className="btn btn-default">
            <span className="glyphicon glyphicon-step-backward"></span>
          </button>
          <button className="btn btn-default">
            <span className="glyphicon glyphicon-play"></span>
          </button>
          <button className="btn btn-default">
            <span className="glyphicon glyphicon-step-forward"></span>
          </button>
        </div>
        <div className="bar">
          <div className="progress">
            <div className="progress-bar"></div>
          </div>
        </div>
        </footer>
    )
  }
}

module.exports = Footer

