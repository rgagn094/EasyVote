import { StackNavigator, TabNavigator, addNavigationHelpers, } from 'react-navigation';
import Home from './src/pages/Home';
import PicChange from './src/pages/PicChange';
import SettingsEdit from './src/pages/SettingsEdit'
import Login from './src/pages/Login';
import LogOrSign from './src/pages/LogOrSign';
import Profile from './src/pages/Profile';
import Security from './src/pages/Security';
import ProfileEdit from './src/pages/ProfileEdit';

export const Router = StackNavigator({
    Home:{ screen: Home},
    LogOrSign:{screen:LogOrSign},
   // Login: { screen: Login },
    
},
{headerMode: 'none'}) 

export default Router