import React from 'react';
import TestUtils from 'react-addons-test-utils';
import App from '../src/components/App';
import RouteList from '../src/components/RouteList';
import RouteDetails from '../src/components/RouteDetails';
import data from './../src/routes.json'

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

window.google = {
  maps: {
    Map: (
      class Map {
        fitBounds() {
          return {}
        }
      }
    ),
    LatLngBounds: class LatLngBounds {},
    Polyline: (
      class Polyline {
        setMap() {
          return {};
        }
      }
    ),
    geometry: {
      encoding: {
        decodePath: () => []
      }
    },
    Marker: class Marker {}
  }
}

describe('App', () => {
  it('should render the RouteList by default', () => {
    const app = TestUtils.renderIntoDocument(<App />);
    expect(TestUtils.findRenderedComponentWithType(app, RouteList));
  });

  it('should render the RouteDetails when a route is selected', () => {
    const app = TestUtils.renderIntoDocument(<App />);
    app.showRouteDetails(data.routes[0])
    expect(TestUtils.findRenderedComponentWithType(app, RouteDetails));
  });
});
