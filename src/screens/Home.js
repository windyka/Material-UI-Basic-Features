import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import AppBarButton from '../components/appBars/appBarButtons/AppBarButton';
import appBarSimple from '../components/appBars/appBarSimples/appBarSimple';

class Homes extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/app-bar/button" component={AppBarButton} />
          <Route path="/app-bar/simple" component={appBarSimple} />
        </Switch>
      </div>
    );
  }
}

export default Homes;
