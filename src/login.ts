import AsyncStorage from '@react-native-async-storage/async-storage';
import {atom} from 'recoil';

export const LoginState = atom<boolean>({
  key: 'LoginState',
  default: false,
});
