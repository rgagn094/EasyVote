import { StackNavigator, TabNavigator, addNavigationHelpers, } from 'react-navigation';
import Home from './src/pages/Home';
import PicChange from './src/pages/PicChange';
import SettingsEdit from './src/pages/SettingsEdit'
import Login from './src/pages/Login';
import LogOrSign from './src/pages/LogOrSign';
import Profile from './src/pages/Profile';
import Security from './src/pages/Security';
import ProfileEdit from './src/pages/ProfileEdit';
import SignUp from './src/pages/SignUp';
import TwoF from './src/pages/TwoF';


export const Router = StackNavigator({
   // Home:{ screen: Home},
    LogOrSign:{screen:LogOrSign},
    SignUp:{screen:SignUp},
    TwoF:{screen:TwoF},
    Login: { screen: Login },
    Security:{screen:Security},
    Profile:{screen:Profile},
    SettingsEdit:{screen:SettingsEdit},
    ProfileEdit:{screen:ProfileEdit},
   
    
   
},
{headerMode: 'none'}) 

export default Router