import { Navigation } from 'react-native-navigation';
import AuthScreen from './src/screens/Auth/Auth';
//Register Screens
Navigation.registerComponent('awesome-places.appName', () => AuthScreen);

//Start a App
Navigation.startSingleScreenApp({
    screen: {
        screen: 'awesome-places.appName',
        title: 'Login',
    },
});
