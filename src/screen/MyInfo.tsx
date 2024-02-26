import {View, Text, TouchableOpacity, SafeAreaView, Image} from 'react-native';
import styled from 'styled-components/native';
import fonts from '../fonts';
import {chevronRightIcon} from '../images';

const Container = styled.View`
  justify-content: 'flex-start';
  align-items: 'center';
  flex: 1;
  gap: 14px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 40px;
`;

const Email = styled.Text`
  font-family: ${fonts.Medium};
  font-size: 22px;
  color: #000000;
`;
const LoginStatus = styled.Text`
  font-family: ${fonts.Regular};
  font-size: 14px;
  color: #8e8e8e;
`;

const ContentContainer = styled.View`
  width: 100%;
  justify-content: center;
  gap: 4px;

  padding-left: 14px;
  padding-right: 14px;
  padding-top: 10px;
  padding-bottom: 10px;
  background-color: #ffffff;
  border-radius: 8px;
`;
const SelectContainer = styled(ContentContainer)`
  align-items: flex-end;
`;
const AccountContainer = styled(ContentContainer)`
  height: 71px;
  border: 1px solid #000000;
`;

const IconContainer = styled.View`
  width: 24px;
  height: 24px;
  background-color: #d9d9d9;
`;

const NavContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const TitleContainer = styled.View`
  align-items: center;
  flex-direction: row;
  gap: 10px;
`;
const Divider = styled.View`
  margin-top: 6px;
  margin-bottom: 6px;
  border-bottom-width: 1px;
  border-bottom-color: #e1e1e1;
  width: 90%;
`;

const NavTitle = styled.Text`
  font-family: ${fonts.Medium};
  font-size: 16px;
  color: #000000;
`;

const ChevronIcon = styled.Image`
  width: 20px;
  height: 20px;
`;
// 피그마 아트보드 17

export default ({navigation: {navigate}}) => (
  <SafeAreaView
    style={{
      flex: 1,
    }}>
    <Container>
      <AccountContainer>
        <Email>email@gmail.com</Email>
        <LoginStatus>Apple ID로 로그인</LoginStatus>
      </AccountContainer>
      <ContentContainer>
        <TouchableOpacity onPress={() => navigate('MyCD')}>
          <NavContainer>
            <TitleContainer>
              <IconContainer />
              <NavTitle>MY CD</NavTitle>
            </TitleContainer>
            <ChevronIcon source={chevronRightIcon} />
          </NavContainer>
        </TouchableOpacity>
      </ContentContainer>
      <SelectContainer>
        <TouchableOpacity onPress={() => navigate('PrivateTerms')}>
          <NavContainer>
            <TitleContainer>
              <IconContainer />
              <NavTitle>개인정보 처리약관</NavTitle>
            </TitleContainer>
            <ChevronIcon source={chevronRightIcon} />
          </NavContainer>
        </TouchableOpacity>
        <Divider />
        <TouchableOpacity onPress={() => navigate('ServiceTerms')}>
          <NavContainer>
            <TitleContainer>
              <IconContainer />
              <NavTitle>서비스 약관</NavTitle>
            </TitleContainer>
            <ChevronIcon source={chevronRightIcon} />
          </NavContainer>
        </TouchableOpacity>
      </SelectContainer>
      <SelectContainer>
        <TouchableOpacity onPress={() => navigate('GetchInfo')}>
          <NavContainer>
            <TitleContainer>
              <IconContainer />
              <NavTitle>Getch 정보</NavTitle>
            </TitleContainer>
            <ChevronIcon source={chevronRightIcon} />
          </NavContainer>
        </TouchableOpacity>
        <Divider />
        <TouchableOpacity onPress={() => navigate('MagageAccount')}>
          <NavContainer>
            <TitleContainer>
              <IconContainer />
              <NavTitle>계정 관리</NavTitle>
            </TitleContainer>
            <ChevronIcon source={chevronRightIcon} />
          </NavContainer>
        </TouchableOpacity>
      </SelectContainer>
    </Container>
  </SafeAreaView>
);
