import React, { Component } from 'react';

import Paper from 'material-ui/Paper';
import FlatButton from 'material-ui/FlatButton';

import RouteItem from './RouteItem'

class RouteDetails extends Component {
  render() {
    return (
      <Paper>
        <RouteItem route={this.props.route} disabled />
        <FlatButton label='Cancel' onTouchTap={this.props.onCancelTouchTap} />
      </Paper>
    )
  }
}

export default RouteDetails;
