import React, { Component } from 'react';
import _ from 'lodash';
import { ListItem } from 'material-ui/List';
import { grey300 } from 'material-ui/styles/colors'

import SegmentIcon from './SegmentIcon';

function getCompanyName (company) {
  switch (company) {
    case 'drivenow':
      return 'DriveNow';
    case 'car2go':
      return 'Car2Go'
    case 'nextbike':
      return 'Nextbike';
    case 'callabike':
      return 'Call a Bike';
    default:
      throw(new Error(`Unknown company: ${company}`));
  }
}

// TODO: replace this with a library like moment.js?
function getTimeDistanceInMinutes (d1, d2) {
  return `${(d2-d1)/1000/60}min`
}

class RouteItem extends Component {
  render() {
    const {route} = this.props
    const departureTime = new Date(_.head(_.head(route.segments).stops).datetime)
    const arrivalTime = new Date(_.last(_.last(route.segments).stops).datetime)

    return (
      <ListItem style={{borderBottom: '1px solid', borderColor: grey300}}>
        <div>
          {
            route.type === 'car_sharing' || route.type === 'bike_sharing'
            ? getCompanyName(route.provider)
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
          <div>{getTimeDistanceInMinutes(departureTime, arrivalTime)}</div>
        </div>
      </ListItem>
    )
  }
}

export default RouteItem;