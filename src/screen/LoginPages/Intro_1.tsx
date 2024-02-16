import {useEffect, useRef} from 'react';
import {Animated} from 'react-native';
import styled from 'styled-components/native';

// 피그마 아트보드 1

const IntroSection = styled.SafeAreaView`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const IntroText = styled.Text`
  font-family: 'Pretendard-Regular';
  font-size: 42px;
  line-height: 55.86px;
  color: #000;
`;

export const CopyRight = styled.Text`
  position: absolute;
  bottom: 32px;
  opacity: 0.4;
  font-size: 11px;
  color: #000;
  align-self: center;
`;

const Intro1 = ({navigation: {navigate}}) => {
  const currentYear = new Date().getFullYear();
  const redirectViewOpacity = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    // 버튼 애니메이션 설정
    Animated.timing(redirectViewOpacity, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true,
    }).start(() => {
      navigate('Intro2');
    });
  }, []);

  return (
    <IntroSection>
      <IntroText>새로운 일정</IntroText>
      <IntroText>새로운 오늘</IntroText>
      <Animated.View />
      <CopyRight>© {currentYear} Getch Corp.</CopyRight>
    </IntroSection>
  );
};
export default Intro1;
