import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { grey200 } from 'material-ui/styles/colors'

import RouteList from './RouteList'
import RouteDetails from './RouteDetails'
import data from './../routes.json'
import { medium } from './../libs/breakpoints'

const styles = StyleSheet.create({
  container: {
    [`@media (min-width: ${medium})`]: {
      padding: '1rem',
    }
  }
});

class App extends Component {
  constructor (props) {
    super(props)
    this.showRouteDetails = this.showRouteDetails.bind(this)
    this.showRouteList = this.showRouteList.bind(this)
    this.state = {selectedRoute: null}
  }

  showRouteDetails (route) {
    this.setState({selectedRoute: route})
  }

  showRouteList () {
    this.setState({selectedRoute: null})
  }

  render() {
    return (
      <MuiThemeProvider>
        <div style={{backgroundColor: grey200, flex: '1'}} className={css(styles.container)}>
          <div style={{maxWidth: '900px', margin: '0 auto'}}>
            {
              !!this.state.selectedRoute
              ? <RouteDetails route={this.state.selectedRoute} onCancelTouchTap={this.showRouteList} />
              : <RouteList routes={data.routes} onRouteSelect={this.showRouteDetails} />
            }

          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
