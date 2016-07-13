"use strict";

import React, { Component } from "react";
import { Link } from 'react-router';

class Home extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // Add listeners here
  }

  render() {

    return(
      <div>
        <h1>Fantasy Gawlf</h1>
        <h6 style={{paddingLeft: '5px'}}>(Cause better names were taken.)</h6>
        <hr />
        <div className="col-md-12">
          <h3><strong>Schedule</strong></h3>
          <ul style={{listStyle: 'none', paddingLeft: 0}}>
            <li><strong>Quarter 1:</strong> CareerBuilder Challenge (1/21/16) - Valspar Championship (3/13/2016)</li>
            <li><strong>Quarter 2:</strong> Arnold Palmer Invitational (3/17/16) - Wells Fargo Championship (5/8/2016)</li>
            <li><strong>Quarter 3:</strong> THE PLAYERS Championship (5/12/16) - World Golf Championships-Bridgestone Invitational (7/3/2016)</li>
            <li><strong>Quarter 4:</strong> The Greenbrier Classic (7/7/16) - Wyndham Championship (8/21/2016)</li>
            <li><strong>Championship:</strong> The Barclays (8/25/2016) - TOUR Championship by Coca-Cola (9/25/2016)</li>
          </ul>
          <Link to={'/rules'}>View rules and payouts</Link>
        </div>
      </div>
    );
  }
}

export default Home;
