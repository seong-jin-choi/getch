import {StyleSheet, SafeAreaView, Text, Image} from 'react-native';
import {logo} from '../../images';

// 피그마 아트보드 2

const Intro2 = () => {
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
      <Image source={logo} />
      <Text style={styles.copyRight}>© 2024 Getch Corp.</Text>
    </SafeAreaView>
  );
};
export default Intro2;
