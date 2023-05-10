import {StyleSheet} from 'react-native';
import {GREY_COLOR_6, MAIN_COLOR} from './commonStyle';
export const style = StyleSheet.create({
  btn: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnDisabled: {
    backgroundColor: GREY_COLOR_6,
  },
  btnEnabled: {
    backgroundColor: MAIN_COLOR,
  },
  textBtnEnabled: {
    color: '#fff',
  },
});
