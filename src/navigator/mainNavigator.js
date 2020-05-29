import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Camera54893Navigator from '../features/Camera54893/navigator';
import BlankScreen54892Navigator from '../features/BlankScreen54892/navigator';
import BlankScreen54891Navigator from '../features/BlankScreen54891/navigator';
import UserProfile54888Navigator from '../features/UserProfile54888/navigator';
import SignIn254887Navigator from '../features/SignIn254887/navigator';
import BlankScreen54886Navigator from '../features/BlankScreen54886/navigator';
import Maps54822Navigator from '../features/Maps54822/navigator';
import ArticleList54819Navigator from '../features/ArticleList54819/navigator';
import MessengerNavigator from '../features/Messenger/navigator';
import TutorialNavigator from '../features/Tutorial/navigator';
import MapsNavigator from '../features/Maps/navigator';
import CalendarNavigator from '../features/Calendar/navigator';
import CameraNavigator from '../features/Camera/navigator';
import EmailAuthNavigator from '../features/EmailAuth/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
    SplashScreen: {
      screen: SplashScreen
    },
    //@BlueprintNavigationInsertion
Camera54893: { screen: Camera54893Navigator },
BlankScreen54892: { screen: BlankScreen54892Navigator },
BlankScreen54891: { screen: BlankScreen54891Navigator },
UserProfile54888: { screen: UserProfile54888Navigator },
SignIn254887: { screen: SignIn254887Navigator },
BlankScreen54886: { screen: BlankScreen54886Navigator },
Maps54822: { screen: Maps54822Navigator },
ArticleList54819: { screen: ArticleList54819Navigator },
Messenger: { screen: MessengerNavigator },
Tutorial: { screen: TutorialNavigator },
Maps: { screen: MapsNavigator },
Calendar: { screen: CalendarNavigator },
Camera: { screen: CameraNavigator },
EmailAuth: { screen: EmailAuthNavigator },

    /** new navigators can be added here */
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu,
    initialRouteName: 'SplashScreen',
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
