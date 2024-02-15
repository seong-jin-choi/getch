import {View, Text, TouchableOpacity} from 'react-native';

// 피그마 아트보드 17

export default ({navigation: {navigate}}) => (
  <View
    style={{flex: 1, justifyContent: 'center', alignItems: 'center', gap: 20}}>
    <TouchableOpacity onPress={() => navigate('MyCD')}>
      <Text>MY CD</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => navigate('PrivateTerms')}>
      <Text>개인정보 처리약관</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => navigate('ServiceTerms')}>
      <Text>서비스 약관</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => navigate('GetchInfo')}>
      <Text>Getch 정보</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => navigate('MagageAccount')}>
      <Text>계정 관리</Text>
    </TouchableOpacity>
  </View>
);
