import React, { Component } from 'react';
import _ from 'lodash';

class Map extends Component {
  componentDidMount() {
    // TODO: add Google Maps API as a NPM package dependency, instead of loading it in index.html
    let map = new window.google.maps.Map(this.refs.map, {
      disableDefaultUI: true
    });

    const lastStop = _.last(_.last(this.props.segments).stops)

    new window.google.maps.Marker({
      position: {lat: lastStop.lat, lng: lastStop.lng},
      map: map
    });

    let bounds = new window.google.maps.LatLngBounds();

    this.props.segments.forEach((segment) => {
      let path = []

      // Generate path based on polyline if it exists
      if (segment.polyline) {
        path = window.google.maps.geometry.encoding
          .decodePath(segment.polyline)
          .map(l => ({lat: l.lat(), lng: l.lng()}))
      // Use stops to generate the path if there is no polyline
      } else {
        path = segment.stops.map(s => ({lat: s.lat, lng: s.lng}))
      }

      // Centralize the map view
      path.forEach((latLng) => { bounds.extend(latLng) })

      const polyline = new window.google.maps.Polyline({
        path: path,
        geodesic: true,
        strokeColor: segment.color,
        strokeOpacity: 1.0,
        strokeWeight: 5
      });

      polyline.setMap(map);
    })

    map.fitBounds(bounds);
  }

  render() {
    return (
      <div ref='map' style={this.props.style}></div>
    )
  }
}

Map.propTypes = {
  segments: React.PropTypes.array.isRequired,
  style: React.PropTypes.object
};

export default Map;
