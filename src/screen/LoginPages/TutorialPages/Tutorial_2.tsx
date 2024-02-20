import {useWindowDimensions} from 'react-native';
import styled from 'styled-components/native';
import {tutorialAudio, logo} from '../../../images';
import fonts from '../../../fonts';

// 피그마 아트보드 5

interface Iheight {
  height: number;
}

const IntroSection = styled.SafeAreaView`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
`;

const LogoWrap = styled.View`
  margin-top: 6px;
  width: 60px;
  height: 19px;
  align-self: center;
`;

const Logo = styled.Image`
  width: 100%;
  height: 100%;
`;

const TextWrap = styled.View<Iheight>`
  margin-top: ${props => props.height * 0.04926}px;
  height: auto;
  width: 100%;
  /* margin-top: 20px; */
`;

const Title = styled.Text`
  font-family: ${fonts.Medium};
  font-size: 20px;
  line-height: 30px;
  text-align: center;
  color: #000;
`;

const SubTitle = styled.Text`
  font-family: ${fonts.Light};
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  color: #000;
`;

const ImageWrap = styled.View<Iheight>`
  margin-top: ${props => props.height * 0.12315}px;
  width: 100%;
  height: ${props => props.height * 0.415}px;
`;

const TutorialAudio = styled.Image`
  object-fit: contain;
  width: 100%;
  height: 100%;
`;

const BtnWrap = styled.View<Iheight>`
  margin-top: ${props => props.height * 0.024}px;
  margin-left: 20px;
  margin-right: 20px;
  /* width: 100%; */
  /* height: 46px; */
`;

const NextBtn = styled.TouchableOpacity<Iheight>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: ${props => props.height * 0.05665}px;
  border-radius: 8px;
  background-color: #000;
`;

const BtnText = styled.Text`
  font-size: 16px;
  font-family: ${fonts.Medium};
  line-height: 22px;
  color: #fff;
`;

export default ({navigation}) => {
  const height = useWindowDimensions().height;
  return (
    <IntroSection>
      <LogoWrap>
        <Logo source={logo} />
      </LogoWrap>
      <TextWrap height={height}>
        <Title>
          선택 후 청취를 시작하면 CD에 담긴{'\n'}
          일정을 들어볼 수 있어요
        </Title>
      </TextWrap>
      <TextWrap height={height}>
        <SubTitle>
          CD에 담긴 주제는 짧게는 1주일 길게는 한달 동안{'\n'}
          카세트에 넣어 주제에 맞는 일정을 받아볼 수 있어요.
        </SubTitle>
      </TextWrap>
      <ImageWrap height={height}>
        <TutorialAudio source={tutorialAudio} />
      </ImageWrap>
      <BtnWrap height={height}>
        <NextBtn
          onPress={() => navigation.navigate('Tutorial3')}
          height={height}>
          <BtnText>계속</BtnText>
        </NextBtn>
      </BtnWrap>
    </IntroSection>
  );
};
