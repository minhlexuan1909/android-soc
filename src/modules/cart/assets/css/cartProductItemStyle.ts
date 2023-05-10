import {StyleSheet} from 'react-native';
import {BACKGROUND_GREY_COLOR, MAIN_COLOR} from '../../../base';
export const style = StyleSheet.create({
  cartProductItemWrapper: {
    backgroundColor: '#fff',
    display: 'flex',
    flexDirection: 'row',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: BACKGROUND_GREY_COLOR,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  cartProductRightWrapper: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
  },
  cartProductItemImage: {
    width: 70,
    height: 70,
    marginRight: 15,
  },
  cartProductInfoWrapper: {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
  },
  cartProductActionWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  cartProductTitleText: {
    fontSize: 12,
  },
  cartProductPriceText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: MAIN_COLOR,
  },
  cartAdjustAmountBtn: {
    textAlign: 'center',
    borderWidth: 2,
    borderColor: MAIN_COLOR,
    width: 20,
    height: 20,
    borderRadius: 10,
    fontWeight: 'bold',
    color: MAIN_COLOR,
  },
  cartProductAmount: {
    color: MAIN_COLOR,
    marginHorizontal: 20,
  },
});
