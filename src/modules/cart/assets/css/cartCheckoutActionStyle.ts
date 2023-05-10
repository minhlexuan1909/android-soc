import {StyleSheet} from 'react-native';
import {MAIN_COLOR} from '../../../base';
export const style = StyleSheet.create({
  cartCheckoutActionWrapper: {
    // height: '100%',
    backgroundColor: 'green',
    display: 'flex',
    flexDirection: 'row',
  },
  cartTotalPriceWrapper: {
    backgroundColor: '#fff',
    display: 'flex',
    flex: 1,
    paddingLeft: 20,
    justifyContent: 'center',
  },
  cartPriceText: {
    fontWeight: 'bold',
    color: MAIN_COLOR,
  },
  cartCheckoutBtn: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
    paddingHorizontal: 20,
    backgroundColor: MAIN_COLOR,
  },
  carCheckoutBtnText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
