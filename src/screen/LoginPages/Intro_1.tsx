import {StyleSheet, SafeAreaView, Text} from 'react-native';

// 피그마 아트보드 1

const Intro1 = () => {
  const styles = StyleSheet.create({
    mainContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    mainKoText: {
      fontSize: 42,
      color: '#000',
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
      <Text style={styles.mainKoText}>새로운 일정</Text>
      <Text style={styles.mainKoText}>새로운 오늘</Text>
      <Text style={styles.copyRight}>© 2024 Getch Corp.</Text>
    </SafeAreaView>
  );
};
export default Intro1;
