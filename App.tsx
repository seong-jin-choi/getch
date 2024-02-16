import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import RootNavigator from './src/navigation/RootNavigator';
import './src/pushAlarm';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {useEffect} from 'react';

function App(): React.JSX.Element {
  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '174352192007-6glmie59ihc5apqd8e0hss6ejs1m8vfj.apps.googleusercontent.com',
      iosClientId:
        '174352192007-665nfec6016tegqro9atiedo9g5nck13.apps.googleusercontent.com',
    });
  }, []);
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" backgroundColor={'#F7F7F7'} />
      <RootNavigator />
    </NavigationContainer>
  );
}

export default App;
