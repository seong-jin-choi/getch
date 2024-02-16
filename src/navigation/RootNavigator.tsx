import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Tabs from './MainTabNavigator';
import Intro1 from '../screen/LoginPages/Intro_1';
import Intro2 from '../screen/LoginPages/Intro_2';
import Login from '../screen/LoginPages/Login';

const Nav = createNativeStackNavigator();
const RootNavigator = () => {
  return (
    <Nav.Navigator
      initialRouteName="Login" //최초로 보이는 페이지
      screenOptions={{headerShown: false}}>
      {/*로그인 페이지 및 애니메이션 (피그마 1~3)*/}
      <Nav.Screen name="Intro1" component={Intro1} />
      <Nav.Screen name="Intro2" component={Intro2} />
      <Nav.Screen name="Login" component={Login} />
      <Nav.Screen name="Tabs" component={Tabs} />
    </Nav.Navigator>
  );
};
export default RootNavigator;
