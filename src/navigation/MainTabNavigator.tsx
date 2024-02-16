import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Todo from '../screen/Todo';
import Category from '../screen/Category';
import MyInfoNavigator from './MyInfoNavigator';
import React from 'react';
import {Image, Text, View} from 'react-native';
import {
  categoryIcon,
  categoryIconActive,
  myInfoIcon,
  myInfoIconActive,
  todoIcon,
  todoIconActive,
} from '../images';
import styled from 'styled-components/native';

const Tab = createBottomTabNavigator();

interface IStyle {
  focused: boolean;
}

const MainTabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Todo"
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#ffffff',
          paddingTop: 3,
        },
      }}>
      <Tab.Screen
        name="Category"
        component={Category}
        options={{
          title: '카테고리',
          tabBarLabel: ({children, focused}) => {
            return (
              <Text
                style={{fontSize: 10, color: focused ? '#000000' : '#8E8E8E'}}>
                {children}
              </Text>
            );
          },
          tabBarItemStyle: {paddingBottom: 5},
          tabBarIcon: ({focused}) => {
            return (
              <Image
                source={focused ? categoryIconActive : categoryIcon}
                style={{width: 22, height: 21, objectFit: 'contain'}}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Todo"
        component={Todo}
        options={{
          title: '일정',
          tabBarLabel: ({children, focused}) => {
            return (
              <Text
                style={{fontSize: 10, color: focused ? '#000000' : '#8E8E8E'}}>
                {children}
              </Text>
            );
          },
          tabBarItemStyle: {paddingBottom: 5},
          tabBarIcon: ({focused}) => {
            return (
              <Image
                source={focused ? todoIconActive : todoIcon}
                style={{width: 21, height: 21, objectFit: 'contain'}}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="MyInfoNavigator"
        component={MyInfoNavigator}
        options={{
          title: '내 정보',
          tabBarLabel: ({children, focused}) => {
            return (
              <Text
                style={{fontSize: 10, color: focused ? '#000000' : '#8E8E8E'}}>
                {children}
              </Text>
            );
          },
          tabBarItemStyle: {paddingBottom: 5},
          tabBarIcon: ({focused}) => {
            return (
              <Image
                source={focused ? myInfoIconActive : myInfoIcon}
                style={{width: 21, height: 20, objectFit: 'contain'}}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default MainTabNavigator;
