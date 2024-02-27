import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import styled from 'styled-components/native';
import fonts from '../../fonts';
import {Divider} from '../MyInfo';

// 피그마 아트보드 18
const Container = styled.View`
  justify-content: 'flex-start';
  align-items: 'center';
  flex: 1;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 40px;
  background-color: #ffffff;
`;

const Header = styled.Text`
  color: #000000;
  padding-left: 6px;
  padding-right: 6px;
  font-family: ${fonts.SemiBold};
  font-size: 20px;
`;

const ListSection = styled.View`
  padding-top: 20px;
  width: 100%;
`;

const CdBoxWrap = styled.View`
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 10px;
  padding-bottom: 10px;
  border-radius: 8px;
`;

const HistoryScroll = styled.ScrollView`
  padding-top: 10px;
`;

const CdBoxHistoryWrap = styled(CdBoxWrap)`
  margin-bottom: 6px;
  gap: 4px;
  background-color: #f7f7f7;
`;

const CdBoxItemWrap = styled(CdBoxWrap)`
  margin-top: 10px;
  border-width: 1px;
  border-color: #000000;
  flex-direction: row;
  justify-content: space-between;
`;

const CdBoxTitle = styled.Text`
  color: #767676;
  font-family: ${fonts.Medium};
  font-size: 16px;
`;
const CdBoxCateogry = styled.Text`
  color: #767676;
  font-family: ${fonts.Light};
  font-size: 11px;
`;

const CdBoxItemCateogry = styled(CdBoxCateogry)`
  color: #000000;
`;
const CdBoxItemTitle = styled(CdBoxTitle)`
  color: #000000;
`;

export default () => (
  <SafeAreaView
    style={{
      flex: 1,
    }}>
    <Container>
      <ListSection style={{paddingBottom: 40}}>
        <Header>청취 중인 CD</Header>
        <CdBoxItemWrap>
          <View style={{gap: 4}}>
            <CdBoxItemCateogry>CD NAME</CdBoxItemCateogry>
            <CdBoxItemTitle>건강한 모닝 루틴</CdBoxItemTitle>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'flex-end'}}>
            <Text
              style={{
                fontSize: 16,
                fontFamily: 'DigitalNumbers-Regular',
                color: 'black',
              }}>
              4
            </Text>
            <Text style={{fontSize: 11, color: 'black'}}> 번트랙</Text>
          </View>
        </CdBoxItemWrap>
        <CdBoxItemWrap>
          <View style={{gap: 4}}>
            <CdBoxItemCateogry>CD NAME</CdBoxItemCateogry>
            <CdBoxItemTitle>건강한 모닝 루틴</CdBoxItemTitle>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'flex-end'}}>
            <Text
              style={{
                fontSize: 16,
                fontFamily: 'DigitalNumbers-Regular',
                color: 'black',
              }}>
              4
            </Text>
            <Text style={{fontSize: 11, color: 'black'}}> 번트랙</Text>
          </View>
        </CdBoxItemWrap>
      </ListSection>
      <Divider style={{width: '100%'}} />
      <ListSection>
        <Header>CD 청취 기록</Header>
        <HistoryScroll>
          <CdBoxHistoryWrap>
            <CdBoxCateogry>CD NAME</CdBoxCateogry>
            <CdBoxTitle>건강한 모닝 루틴</CdBoxTitle>
          </CdBoxHistoryWrap>
          <CdBoxHistoryWrap>
            <CdBoxCateogry>CD NAME</CdBoxCateogry>
            <CdBoxTitle>건강한 모닝 루틴</CdBoxTitle>
          </CdBoxHistoryWrap>
          <CdBoxHistoryWrap>
            <CdBoxCateogry>CD NAME</CdBoxCateogry>
            <CdBoxTitle>건강한 모닝 루틴</CdBoxTitle>
          </CdBoxHistoryWrap>
          <CdBoxHistoryWrap>
            <CdBoxCateogry>CD NAME</CdBoxCateogry>
            <CdBoxTitle>건강한 모닝 루틴</CdBoxTitle>
          </CdBoxHistoryWrap>
        </HistoryScroll>
      </ListSection>
    </Container>
  </SafeAreaView>
);
