import {
  Alert,
  FlatList,
  Image,
  Modal,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import styled from 'styled-components/native';
import fonts from '../../../fonts';
import {cdSampleImage, modalBackground} from '../../../images';
import {useState} from 'react';

const Header = styled.Text`
  margin-top: 24px;
  text-align: center;
  font-family: ${fonts.Medium};
  font-size: 20px;
  line-height: 30px;
  color: #000;
`;

const Wrapper = styled.View`
  padding-left: 10px;
  padding-right: 10px;
`;

// 피그마 아트보드 7
interface ICdItem {
  title: string;
  duration: string;
  image: string | any;
}
const CdArray: ICdItem[] = [
  {title: '책 한권 읽기', duration: '1주일', image: cdSampleImage},
  {title: '건강한 모닝 루틴', duration: '1주일', image: cdSampleImage},
  {title: '집밥 만들어 먹기', duration: '1주일', image: cdSampleImage},
  {title: '책 한권 읽기', duration: '1주일', image: cdSampleImage},
  {title: '건강한 모닝 루틴', duration: '1주일', image: cdSampleImage},
  {title: '집밥 만들어 먹기', duration: '1주일', image: cdSampleImage},
  {title: '책 한권 읽기', duration: '1주일', image: cdSampleImage},
  {title: '건강한 모닝 루틴', duration: '1주일', image: cdSampleImage},
  {title: '집밥 만들어 먹기', duration: '1주일', image: cdSampleImage},
  {title: '책 한권 읽기', duration: '1주일', image: cdSampleImage},
  {title: '건강한 모닝 루틴', duration: '1주일', image: cdSampleImage},
  {title: '집밥 만들어 먹기', duration: '1주일', image: cdSampleImage},
];

export default ({navigation}) => {
  const navigateTodos = () => navigation.navigate('Tabs');
  return (
    <SafeAreaView style={{flex: 1}}>
      <Wrapper>
        <Header>
          Getch에서 준비한 라이프 CD 중{'\n'}
          하나를 선택해 주세요
        </Header>
        <FlatList
          style={{paddingVertical: 42}}
          data={CdArray}
          numColumns={2}
          keyExtractor={(item, index) => item.title.toString() + index}
          renderItem={({item}) => <CdItem CD={item} navigate={navigateTodos} />}
        />
      </Wrapper>
    </SafeAreaView>
  );
};

const CdItemWrap = styled.TouchableOpacity`
  flex: 1;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 10px;
  padding-bottom: 44px;
  align-items: center;
  border-radius: 20px;
`;
const CdImage = styled.Image`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;
const ImageView = styled.View`
  width: 140px;
  height: 140px;
`;
const ContentView = styled.View`
  flex: 1;
  margin-top: 4px;
`;
const CdItemTitle = styled.Text`
  text-align: center;
  font-family: ${fonts.Medium};
  font-size: 16px;
  color: #000;
`;
const CdItemDuration = styled.Text`
  text-align: center;
  font-family: ${fonts.Medium};
  font-size: 12px;
  color: #000;
  opacity: 0.6;
`;
const ModalBackground = styled.View`
  background-color: #000000;
  width: 100%;
  height: 100%;
  flex: 1;
  opacity: 0.3;
`;
const ModalContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  position: relative;
`;
const ContentContainer = styled.View`
  position: absolute;
  width: 85%;
  height: 85%;
  justify-content: center;
  align-items: center;
`;
const ModalContentWrap = styled.ImageBackground`
  flex: 1;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;
const ModalTextWrap = styled.View`
  width: 100%;
  height: 100%;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 15px;
  padding-bottom: 17px;
  justify-content: space-between;
`;
const ModalButton = styled.Pressable`
  flex: 1;
  border-radius: 8px;
  height: 38px;
  justify-content: center;
  align-items: center;
`;
const ModalButtonText = styled.Text`
  text-align: center;
  font-family: ${fonts.Medium};
`;
const ModalTitleWrap = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 12px;
  margin-bottom: 12px;
`;
const ModalButtonWrap = styled.View`
  flex-direction: row;
  gap: 11px;
`;
const PretendardMedium = styled.Text`
  font-family: ${fonts.Medium};
`;
const PretendardLight = styled.Text`
  font-family: ${fonts.Light};
`;

const CdItem = ({CD, navigate}: {CD: ICdItem; navigate: () => void}) => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <CdItemWrap onPress={() => setModalVisible(true)}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(true)}>
        <ModalContainer>
          <ModalBackground />
          <ContentContainer>
            <ModalContentWrap
              source={modalBackground}
              imageStyle={{borderRadius: 12}}>
              <Image
                source={CD.image}
                style={{
                  width: '90%',
                  height: '90%',
                  resizeMode: 'contain',
                }}
              />
            </ModalContentWrap>
            <ModalContentWrap
              source={modalBackground}
              imageStyle={{borderRadius: 12, top: -1}}>
              <ModalTextWrap>
                <ModalTitleWrap
                  style={{borderBottomWidth: 1, borderBlockColor: '#E1E1E1'}}>
                  <PretendardMedium style={{fontSize: 24, color: 'black'}}>
                    {CD.title}
                  </PretendardMedium>
                  <PretendardMedium
                    style={{fontSize: 12, color: 'black', opacity: 0.6}}>
                    1개월 분(30트랙)
                  </PretendardMedium>
                </ModalTitleWrap>
                <ScrollView style={{marginBottom: 30, flex: 1}}>
                  <PretendardLight
                    style={{fontSize: 14, lineHeight: 19, color: 'black'}}>
                    꼭 큰 결심과 큰 목적을 달성할 필요는 없습니다.{'\n'}
                    {'\n'}
                    이번 Getch에서 준비한 건강한 모닝 루틴은 작고 사소한 행동의
                    일정들이 쌓여 내 일상을 건강하게 만드는데 도움을 줄 수
                    있도록 제작되었습니다.
                    {'\n'}
                    {'\n'} 작은 행동이 쌓여 큰 결실을 맺는 것 처럼 하루하루
                    Getch와 함께 건강한 모닝 루틴을 만들어보세요!
                  </PretendardLight>
                </ScrollView>
                <ModalButtonWrap>
                  <ModalButton
                    onPress={() => {
                      setModalVisible(false);
                      navigate();
                    }}
                    style={{backgroundColor: 'black'}}>
                    <ModalButtonText style={{color: 'white'}}>
                      CD 청취하기
                    </ModalButtonText>
                  </ModalButton>
                  <ModalButton
                    onPress={() => {
                      setModalVisible(false);
                    }}
                    style={{borderWidth: 1}}>
                    <ModalButtonText style={{color: 'black'}}>
                      닫기
                    </ModalButtonText>
                  </ModalButton>
                </ModalButtonWrap>
              </ModalTextWrap>
            </ModalContentWrap>
          </ContentContainer>
        </ModalContainer>
      </Modal>
      <ImageView>
        <CdImage source={CD.image} />
      </ImageView>
      <ContentView>
        <CdItemTitle>{CD.title}</CdItemTitle>
        <CdItemDuration>{CD.duration}</CdItemDuration>
      </ContentView>
    </CdItemWrap>
  );
};
