import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import AppBarButton from '../components/appBars/appBarButtons/AppBarButton';
import AppBarSimple from '../components/appBars/appBarSimples/AppBarSimple';
import AppBarPrimary from '../components/appBars/appBarPrimarys/AppBarPrimary';
import AppBarSearch from '../components/appBars/appBarSearch/AppBarSearch';
import AppBarDense from '../components/appBars/appBarDenses/AppBarDense';

class Homes extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/app-bar/button" component={AppBarButton} />
          <Route path="/app-bar/simple" component={AppBarSimple} />
          <Route path="/app-bar/primary" component={AppBarPrimary} />
          <Route path="/app-bar/search" component={AppBarSearch} />
          <Route path="/app-bar/dense" component={AppBarDense} />
        </Switch>
      </div>
    );
  }
}

export default Homes;
