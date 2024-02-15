import {
  StyleSheet,
  SafeAreaView,
  View,
  Image,
  Text,
  TouchableOpacity,
} from 'react-native';
import {logo, google, apple} from '../../images';

// 피그마 아트보드 3

const Login = () => {
  const styles = StyleSheet.create({
    mainContainer: {
      flex: 1,
    },
    logo: {
      width: 124,
      height: 40,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      lineHeight: 34.08,
      color: '#000',
      textAlign: 'center',
    },
    subTitle: {
      fontSize: 20,
      fontWeight: 'bold',
      lineHeight: 34,
      color: '#000',
      textAlign: 'center',
    },
    socialLoginBtn: {
      gap: 10,
      height: 46,
      flexDirection: 'row',
      borderRadius: 8,
      justifyContent: 'center',
      alignItems: 'center',
      borderWidth: 1,
      borderColor: '#000',
      borderStyle: 'solid',
    },
    socialLoginText: {
      fontSize: 16,
      fontWeight: 'bold',
      lineHeight: 22,
      color: '#000',
    },
    copyRight: {
      position: 'absolute',
      bottom: 32,
      opacity: 0.4,
      fontSize: 11,
      color: '#000',
      alignSelf: 'center',
    },
  });

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View
        style={{
          marginTop: 140,
          alignItems: 'center',
        }}>
        <Image source={logo} style={styles.logo} />
      </View>
      <View style={{marginTop: 40}}>
        <Text style={styles.title}>
          내 라이프 스타일에 맞는{'\n'}
          일정을 찾아 듣는 앱
        </Text>
        <View style={{marginTop: 70}}>
          <Text style={styles.subTitle}>지금 가입하세요.</Text>
        </View>
      </View>
      <View
        style={{
          marginHorizontal: 20,
          marginTop: 20,
          gap: 10,
        }}>
        <TouchableOpacity style={styles.socialLoginBtn} onPress={() => {}}>
          <Image source={google} />
          <Text style={styles.socialLoginText}>Google</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialLoginBtn} onPress={() => {}}>
          <Image source={apple} />
          <Text style={styles.socialLoginText}>Apple</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.copyRight}>© 2024 Getch Corp.</Text>
    </SafeAreaView>
  );
};
export default Login;
