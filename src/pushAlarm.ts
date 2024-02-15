import * as Notifications from 'expo-notifications';

Notifications.setNotificationHandler({
  handleNotification: async () => {
    return {
      shouldPlaySound: false, // 알림소리를 설정할 것인가? (ex 카톡은 알림을 받을때 '까똑' 소리가 남)
      shouldSetBadge: false, // 보통 앱 아이콘 오른쪽 위에 있는 '받은 알림 갯수' 뱃지를 부착할 것인가?
      shouldShowAlert: true, // 상단바에 알림을 보여줄 것인가?
    };
  },
});

export async function handleScheduleAlarm() {
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
