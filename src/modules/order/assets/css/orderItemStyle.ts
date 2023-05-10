import {StyleSheet} from 'react-native';
import {GREY_COLOR_6, MAIN_COLOR} from '../../../base';
export const style = StyleSheet.create({
  wrapper: {
    marginTop: 20,
    backgroundColor: '#fff',
    paddingTop: 10,
  },
  orderNumText: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 16,
    paddingLeft: 10,
    marginBottom: 20,
  },
  orderProductWrapper: {
    borderBottomColor: GREY_COLOR_6,
    borderBottomWidth: 1,
  },
  totalPriceWrapper: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    alignItems: 'flex-end',
    // borderBottomColor: GREY_COLOR_6,
    // borderBottomWidth: 1,
  },
  tolalPriceText: {
    color: '#000',
  },
  totalPriceNum: {
    color: MAIN_COLOR,
    fontWeight: 'bold',
  },
});
