import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import RootNavigator from './src/navigation/RootNavigator';
import './src/pushAlarm';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {useEffect} from 'react';
import {RecoilRoot} from 'recoil';
import AsyncStorage from '@react-native-async-storage/async-storage';

function App(): React.JSX.Element {
  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '174352192007-6glmie59ihc5apqd8e0hss6ejs1m8vfj.apps.googleusercontent.com',
      iosClientId:
        '174352192007-665nfec6016tegqro9atiedo9g5nck13.apps.googleusercontent.com',
    });
  }, []);
  AsyncStorage.removeItem('AccessToken');
  AsyncStorage.removeItem('isFirstVisit');
  return (
    <RecoilRoot>
      <NavigationContainer>
        <StatusBar barStyle="dark-content" backgroundColor={'#F7F7F7'} />
        <RootNavigator />
      </NavigationContainer>
    </RecoilRoot>
  );
}

export default App;
