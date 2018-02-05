'use strict';
import React, {Component} from 'react';
const ReactDom = require('../../node_modules/react-dom/index.js')


class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "true",
    }
  }

  render() {
    return (
    <div className="col-xs-2">
    <sidebar>
      <img src="juke.svg" className="logo" />
      <section>
        <h4 className="menu-item active">
          <a href="#">ALBUMS</a>
        </h4>
      </section>
    </sidebar>
    </div>
    )
    }
}


module.exports = Sidebar

