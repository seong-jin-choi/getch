import styled from 'styled-components/native';
import {logo, coffee, eat, morning, read, running, travel} from '../../images';
import fonts from '../../fonts';
import {
  Image,
  ImageSourcePropType,
  View,
  useWindowDimensions,
} from 'react-native';
import Carousel from 'react-native-snap-carousel';

// 피그마 아트보드 4

interface Iheight {
  height: number;
}

const IntroSection = styled.SafeAreaView`
  width: 100%;
  height: 100%;
  position: relative;
  flex-direction: column;
  justify-content: space-between;
  background-color: #f7f7f7;
  /* background: red; */
`;

const LogoWrap = styled.View`
  margin-top: 6px;
  width: 60px;
  height: 19px;
  align-self: center;
  /* background: pink; */
`;

const Logo = styled.Image`
  width: 100%;
  height: 100%;
`;

const TextWrap = styled.View<Iheight>`
  margin-top: ${props => props.height * 0.04}px;
  width: 100%;
  height: auto;
  /* background: yellow; */
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

const CarouselWrap = styled.View<Iheight>`
  margin-top: ${props => props.height * 0.2}px;
  width: 100%;
  height: 182px;
  /* background: blue; */
`;

const CDWrap = styled.View`
  width: 182px;
  height: 182px;
`;

const Cd = styled.Image`
  width: 100%;
  height: 100%;
`;

const BtnWrap = styled.View<Iheight>`
  margin-top: ${props => props.height * 0.13}px;
  margin-left: 20px;
  margin-right: 20px;
  margin-bottom: 50px;
  height: auto;

  /* background: aquamarine; */
`;

const NextBtn = styled.TouchableOpacity`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 46px;
  border-radius: 8px;
  background-color: #000;
`;

const BtnText = styled.Text`
  font-size: 16px;
  font-family: ${fonts.Medium};
  line-height: 22px;
  color: #fff;
`;

export default function Guide_1({navigation}) {
  const width = useWindowDimensions().width; //same Dimensions.get('window').width
  const height = useWindowDimensions().height;

  const cdList = [
    {cd: coffee},
    {cd: eat},
    {cd: morning},
    {cd: read},
    {cd: running},
    {cd: travel},
  ];

  const renderItem = ({item}: {item: {cd: ImageSourcePropType}}) => {
    return (
      <CDWrap>
        <Cd source={item.cd} />
      </CDWrap>
    );
  };

  return (
    <IntroSection>
      <LogoWrap>
        <Logo source={logo} />
      </LogoWrap>
      <TextWrap height={height}>
        <Title>
          가장 처음 내 라이프에 넣고 싶은{'\n'}
          주제의 일정을 선택해주세요
        </Title>
      </TextWrap>
      <TextWrap height={height}>
        <SubTitle>
          우리가 음악을 듣는 것 처럼 Getch에서는 다양한{'\n'}
          라이프 일정을 선택 후 들어볼 수 있어요.
        </SubTitle>
      </TextWrap>
      <CarouselWrap height={height}>
        <Carousel
          loop={true}
          // loopClonesPerSide={3}
          autoplay={true}
          autoplayInterval={1500}
          data={cdList}
          renderItem={renderItem}
          sliderWidth={width}
          itemWidth={width * 0.48}
          vertical={false}
        />
      </CarouselWrap>
      <BtnWrap height={height}>
        <NextBtn
          onPress={() => {
            navigation.navigate('Guide2');
          }}>
          <BtnText>계속</BtnText>
        </NextBtn>
      </BtnWrap>
    </IntroSection>
  );
}
