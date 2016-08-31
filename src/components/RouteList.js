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
            this.props.routes.map((route, i) => (
              <RouteItem route={route} onTouchTap={this.props.onRouteSelect} key={i} />
            ))
          }
        </List>
      </Paper>
    )
  }
}

RouteList.propTypes = {
  onRouteSelect: React.PropTypes.func.isRequired,
  routes: React.PropTypes.array.isRequired
}

export default RouteList;
