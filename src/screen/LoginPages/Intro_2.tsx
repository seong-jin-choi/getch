import {Animated, Image} from 'react-native';
import styled from 'styled-components/native';

import {logo} from '../../images';
import {CopyRight} from './Intro_1';
import {useEffect, useRef} from 'react';

// 피그마 아트보드 2

const IntroSection = styled.SafeAreaView`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Intro2 = ({navigation: {navigate}}) => {
  const currentYear = new Date().getFullYear();
  const redirectViewOpacity = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    // 버튼 애니메이션 설정
    Animated.timing(redirectViewOpacity, {
      toValue: 0,
      duration: 1500,
      useNativeDriver: true,
    }).start(() => {
      navigate('Login');
    });
  }, []);

  return (
    <IntroSection>
      <Image source={logo} />
      <Animated.View />
      <CopyRight>© {currentYear} Getch Corp.</CopyRight>
    </IntroSection>
  );
};
export default Intro2;
