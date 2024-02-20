import styled from 'styled-components/native';
import {logo, guidePhone} from '../../images';
import fonts from '../../fonts';
import {
  Image,
  ImageSourcePropType,
  View,
  useWindowDimensions,
} from 'react-native';

// 피그마 아트보드 6

interface IImageWrap {
  width: number;
  height: number;
}
interface Iheight {
  height: number;
}

const IntroSection = styled.SafeAreaView`
  position: relative;
  height: 100%;
  width: 100%;
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

const ImageWrap = styled.View<IImageWrap>`
  /* margin-top: ${props => props.height * 0.098522}px; */
  /* margin-left: ${props => props.width * 0.096}px; */
  /* margin-top: 80px; */
  /* margin-left: 36px; */
  width: 300px;
  margin: 80px auto 0;
`;

const GuidePhone = styled.Image`
  object-fit: cover;
  /* width: 100%; */
  /* height: 100%; */
`;

const Wrap = styled.View<Iheight>`
  position: absolute;
  z-index: 1;
  width: 100%;
  height: ${props => props.height * 0.1182266}px;
  bottom: 0;
  background-color: #f7f7f7;
`;

const BtnWrap = styled.View<Iheight>`
  margin-top: ${props => props.height * 0.024}px;
  margin-left: 20px;
  margin-right: 20px;
`;

const NextBtn = styled.TouchableOpacity<Iheight>`
  display: flex;
  justify-content: center;
  align-items: center;
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

// TODO. 컨펌 후, ImageWrap가 스크롤 될 수 있도록 추후 수정
// TODO. 계속 버튼의 경로 수정
export default function Guide_3({navigation}) {
  const width = useWindowDimensions().width; //same Dimensions.get('window').width
  const height = useWindowDimensions().height;

  console.log(width, height);

  return (
    <IntroSection>
      <LogoWrap>
        <Logo source={logo} />
      </LogoWrap>
      <TextWrap height={height}>
        <Title>
          일정은 하루에 한번 씩 Getch에서{'\n'}
          확인해보실 수 있어요
        </Title>
      </TextWrap>
      <TextWrap height={height}>
        <SubTitle>
          CD에 담긴 주제는 짧게는 1주일 길게는 한달 동안{'\n'}
          카세트에 넣어 주제에 맞는 일정을 받아볼 수 있어요.
        </SubTitle>
      </TextWrap>
      <ImageWrap width={width} height={height}>
        <GuidePhone source={guidePhone} />
      </ImageWrap>
      <Wrap height={height}>
        <BtnWrap height={height}>
          <NextBtn
            onPress={() => navigation.navigate('Guide3')}
            height={height}>
            <BtnText>계속</BtnText>
          </NextBtn>
        </BtnWrap>
      </Wrap>
    </IntroSection>
  );
}
