import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Todo from '../screen/Todo';
import Category from '../screen/Category';
import MyInfoNavigator from './MyInfoNavigator';

const Tab = createBottomTabNavigator();

const MainTabNavigator = () => {
  return (
    <Tab.Navigator initialRouteName="Todo" screenOptions={{headerShown: false}}>
      <Tab.Screen
        name="Category"
        component={Category}
        options={{title: '카테고리'}}
      />
      <Tab.Screen name="Todo" component={Todo} options={{title: '일정'}} />
      <Tab.Screen
        name="MyInfoNavigator"
        component={MyInfoNavigator}
        options={{title: '내 정보'}}
      />
    </Tab.Navigator>
  );
};

export default MainTabNavigator;
