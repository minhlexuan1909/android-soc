import React from 'react';
import {Text, View} from 'react-native';
import CartListProduct from './CartListProduct.native';
import {style} from '../assets/css/cartWrapperStyle';
import CartCheckoutAction from './CartCheckoutAction.native';
import {BACKGROUND_GREY_COLOR, ViewWithStatusBar} from '../../base';
import ScreenHeader from '../../base/components/ScreenHeader.native';

const CartWrapper = () => {
  return (
    <ViewWithStatusBar statusBarColor={BACKGROUND_GREY_COLOR}>
      <View style={{display: 'flex', height: '100%'}}>
        <ScreenHeader
          title="Shopping Cart"
          showBackButton={false}
          showBoxShadow={false}
          backgroundColor={BACKGROUND_GREY_COLOR}
        />
        <CartListProduct />
        <CartCheckoutAction />
      </View>
    </ViewWithStatusBar>
  );
};

export default CartWrapper;
