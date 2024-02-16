import styled from 'styled-components/native';
import {Image} from 'react-native';

import {logo, google, apple} from '../../images';
import {CopyRight} from './Intro_1';

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

// 피그마 아트보드 3

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
        <SocialLoginBtn onPress={() => {}}>
          <Image source={google} />
          <SocialLoginText>Google</SocialLoginText>
        </SocialLoginBtn>
        <SocialLoginBtn onPress={() => {}}>
          <Image source={apple} />
          <SocialLoginText>Apple</SocialLoginText>
        </SocialLoginBtn>
      </SosialBtnWrap>
      <CopyRight>© {currentYear} Getch Corp.</CopyRight>
    </LoginSection>
  );
};
export default Login;
