import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import AppBarButton from '../components/appBars/appBarButtons/AppBarButton';
import AppBarSimple from '../components/appBars/appBarSimples/AppBarSimple';
import AppBarPrimary from '../components/appBars/appBarPrimarys/AppBarPrimary';
import AppBarSearch from '../components/appBars/appBarSearch/AppBarSearch';
import AppBarDense from '../components/appBars/appBarDenses/AppBarDense';
import AppBarBottom from '../components/appBars/appBarBottoms/AppBarBottom';
import AvatarImage from '../components/avatars/AvatarImage';
import AvatarLetter from '../components/avatars/AvatarLetter';
import AvatarIcon from '../components/avatars/AvatarIcon';
import BadgeSimple from '../components/badges/simpleBadges/BadgeSimple';
import BadgeMaxValue from '../components/badges/maximumValue/BadgeMaxValue';
import BadgeDot from '../components/badges/dotBadges/BadgeDot';
import BadgeVisibility from '../components/badges/badgeVisibility/BadgeVisibility';
import BadgeCustomized from '../components/badges/customizedBadge/BadgeCustomized';
import BottomNavigation from '../components/bottomNavigations/bottomNav/BottomNavigation';
import BottomNavNoLabel from '../components/bottomNavigations/bottomNavNoLabels/BottomNavNoLabel';
import ButtonContained from '../components/buttons/containedButtons/ButtonContained';
import ButtonText from '../components/buttons/textButton/ButtonText';
import ButtonOutline from '../components/buttons/outlinedButton/ButtonOutline';
import ButtonFloatingAction from '../components/buttons/floatingActionButton/ButtonFloatingAction';
import ButtonActionItem from '../components/buttons/floatingActionButton/ButtonActionItem';
import ButtonSize from '../components/buttons/sizedButton/ButtonSize';
import ButtonIconLabel from '../components/buttons/iconsLabeledButtons/ButtonIconLabel';
import ButtonIcon from '../components/buttons/iconButton/ButtonIcon';

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
          <Route path="/app-bar/bottom" component={AppBarBottom} />
          <Route path="/avatar/image" component={AvatarImage} />
          <Route path="/avatar/letter" component={AvatarLetter} />
          <Route path="/avatar/icons" component={AvatarIcon} />
          <Route path="/badge/simple" component={BadgeSimple} />
          <Route path="/badge/max-value" component={BadgeMaxValue} />
          <Route path="/badge/dot" component={BadgeDot} />
          <Route path="/badge/visibility" component={BadgeVisibility} />
          <Route path="/badge/customized" component={BadgeCustomized} />
          <Route path="/bottom/navigation" component={BottomNavigation} />
          <Route path="/bottom/no-label" component={BottomNavNoLabel} />
          <Route path="/button/contained" component={ButtonContained} />
          <Route path="/button/text" component={ButtonText} />
          <Route path="/button/outline" component={ButtonOutline} />
          <Route
            path="/button/floating-action"
            component={ButtonFloatingAction}
          />
          <Route path="/button/floating-zoom" component={ButtonActionItem} />
          <Route path="/button/size" component={ButtonSize} />
          <Route path="/button/icon-label" component={ButtonIconLabel} />
          <Route path="/button/icons" component={ButtonIcon} />
        </Switch>
      </div>
    );
  }
}

export default Homes;
