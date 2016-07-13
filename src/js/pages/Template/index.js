"use strict";

import React, { Component } from "react";

// import the bootstrap css
require('bootstrap/dist/css/bootstrap.min.css');
require('bootstrap/dist/css/bootstrap-theme.min.css');

require('./styles.scss')

let bgImage = require('../../../images/eOZbIG4.jpg');

class Template extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    // children is where the pages will populate inside the template
    let {
      children
    } = this.props;

    let styles = {
      background: 'url('+bgImage+') no-repeat',
      backgroundSize: 'cover'
    }

    return(
      <div>
        <div id="background" style={styles}></div>
        <div className="container">
          <div className="row">{children}</div>
        </div>
      </div>
    );
  }
}

export default Template;
