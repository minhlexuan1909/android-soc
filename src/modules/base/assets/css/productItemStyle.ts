import {StyleSheet} from 'react-native';
import {MAIN_COLOR} from '../../../base';
export const style = StyleSheet.create({
  productItemGapWrapper: {
    width: '50%',
  },
  productItemWrapper: {
    backgroundColor: '#fff',
  },
  productItemImage: {},
  productItemTextWrapper: {
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  productItemTitle: {
    fontSize: 10,
  },
  productItemPrice: {
    fontWeight: 'bold',
    color: MAIN_COLOR,
    marginTop: 10,
  },
});
