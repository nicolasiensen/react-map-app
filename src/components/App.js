import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { grey200 } from 'material-ui/styles/colors'

import RouteList from './RouteList'
import data from './../routes.json'
import { medium } from './../breakpoints'

const styles = StyleSheet.create({
  container: {
    [`@media (min-width: ${medium})`]: {
      padding: '1rem',
    }
  }
});

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div style={{backgroundColor: grey200, flex: '1'}} className={css(styles.container)}>
          <div style={{maxWidth: '900px', margin: '0 auto'}}>
            <RouteList routes={data.routes} />
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
