import styled from 'styled-components/native';
import {Button, Text, View} from 'react-native';
import {handleScheduleAlarm} from '../pushAlarm';

// 피그마 아트보드 14

const Category = ({navigation: {navigate}}) => (
  <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    <Text>Category</Text>
    <Button title="push" onPress={handleScheduleAlarm} />
  </View>
);

export default Category;
