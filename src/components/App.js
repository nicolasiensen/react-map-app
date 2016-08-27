import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { grey200 } from 'material-ui/styles/colors'

import RouteList from './RouteList'
import data from './../routes.json'

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div style={{backgroundColor: grey200}}>
          <div style={{maxWidth: '900px', margin: '0 auto'}}>
            <RouteList routes={data.routes} />
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
