import {createNativeStackNavigator} from '@react-navigation/native-stack';
import GetchInfo from '../screen/MyInfoPages/GetchInfo';
import MagageAccount from '../screen/MyInfoPages/MagageAccount';
import MyInfo from '../screen/MyInfo';
import MyCD from '../screen/MyInfoPages/MyCD';
import PrivateTerms from '../screen/MyInfoPages/PrivateTerms';
import ServiceTerms from '../screen/MyInfoPages/ServiceTerms';

const StackNavigator = createNativeStackNavigator();

const MyInfoNavigator = () => {
  return (
    <StackNavigator.Navigator>
      <StackNavigator.Screen
        name="MyInfo"
        component={MyInfo}
        options={{headerShown: false, title: '돌아가기'}}
      />
      <StackNavigator.Screen
        name="MyCD"
        component={MyCD}
        options={{title: 'MY CD'}}
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
