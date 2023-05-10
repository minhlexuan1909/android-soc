import {StyleSheet} from 'react-native';
import {GREY_COLOR_6, MAIN_COLOR} from '../../../base';
export const style = StyleSheet.create({
  btnWrapper: {
    width: '20%',
    paddingHorizontal: 5,
  },
  btnInnerWrapper: {
    paddingVertical: 10,
    borderRadius: 3,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: GREY_COLOR_6,
    borderWidth: 1,
    borderColor: GREY_COLOR_6,
  },
  activeBtn: {
    backgroundColor: '#fff',
    color: MAIN_COLOR,
    borderColor: MAIN_COLOR,
  },
  starText: {
    marginRight: 5,
    color: '#000',
  },
});
