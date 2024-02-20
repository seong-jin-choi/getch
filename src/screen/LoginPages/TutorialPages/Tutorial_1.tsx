import styled from 'styled-components/native';
import fonts from '../../../fonts';
import {ImageSourcePropType, useWindowDimensions} from 'react-native';
import {
  coffee,
  eat,
  logo,
  morning,
  read,
  running,
  travel,
} from '../../../images';
import Carousel from 'react-native-snap-carousel';

// 피그마 아트보드 4
// TODO. 스와이퍼 캐러셀 부분의 안드로이드 동작 체크

interface Iheight {
  height: number;
}

const IntroSection = styled.SafeAreaView`
  width: 100%;
  height: 100%;
  position: relative;
  flex-direction: column;
  background-color: #f7f7f7;
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
  margin-top: ${props => props.height * 0.04}px;
  width: 100%;
  height: auto;
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
  margin-top: ${props => props.height * 0.21899}px;
  width: 100%;
  height: ${props => props.height * 0.24010554}px;
`;

const CDWrap = styled.View``;

const Cd = styled.Image`
  object-fit: contain;
  width: 100%;
  height: 100%;
`;

const BtnWrap = styled.View<Iheight>`
  margin-top: ${props => props.height * 0.13}px;
  margin-left: 20px;
  margin-right: 20px;
  height: auto;
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

export default ({navigation}) => {
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
            navigation.navigate('Tutorial2');
          }}>
          <BtnText>계속</BtnText>
        </NextBtn>
      </BtnWrap>
    </IntroSection>
  );
};
