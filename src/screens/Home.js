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
import CardSimple from '../components/cards/simpleCards/CardSimple';
import CardComplexInteraction from '../components/cards/complexInteractionCards/CardComplexInteraction';
import CardMedia from '../components/cards/mediaCards/CardMedia';
import CardUiControl from '../components/cards/uiControlCards/CardUiControl';
import Chip from '../components/chips/chip/Chip';
import ChipOutlined from '../components/chips/outlinedChips/ChipOutlined';
import ChipArray from '../components/chips/arrayChips/ChipArray';
import ChipPlayground from '../components/chips/chipPlayground/ChipPlayground';
import SimpleDialogDemo from '../components/dialogs/simpleDialogs/DialogSimple';
import AlertDialog from '../components/dialogs/alertDialogs/openAlertDialogs/DialogOpenAlert';
import AlertDialogSlide from '../components/dialogs/alertDialogs/slideInAlertDialogs/DialogSlide';
import FormDialog from '../components/dialogs/formDialogs/DialogForm';
import CustomizedDialogDemo from '../components/dialogs/customizedDialogs/DialogCustomized';
import DialogFullScreen from '../components/dialogs/fullScreenDialogs/DialogFullScreen';
import DialogSizeOptional from '../components/dialogs/optionalSizeDialogs/DialogSizeOptional';
import DialogResponsiveFullScreen from '../components/dialogs/responsiveFullScreens/DialogResponsiveFullScreen';
import DialogConfirmation from '../components/dialogs/confirmationDialogs/DialogConfirmation';
import ScrollDialog from '../components/dialogs/accessibilityDialogs/DialogAccessibility';
import DraggableDialog from '../components/dialogs/draggableDialogs/DialogDraggable';
import DividerList from '../components/dividers/listDivider/DividerList';
import DividerInset from '../components/dividers/insetDividers/DividerInset';
import DividerSubhead from '../components/dividers/subheadDividers/DividerSubhead';
import DividerMiddle from '../components/dividers/middleDividers/DividerMiddle';
import DrawerTemporary from '../components/drawers/temporaryDrawers/DrawerTemporary';
import DrawerSwipeable from '../components/drawers/swipeableDrawers/DrawerSwipeable';
import DrawerResponsive from '../components/drawers/responsiveDrawers/DrawerResponsive';
import DrawerPersistentLeft from '../components/drawers/persistentDrawers/persistentLeftDrawers/DrawerPersistentLeft';
import DrawerPersistentRight from '../components/drawers/persistentDrawers/persistentRightDrawers/DrawerPersistentRight';
import DrawerMiniVariant from '../components/drawers/miniVariantDrawers/DrawerMiniVariant';
import DrawerPermanentLeft from '../components/drawers/permanentDrawers/permanentDrawerLeft/DrawerPermanentLeft';
import DrawerPermanentRight from '../components/drawers/permanentDrawers/permanentDrawerRight/DrawerPermanentRight';

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
          <Route path="/card/simple" component={CardSimple} />
          <Route
            path="/card/complex-interaction"
            component={CardComplexInteraction}
          />
          <Route path="/card/media" component={CardMedia} />
          <Route path="/card/ui-control" component={CardUiControl} />
          <Route path="/chip" exact component={Chip} />
          <Route path="/chip/outlined" component={ChipOutlined} />
          <Route path="/chip/array" component={ChipArray} />
          <Route path="/chip/playground" component={ChipPlayground} />
          <Route path="/dialog/simple" component={SimpleDialogDemo} />
          <Route path="/dialog/alert/open" component={AlertDialog} />
          <Route path="/dialog/slide" component={AlertDialogSlide} />
          <Route path="/dialog/form" component={FormDialog} />
          <Route path="/dialog/customized" component={CustomizedDialogDemo} />
          <Route path="/dialog/fullscreen" component={DialogFullScreen} />
          <Route path="/dialog/option-size" component={DialogSizeOptional} />
          <Route
            path="/dialog/responsive-fullscreen"
            component={DialogResponsiveFullScreen}
          />
          <Route path="/dialog/confirmation" component={DialogConfirmation} />
          <Route path="/dialog/accessibility" component={ScrollDialog} />
          <Route path="/dialog/draggable" component={DraggableDialog} />
          <Route path="/divider/list" component={DividerList} />
          <Route path="/divider/inset" component={DividerInset} />
          <Route path="/divider/subhead" component={DividerSubhead} />
          <Route path="/divider/middle" component={DividerMiddle} />
          <Route path="/drawer/temporary" component={DrawerTemporary} />
          <Route path="/drawer/swipeable" component={DrawerSwipeable} />
          <Route path="/drawer/responsive" component={DrawerResponsive} />
          <Route
            path="/drawer/persistent/left"
            component={DrawerPersistentLeft}
          />
          <Route
            path="/drawer/persistent/right"
            component={DrawerPersistentRight}
          />
          <Route path="/drawer/mini" component={DrawerMiniVariant} />
          <Route
            path="/drawer/permanent/left"
            component={DrawerPermanentLeft}
          />
          <Route
            path="/drawer/permanent/right"
            component={DrawerPermanentRight}
          />
        </Switch>
      </div>
    );
  }
}

export default Homes;
