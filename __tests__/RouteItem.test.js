import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import _ from 'lodash';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import data from './../src/routes.json';
import RouteItem from './../src/components/RouteItem';
import SegmentIcon from './../src/components/SegmentIcon';

const route = data.routes[0];
let routeItem, routeItemNode;

describe('RouteItem', () => {
  beforeEach(() => {
    routeItem = TestUtils.renderIntoDocument(
      <MuiThemeProvider>
        <RouteItem route={route} />
      </MuiThemeProvider>
    );
    routeItemNode = ReactDOM.findDOMNode(routeItem);
  })

  it('should render one SegmentIcon for each route segment', () => {
    expect(TestUtils.scryRenderedComponentsWithType(routeItem, SegmentIcon).length).toBe(route.segments.length);
  });

  it('should display the route type', () => {
    expect(routeItemNode.textContent).toMatch(_.startCase(route.type));
  });

  it('should display the route price', () => {
    expect(routeItemNode.textContent).toMatch((route.price.amount/100).toFixed(2));
  });
});
