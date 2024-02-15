import {ReactNode} from 'react';
import {SafeAreaView, StatusBar, StyleSheet, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import RootNavigator from './src/navigation/RootNavigator';
import './src/pushAlarm';

function App(): React.JSX.Element {
  const backgroundStyle = {
    backgroundColor: '#F7F7F7',
  };
  const styles = StyleSheet.create({
    container: {backgroundColor: backgroundStyle.backgroundColor, flex: 1},
    text: {
      fontSize: 25,
      fontWeight: '500',
    },
    mainKoText: {
      fontSize: 42,
      color: '#000',
    },
  });
  return (
    <NavigationContainer>
      <SafeAreaView style={styles.container}>
        <StatusBar
          barStyle={'dark-content'}
          backgroundColor={backgroundStyle.backgroundColor}
        />
        <RootNavigator />
      </SafeAreaView>
    </NavigationContainer>
  );
}

export default App;
