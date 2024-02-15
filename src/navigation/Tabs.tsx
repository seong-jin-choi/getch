import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Todo from '../screen/Todo';
import Category from '../screen/Category';
import MyInfo from '../screen/MyInfo';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator initialRouteName="Todo" screenOptions={{headerShown: false}}>
      <Tab.Screen name="카테고리" component={Category} />
      <Tab.Screen name="일정" component={Todo} />
      <Tab.Screen name="내 정보" component={MyInfo} />
    </Tab.Navigator>
  );
};

export default Tabs;
