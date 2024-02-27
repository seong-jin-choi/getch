import styled from 'styled-components/native';
import {Image} from 'react-native';

import {logo, google, apple} from '../../images';
import {CopyRight} from './Intro_1';
import appleAuth, {
  appleAuthAndroid,
} from '@invertase/react-native-apple-authentication';
import {GoogleSignin} from '@react-native-google-signin/google-signin';

import fonts from '../../fonts';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useSetRecoilState} from 'recoil';
import {AuthKey, LoginState, appleLoginURL, googleLoginURL} from '../../login';
import axios, {AxiosError} from 'axios';

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
  font-family: ${fonts.Medium};
  font-size: 24px;
  line-height: 34.08px;
  color: #000;
  text-align: center;
`;

const SubTitleWrap = styled.View`
  margin-top: 70px;
`;

const SubTitle = styled.Text`
  font-family: 'Pretendard-Medium';
  font-size: 20px;
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

const Login = () => {
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
        if (response) {
          const data = await axios.post(
            appleLoginURL,
            {
              identityToken: response.id_token,
            },
            {headers: {Authorization: AuthKey}},
          );
          if (data.data.token) {
            await AsyncStorage.setItem('AccessToken', data.data.token);
            setLoginState(true);
          }
        }
      } catch (error) {
        //@TODO: 예외처리 필요
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
      const credentialState = await appleAuth.getCredentialStateForUser(
        appleAuthRequestResponse.user,
      );
      if (credentialState === appleAuth.State.AUTHORIZED) {
        const data = await axios.post(
          appleLoginURL,
          {
            identityToken: appleAuthRequestResponse.identityToken,
          },
          {headers: {Authorization: AuthKey}},
        );
        if (data.data.token) {
          await AsyncStorage.setItem('AccessToken', data.data.token);
          setLoginState(true);
        }
      }
    }
  };
  const handleGoogleLogin = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const sigiInResult = await GoogleSignin.signIn();
      const data = await axios
        .post(
          googleLoginURL,
          {
            userID: sigiInResult.user.email,
          },
          {headers: {Authorization: AuthKey}},
        )
        .catch((error: AxiosError) => {
          //@TODO: 백엔드 서버 죽었을 때 예외가 없음
          console.log('백엔드 서버 죽어있음');
          return null;
        });
      if (!data) return;
      if (data.data.token) {
        await AsyncStorage.setItem('AccessToken', data.data.token);
        const visited = await AsyncStorage.getItem('isFirstVisit');
        if (!visited) {
          await AsyncStorage.setItem('visited', 'true');
          setLoginState({isLoggined: true, isFirstVisit: true});
        } else {
          setLoginState({isLoggined: true, isFirstVisit: false});
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  const setLoginState = useSetRecoilState(LoginState);
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
