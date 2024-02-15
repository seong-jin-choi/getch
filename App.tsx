import { ReactNode} from 'react';
import {Button, SafeAreaView, StatusBar, StyleSheet, View,Image} from 'react-native';
import * as Notifications from 'expo-notifications';
import {NavigationContainer} from '@react-navigation/native';
import TabBar from './src/navigation/Root';
import {Text} from 'react-native';
import logo from "./assets/logo.png"

Notifications.setNotificationHandler({
  handleNotification: async () => {
    return {
      shouldPlaySound: false, // 알림소리를 설정할 것인가? (ex 카톡은 알림을 받을때 '까똑' 소리가 남)
      shouldSetBadge: false, // 보통 앱 아이콘 오른쪽 위에 있는 '받은 알림 갯수' 뱃지를 부착할 것인가?
      shouldShowAlert: true, // 상단바에 알림을 보여줄 것인가?
    };
  },
});

function App(): React.JSX.Element {
  async function handleScheduleAlarm() {
    // 알림 권한요청
    await Notifications.requestPermissionsAsync({
      ios: {
        allowAlert: true,
        allowBadge: true,
        allowSound: true,
        allowAnnouncements: true,
      },
    });
    await Notifications.scheduleNotificationAsync({
      content: {
        title: '똑똑, 할일을 완료하셨나요?',
        body: 'Getch가 추천하는 오늘의 할일을 완료하셨나요?',

        // data Property는 키-값을 전송할 수 있음.
        // 가령 특정 할일을 식별할 id를 첨부해야 할 때 유용함
        data: {todoID: 'ID_KEY'},
      },
      trigger: {seconds: 3},
    });
  }
  const backgroundStyle = {
    backgroundColor: '#F7F7F7',
  };
  const styles = StyleSheet.create({
    container: {backgroundColor: backgroundStyle.backgroundColor, flex: 1},
    text: {
      fontSize: 25,
      fontWeight: '500',
    },
    mainKoText: {
      fontSize: 42,
      color: '#000',
    },
  });
  return (
    <>
      <MainPageWrap>
        {/* 1번째 페이지 */}
        {/* <Text style={styles.mainKoText}>새로운 일정</Text> */}
        {/* <Text style={styles.mainKoText}>새로운 오늘</Text> */}
        {/* 2번째 페이지 */}
        {/* <Image source={logo} /> */}
        {/* 3번째 페이지 */}
      </MainPageWrap>
      {/* <NavigationContainer>
        <SafeAreaView style={styles.container}>
          <StatusBar
            barStyle={'dark-content'}
            backgroundColor={backgroundStyle.backgroundColor}
          />
          <Button title="push" onPress={handleScheduleAlarm} />
          <TabBar />
        </SafeAreaView>
      </NavigationContainer> */}
    </>
  );
}

export default App;

const MainPageWrap = ({children}: {children: ReactNode}) => {
  const styles = StyleSheet.create({
    mainContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    copyRight: {
      position: 'absolute',
      bottom: 32,
      opacity: 0.4,
      fontSize: 11,
      color: '#000',
    },
  });

  return (
    <SafeAreaView style={styles.mainContainer}>
      {children}
      <Text style={styles.copyRight}>© 2024 Getch Corp.</Text>
    </SafeAreaView>
  );
};

const MainPage2 = () => {};
