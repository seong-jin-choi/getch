import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import RootNavigator from './src/navigation/RootNavigator';
import './src/pushAlarm';

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" backgroundColor={'#F7F7F7'} />
      <RootNavigator />
    </NavigationContainer>
  );
}

export default App;
