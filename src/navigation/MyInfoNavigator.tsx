import {createNativeStackNavigator} from '@react-navigation/native-stack';
import GetchInfo from '../screen/MyInfoPages/GetchInfo';
import MagageAccount from '../screen/MyInfoPages/MagageAccount';
import MyInfo from '../screen/MyInfo';
import MyCD from '../screen/MyInfoPages/MyCD';
import PrivateTerms from '../screen/MyInfoPages/PrivateTerms';
import ServiceTerms from '../screen/MyInfoPages/ServiceTerms';
import fonts from '../fonts';

const StackNavigator = createNativeStackNavigator();

const MyInfoNavigator = () => {
  return (
    <StackNavigator.Navigator
      screenOptions={{
        headerBackTitleVisible: false,
        headerTintColor: 'black',
        headerTitleStyle: {
          fontSize: 18,
          fontWeight: '600',
          fontFamily: fonts.SemiBold,
        },
        animation: 'slide_from_right',
      }}>
      <StackNavigator.Screen
        name="MyInfo"
        component={MyInfo}
        options={{
          headerShown: false,
          title: 'MyInfo',
        }}
      />
      <StackNavigator.Screen
        name="MyCD"
        component={MyCD}
        options={{
          title: 'MY CD',
        }}
      />
      <StackNavigator.Screen
        name="PrivateTerms"
        component={PrivateTerms}
        options={{title: '개인정보 처리약관'}}
      />
      <StackNavigator.Screen
        name="ServiceTerms"
        component={ServiceTerms}
        options={{title: '서비스 약관'}}
      />
      <StackNavigator.Screen
        name="GetchInfo"
        component={GetchInfo}
        options={{title: 'Getch 정보'}}
      />
      <StackNavigator.Screen
        name="MagageAccount"
        component={MagageAccount}
        options={{title: '계정 관리'}}
      />
    </StackNavigator.Navigator>
  );
};

export default MyInfoNavigator;
