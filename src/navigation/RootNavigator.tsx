import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Tabs from './MainTabNavigator';
import Intro1 from '../screen/LoginPages/Intro_1';
import Intro2 from '../screen/LoginPages/Intro_2';
import Login from '../screen/LoginPages/Login';
import Guide1 from '../screen/Guides/Guide_1';
import Guide2 from '../screen/Guides/Guide_2';
import Guide3 from '../screen/Guides/Guide_3';

import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useEffect, useState} from 'react';
import {useRecoilState} from 'recoil';
import {LoginState} from '../login';
import {ActivityIndicator, View} from 'react-native';

const Nav = createNativeStackNavigator();
const RootNavigator = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [loginState, setLoginState] = useRecoilState(LoginState);

  useEffect(() => {
    const getData = async () => {
      const token = await AsyncStorage.getItem('AccessToken');
      if (token === null) {
        setLoginState(false);
      } else {
        setLoginState(true);
      }
      setIsLoading(false);
    };
    getData();
  }, []);

  if (isLoading) {
    return <SplashScreen />;
  }

  return (
    <Nav.Navigator
      initialRouteName={loginState ? 'Tabs' : 'Intro1'} //최초로 보이는 페이지
      screenOptions={{headerShown: false}}>
      {loginState ? (
        <>
          <Nav.Screen name="Tabs" component={Tabs} />
        </>
      ) : (
        <>
          <Nav.Screen name="Intro1" component={Intro1} />
          <Nav.Screen name="Intro2" component={Intro2} />
          <Nav.Screen name="Login" component={Login} />
          <Nav.Screen name="Guide1" component={Guide1} />
          <Nav.Screen name="Guide2" component={Guide2} />
          <Nav.Screen name="Guide3" component={Guide3} />
          <Nav.Screen name="Tabs" component={Tabs} />
        </>
      )}
    </Nav.Navigator>
  );
};
export default RootNavigator;

function SplashScreen() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <ActivityIndicator size="large" />
    </View>
  );
}
