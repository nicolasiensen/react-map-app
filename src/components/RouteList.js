import React, { Component } from 'react';
import { List } from 'material-ui/List';
import Paper from 'material-ui/Paper';

import RouteItem from './RouteItem';

class RouteList extends Component {
  render() {
    return (
      <Paper>
        <List>
          {
            this.props.routes.map((route, i) => <RouteItem route={route} key={i} />)
          }
        </List>
      </Paper>
    )
  }
}

export default RouteList;
