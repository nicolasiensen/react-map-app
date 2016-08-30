import React from 'react';
import TestUtils from 'react-addons-test-utils';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import data from './../src/routes.json';
import RouteList from './../src/components/RouteList';
import RouteItem from './../src/components/RouteItem';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

describe('RouteList', () => {
  it('should render one RouteItem for each route', () => {
    const routeList = TestUtils.renderIntoDocument(
      <MuiThemeProvider>
        <RouteList routes={data.routes} onRouteSelect={() => {}} />
      </MuiThemeProvider>
    );

    expect(TestUtils.scryRenderedComponentsWithType(routeList, RouteItem).length).toBe(data.routes.length)
  })
});
