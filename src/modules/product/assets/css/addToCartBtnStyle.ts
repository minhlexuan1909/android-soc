import {StyleSheet} from 'react-native';
import {MAIN_COLOR} from '../../../base';
export const style = StyleSheet.create({
  btnWrapper: {
    position: 'absolute',
    bottom: 10,
    height: 40,
    borderRadius: 5,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: MAIN_COLOR,
  },
  btnText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 15,
  },
});
