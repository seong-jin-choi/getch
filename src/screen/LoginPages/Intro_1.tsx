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

const Intro1 = () => {
  const currentYear = new Date().getFullYear();

  return (
    <IntroSection>
      <IntroText>새로운 일정</IntroText>
      <IntroText>새로운 오늘</IntroText>
      <CopyRight>© {currentYear} Getch Corp.</CopyRight>
    </IntroSection>
  );
};
export default Intro1;
