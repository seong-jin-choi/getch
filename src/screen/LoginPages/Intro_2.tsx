import {Image} from 'react-native';
import styled from 'styled-components/native';

import {logo} from '../../images';
import {CopyRight} from './Intro_1';

// 피그마 아트보드 2

const IntroSection = styled.SafeAreaView`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Intro2 = () => {
  const currentYear = new Date().getFullYear();

  return (
    <IntroSection>
      <Image source={logo} />
      <CopyRight>© {currentYear} Getch Corp.</CopyRight>
    </IntroSection>
  );
};
export default Intro2;
