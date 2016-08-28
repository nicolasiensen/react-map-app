import React, { Component } from 'react';
import _ from 'lodash';
import moment from './../libs/moment';

class RouteTimeline extends Component {
  render() {
    return (
      <div>
        {
          this.props.segments.map((segment, i) => {
            const segmentDepartureTime = new Date(_.head(segment.stops).datetime)
            const segmentArrivalTime = new Date(_.last(segment.stops).datetime)

            return (
              <div key={i} style={{display: 'flex'}}>
                <div>
                  {`${segmentDepartureTime.getHours()}:${segmentDepartureTime.getMinutes()}`}&nbsp;
                </div>
                <div
                  style={{
                    flex: '1',
                    color: segment.color,
                    paddingLeft: '0.5em',
                    marginLeft: '0.5rem',
                    borderLeft: '0.5rem solid',
                    borderColor: segment.color
                  }}>
                  <div style={{marginBottom: '1rem'}}>{segment.stops[0].name || 'Current location'}</div>
                  <div style={{marginBottom: '1.5rem'}}>
                    {segment.travel_mode}&nbsp;
                    {moment(segmentArrivalTime).from(segmentDepartureTime, true)}
                  </div>
                  {
                    this.props.segments.length - 1 === i && (
                      <div>{_.last(segment.stops).name}</div>
                    )
                  }
                </div>
              </div>
            )
          })
        }
      </div>
    )
  }
}

export default RouteTimeline;
