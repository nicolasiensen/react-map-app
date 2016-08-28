import React, { Component } from 'react';
import _ from 'lodash';

import { ListItem } from 'material-ui/List';
import { grey300 } from 'material-ui/styles/colors'

import moment from './../libs/moment';
import getCompany from './../libs/getCompany'
import SegmentIcon from './SegmentIcon';

class RouteItem extends Component {
  constructor (props) {
    super(props)
    this.handleTouchTap = this.handleTouchTap.bind(this)
  }

  handleTouchTap () {
    this.props.onTouchTap(this.props.route)
  }

  render() {
    const {route, style} = this.props
    const departureTime = new Date(_.head(_.head(route.segments).stops).datetime)
    const arrivalTime = new Date(_.last(_.last(route.segments).stops).datetime)

    return (
      <ListItem
        style={{borderBottom: '1px solid', borderColor: grey300, ...style}}
        onTouchTap={this.handleTouchTap}
        disabled={this.props.disabled}>
        <div>
          {
            route.type === 'car_sharing' || route.type === 'bike_sharing'
            ? getCompany(route.provider).display_name
            : _.startCase(route.type)
          }
        </div>
        <div style={{display: 'flex', flexWrap: 'wrap', marginBottom: '1rem'}}>
          {
            route.segments.map((segment, i) => (
              <SegmentIcon
                travelMode={segment.travel_mode}
                color={segment.color}
                name={segment.name}
                style={{marginRight: '0.5rem', marginTop: '0.5rem'}}
                key={i}
              />
            ))
          }
        </div>
        <div style={{display: 'flex'}}>
          <div style={{flex: '1'}}>
            <span
              style={{
                display: 'inline-block',
                borderRight: '1px solid',
                borderColor: grey300,
                paddingRight: '0.5rem',
                marginRight: '0.5rem'
              }}>
                {route.price ? `€${(route.price.amount/100).toFixed(2)}` : '€0'}
            </span>
            <span>
              {`${departureTime.getHours()}:${departureTime.getMinutes()}`}
              &nbsp;→&nbsp;
              {`${arrivalTime.getHours()}:${arrivalTime.getMinutes()}`}
            </span>
          </div>
          <div>{moment(arrivalTime).from(departureTime, true)}</div>
        </div>
      </ListItem>
    )
  }
}

export default RouteItem;
