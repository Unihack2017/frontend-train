import React, { Component } from 'react';

import AppBar from 'material-ui/AppBar';
import {
  Link
} from 'react-router-dom'
import {List, ListItem} from 'material-ui/List';
import ActionInfo from 'material-ui/svg-icons/action/info';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import Avatar from 'material-ui/Avatar';
import FileFolder from 'material-ui/svg-icons/file/folder';
import ActionAssignment from 'material-ui/svg-icons/action/assignment';
import {blue500, yellow600} from 'material-ui/styles/colors';
import EditorInsertChart from 'material-ui/svg-icons/editor/insert-chart';

import {
  Step,
  Stepper,
  StepLabel,
} from 'material-ui/Stepper';


class StationPage extends Component {
  constructor(props) {
    super(props);

    console.log(props);

    const date = new Date();
    const time = date.getTime();

    console.log(time);

    this.state = {
      station: props.match.params.id,
      time
    };
  }

  render() {
    return (
      <div>
        <div
          className="mainApp"
        >
          <AppBar
            title="Carriage Finder"
            iconClassNameRight="muidocs-icon-navigation-expand-more"
            style={{
              backgroundColor: '#00A4D8',
            }}
          />
          <div
            className="container"
            style={{
              margin: 'auto',
              width: '80vw'
            }}
          >
            <Stepper className="stepper" activeStep={1}>
              <Step>
                <StepLabel>Select a station</StepLabel>
              </Step>
              <Step>
                <StepLabel>Choose a train</StepLabel>
              </Step>
              <Step>
                <StepLabel>View fullness</StepLabel>
              </Step>
            </Stepper>
            <List>
              <Subheader>{this.state.station} Station</Subheader>
              <ListItem
                primaryText="Photos"
                secondaryText="Jan 9, 2014"
              />
              <Divider />
            </List>
          </div>
        </div>
      </div>
    );
  }
}

export default StationPage;
