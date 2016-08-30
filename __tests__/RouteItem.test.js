import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import _ from 'lodash';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import data from './../src/routes.json';
import RouteItem from './../src/components/RouteItem';
import SegmentIcon from './../src/components/SegmentIcon';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

const route = data.routes[0];
let routeItem, routeItemNode, onTouchTap;

describe('RouteItem', () => {
  beforeEach(() => {
    onTouchTap = jest.fn()

    routeItem = TestUtils.renderIntoDocument(
      <MuiThemeProvider>
        <RouteItem route={route} onTouchTap={onTouchTap} />
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

  it('should execute onTouchTap prop when clicked', () => {
    const _routeItem = TestUtils.findRenderedComponentWithType(routeItem, RouteItem)
    _routeItem.handleTouchTap()
    expect(onTouchTap).toBeCalledWith(route)
  })
});
