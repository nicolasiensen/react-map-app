import React, { Component } from 'react';

import FlatButton from 'material-ui/FlatButton';
import { Card, CardActions, CardMedia, CardText } from 'material-ui/Card';

import Map from './Map'
import RouteItem from './RouteItem'
import RouteTimeline from './RouteTimeline'

class RouteDetails extends Component {
  render() {
    const {route, onCancelTouchTap} = this.props

    return (
      <Card>
        <CardMedia>
          <Map style={{height: '400px'}} segments={route.segments} />
        </CardMedia>
        <CardText>
          <RouteItem route={route} disabled style={{marginBottom: '1rem', padding: '0 0 1rem 0'}} />
          <RouteTimeline segments={route.segments} />
        </CardText>
        <CardActions>
          <FlatButton label='Back to routes list' onTouchTap={onCancelTouchTap} />
        </CardActions>
      </Card>
    )
  }
}

export default RouteDetails;
