import styled from 'styled-components/native';
import {Image} from 'react-native';

import {logo, google, apple} from '../../images';
import {CopyRight} from './Intro_1';
import appleAuth, {
  appleAuthAndroid,
} from '@invertase/react-native-apple-authentication';
import {GoogleSignin} from '@react-native-google-signin/google-signin';

// 피그마 아트보드 3

const LoginSection = styled.SafeAreaView`
  width: 100%;
  height: 100%;
  position: relative;
`;

const LogoWrap = styled.View`
  display: flex;
  align-items: center;
  margin-top: 140px;
`;

const Logo = styled.Image`
  width: 124px;
  height: 40px;
`;

const TitleWrap = styled.View`
  margin-top: 40px;
`;
const Title = styled.Text`
  font-size: 24px;
  font-weight: 500;
  line-height: 34.08px;
  color: #000;
  text-align: center;
`;

const SubTitleWrap = styled.View`
  margin-top: 70px;
`;

const SubTitle = styled.Text`
  font-size: 20px;
  font-weight: 500;
  line-height: 34px;
  color: #000;
  text-align: center;
`;

const SosialBtnWrap = styled.View`
  margin: 20px 20px 0 20px;
  display: flex;
  gap: 10px;
`;

const SocialLoginBtn = styled.TouchableOpacity`
  height: 46px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 8px;
  flex-direction: row;
  border: 1px solid #000;
`;

const SocialLoginText = styled.Text`
  font-size: 16px;
  font-weight: 500;
  line-height: 22px;
  color: #000;
`;

const handleAppleLogin = async () => {
  if (appleAuthAndroid.isSupported) {
    try {
      appleAuthAndroid.configure({
        clientId: 'com.getch.getchSID',
        redirectUri:
          'https://2b0a-218-145-201-124.ngrok-free.app/api/apple/callback',
        scope: appleAuthAndroid.Scope.ALL,
      });

      const response = await appleAuthAndroid.signIn();
      console.log(response);
      if (response) {
        const code = response.code; // Present if selected ResponseType.ALL / ResponseType.CODE
        const id_token = response.id_token; // Present if selected ResponseType.ALL / ResponseType.ID_TOKEN
        const user = response.user; // Present when user first logs in using appleId
        const state = response.state; // A copy of the state value that was passed to the initial request.
        console.log('Got auth code', code);
        console.log('Got id_token', id_token);
        console.log('Got user', user);
        console.log('Got state', state);
      }
    } catch (error) {
      if (error && error.message) {
        switch (error.message) {
          case appleAuthAndroid.Error.NOT_CONFIGURED:
            console.log('appleAuthAndroid not configured yet.');
            break;
          case appleAuthAndroid.Error.SIGNIN_FAILED:
            console.log('Apple signin failed.');
            break;
          case appleAuthAndroid.Error.SIGNIN_CANCELLED:
            console.log('User cancelled Apple signin.');
            break;
          default:
            break;
        }
      }
    }
  }

  if (appleAuth.isSupported) {
    const appleAuthRequestResponse = await appleAuth.performRequest({
      requestedOperation: appleAuth.Operation.LOGIN,
      requestedScopes: [appleAuth.Scope.FULL_NAME, appleAuth.Scope.EMAIL],
    });
    console.log('appleAuthRequestResponse', appleAuthRequestResponse);
    const credentialState = await appleAuth.getCredentialStateForUser(
      appleAuthRequestResponse.user,
    );

    // use credentialState response to ensure the user is authenticated
    if (credentialState === appleAuth.State.AUTHORIZED) {
      console.log('asd');
      // user is authenticated
    }
  }
};
const handleGoogleLogin = async () => {
  await GoogleSignin.hasPlayServices();
  const user = await GoogleSignin.signIn();
  console.log(user);
};
const Login = () => {
  const currentYear = new Date().getFullYear();

  return (
    <LoginSection>
      <LogoWrap>
        <Logo source={logo} />
      </LogoWrap>
      <TitleWrap>
        <Title>
          내 라이프 스타일에 맞는{'\n'}
          일정을 찾아 듣는 앱
        </Title>
        <SubTitleWrap>
          <SubTitle>지금 가입하세요.</SubTitle>
        </SubTitleWrap>
      </TitleWrap>
      <SosialBtnWrap>
        <SocialLoginBtn onPress={() => handleGoogleLogin()}>
          <Image source={google} />
          <SocialLoginText>Google</SocialLoginText>
        </SocialLoginBtn>
        <SocialLoginBtn onPress={() => handleAppleLogin()}>
          <Image source={apple} />
          <SocialLoginText>Apple</SocialLoginText>
        </SocialLoginBtn>
      </SosialBtnWrap>
      <CopyRight>© {currentYear} Getch Corp.</CopyRight>
    </LoginSection>
  );
};
export default Login;
