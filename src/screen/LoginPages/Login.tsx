import {
  StyleSheet,
  SafeAreaView,
  View,
  Image,
  Text,
  TouchableOpacity,
} from 'react-native';
import {logo, google, apple} from '../../images';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {useEffect} from 'react';
import appleAuth from '@invertase/react-native-apple-authentication';

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
  const handleAppleLogin = async () => {
    const appleAuthRequestResponse = await appleAuth.performRequest({
      requestedOperation: appleAuth.Operation.LOGIN,
      requestedScopes: [appleAuth.Scope.FULL_NAME, appleAuth.Scope.EMAIL],
    });
    console.log('appleAuthRequestResponse', appleAuthRequestResponse);
    // get current authentication state for user
    // /!\ This method must be tested on a real device. On the iOS simulator it always throws an error.
    const credentialState = await appleAuth.getCredentialStateForUser(
      appleAuthRequestResponse.user,
    );

    // use credentialState response to ensure the user is authenticated
    if (credentialState === appleAuth.State.AUTHORIZED) {
      // user is authenticated
    }
  };
  const handleGoogleLogin = async () => {
    await GoogleSignin.hasPlayServices();
    const user = await GoogleSignin.signIn();
    console.log(user);
  };

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
        <TouchableOpacity
          style={styles.socialLoginBtn}
          onPress={() => handleGoogleLogin()}>
          <Image source={google} />
          <Text style={styles.socialLoginText}>Google</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.socialLoginBtn}
          onPress={() => handleAppleLogin()}>
          <Image source={apple} />
          <Text style={styles.socialLoginText}>Apple</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.copyRight}>© 2024 Getch Corp.</Text>
    </SafeAreaView>
  );
};
export default Login;
