import AsyncStorage from '@react-native-async-storage/async-storage';
import {atom} from 'recoil';

interface ILoginState {
  isLoggined: boolean;
  isFirstVisit: boolean;
}
export const LoginState = atom<ILoginState>({
  key: 'LoginState',
  default: {isLoggined: false, isFirstVisit: false},
});

//@TODO: 호출 URL 추후 변경 필수
export const googleLoginURL = `http://192.168.0.89:8000/api/google/callback`;
export const appleLoginURL = `http://192.168.0.89:8000/api/apple/callback`;
export const AuthKey =
  "Xtfy29'{DYBE,s)Pd:8#mb$u;@^3e-G`hjR~gFJ!}*qx+>z_CoDE_sPAcE";
