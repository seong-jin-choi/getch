import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Tabs from './MainTabNavigator';
import Intro1 from '../screen/LoginPages/Intro_1';
import Intro2 from '../screen/LoginPages/Intro_2';
import Login from '../screen/LoginPages/Login';

import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useEffect, useState} from 'react';
import {useRecoilState} from 'recoil';
import {LoginState} from '../login';
import {ActivityIndicator, View} from 'react-native';
import Tutorial_1 from '../screen/LoginPages/TutorialPages/Tutorial_1';
import Tutorial_2 from '../screen/LoginPages/TutorialPages/Tutorial_2';
import Tutorial_3 from '../screen/LoginPages/TutorialPages/Tutorial_3';
import Tutorial_4 from '../screen/LoginPages/TutorialPages/Tutorial_4';

const Nav = createNativeStackNavigator();
const RootNavigator = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [loginState, setLoginState] = useRecoilState(LoginState);
  useEffect(() => {
    const getData = async () => {
      const token = await AsyncStorage.getItem('AccessToken');
      if (token === null) {
        setLoginState({...loginState, isLoggined: false});
      } else {
        setLoginState({...loginState, isLoggined: true});
      }
      setIsLoading(false);
    };

    getData();
  }, []);
  useEffect(() => {
    console.log(loginState);
  }, [loginState]);

  if (isLoading) {
    return <SplashScreen />;
  }

  return (
    <Nav.Navigator
      initialRouteName={loginState ? 'Tutorial1' : 'Intro1'} //최초로 보이는 페이지
      screenOptions={{headerShown: false}}>
      {loginState.isLoggined ? (
        <>
          {loginState.isFirstVisit ? (
            <>
              <Nav.Screen name="Tutorial1" component={Tutorial_1} />
              <Nav.Screen name="Tutorial2" component={Tutorial_2} />
              <Nav.Screen name="Tutorial3" component={Tutorial_3} />
              <Nav.Screen name="Tutorial4" component={Tutorial_4} />
              <Nav.Screen name="Tabs" component={Tabs} />
            </>
          ) : (
            <>
              <Nav.Screen name="Tabs" component={Tabs} />
            </>
          )}
        </>
      ) : (
        <>
          <Nav.Screen name="Intro1" component={Intro1} />
          <Nav.Screen name="Intro2" component={Intro2} />
          <Nav.Screen name="Login" component={Login} />
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
