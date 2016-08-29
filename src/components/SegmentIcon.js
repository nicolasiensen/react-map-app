import React, { Component } from 'react';
import FontIcon from 'material-ui/FontIcon';

function getSegmentIcon(travelMode) {
  switch (travelMode) {
    case 'walking':
      return 'directions_walk';
    case 'subway':
      return 'directions_subway';
    case 'bus':
      return 'directions_bus';
    case 'change':
      return 'transfer_within_a_station';
    case 'setup':
      return 'lock';
    case 'driving':
      return 'directions_car';
    case 'parking':
      return 'local_parking';
    case 'cycling':
      return 'directions_bike';
    default:
      throw(new Error(`Unknown travel mode: ${travelMode}`));
  }
}

class SegmentIcon extends Component {
  render() {
    return (
      <span
        style={{
          display: 'inline-block',
          textAlign: 'center',
          backgroundColor: this.props.color,
          color: 'white',
          padding: '0.25rem 0.5rem',
          borderRadius: '0.5rem',
          ...this.props.style
        }}>
        <FontIcon className='material-icons' color='white' style={{display: 'block'}}>
          { getSegmentIcon(this.props.travelMode) }
        </FontIcon>
        {
          this.props.name && this.props.name !== 'Cycling' && (
            <span style={{fontSize: '0.8rem', marginTop: '0.25rem'}}>{this.props.name}</span>
          )
        }
      </span>
    )
  }
}

export default SegmentIcon;
