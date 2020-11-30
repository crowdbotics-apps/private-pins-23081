import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Dashboard13180182Navigator from '../features/Dashboard13180182/navigator';
import EmailAuth4180181Navigator from '../features/EmailAuth4180181/navigator';
import Messaging5180180Navigator from '../features/Messaging5180180/navigator';
import Settings6180179Navigator from '../features/Settings6180179/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Dashboard13180182: { screen: Dashboard13180182Navigator },
EmailAuth4180181: { screen: EmailAuth4180181Navigator },
Messaging5180180: { screen: Messaging5180180Navigator },
Settings6180179: { screen: Settings6180179Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
