import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import AppBarButtons from '../components/appBars/appBarButtons/AppBarButton';

class Homes extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/app-bar/button" component={AppBarButtons} />
        </Switch>
      </div>
    );
  }
}

export default Homes;
