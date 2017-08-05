import React, { Component } from 'react';
import inputTheme from './input.js';

import { StationDropDown } from './StationDropDown';

class App extends Component {
  render() {
    return (
      <div className="App mdl-layout">
        <img className="landing" src="landing.jpg" alt="landing"/>
        <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
          <header className="mdl-layout__header mdl-layout__header--transparent">
            <div className="mdl-layout__header-row">
              <span className="mdl-layout-title">Carriage Finder</span>
            </div>
          </header>
          <div className="mdl-layout__drawer">
            <span className="mdl-layout-title">Carriage Finder</span>
          </div>
          <main className="dialogContainer mdl-layout__content">
            <div className="logo-font android-slogan">A modern app using <br /> <strong>Computer Vision</strong> <br /> to determine the fullness of trains.</div>
            <div className="demo-card-square mdl-card mdl-shadow--2dp">
              <StationDropDown theme={inputTheme} />
              <div className="mdl-card__supporting-text" style={{color: '#E0E0E0'}}>
                Select a station to view departures from
              </div>
              <div className="mdl-card__actions mdl-card--border">
                <a className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
                  View Updates
                </a>
              </div>
            </div>
          </main>
        </div>
      </div>
    );
  }
}

export default App;
