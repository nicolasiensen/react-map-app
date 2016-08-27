import React, { Component } from 'react';
import { List } from 'material-ui/List';
import Paper from 'material-ui/Paper';

import RouteItem from './RouteItem';

class RouteList extends Component {
  constructor (props) {
    super(props)
    this.selectRoute = this.selectRoute.bind(this)
  }

  selectRoute (route) {
    this.props.onRouteSelect(route)
  }

  render() {
    return (
      <Paper>
        <List>
          {
            this.props.routes.map((route, i) => <RouteItem route={route} onTouchTap={this.selectRoute} key={i} />)
          }
        </List>
      </Paper>
    )
  }
}

export default RouteList;
