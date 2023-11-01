import React, {useEffect} from 'react';
import {View, Pressable, Text, AppState} from 'react-native';
import {style} from '../assets/css/cartCheckoutActionStyle';
import LinearGradient from 'react-native-linear-gradient';

import {NativeModules, NativeEventEmitter} from 'react-native';
import {productData} from '../utils/constants';
import {Api, BOX_SHADOW_COLOR} from '../../base';
import {useDispatch, useSelector} from 'react-redux';
import {createZlpOrderInfo, createZlpOrderInfoSuccess} from '../redux/actions';
import {TCartState} from '../utils/types';
import {DeviceEventEmitter} from 'react-native';
import {apiCreateZlpOrderInfo} from '../redux/services';
import {useIsFocused} from '@react-navigation/native';

// @ts-ignore
const CryptoJS = require('crypto-js');

const {PayZaloBridge} = NativeModules;

const payZaloBridgeEmitter = new NativeEventEmitter(PayZaloBridge);

const totalPrice = 500000;

const CartCheckoutAction = () => {
  const isFocused = useIsFocused();

  const dispatch = useDispatch();

  // const {zptranstoken, isCreateZlpOrderInfoSuccess} = useSelector(
  //   (state: {cart: TCartState}) => state.cart,
  // );
  const zptranstoken = useSelector((state: any) => state?.cart?.zptranstoken);
  const isCreateZlpOrderInfoSuccess = useSelector(
    (state: any) => state?.cart?.isCreateZlpOrderInfoSuccess,
  );

  useEffect(() => {
    const subscription = payZaloBridgeEmitter.addListener(
      'EventPayZalo',
      data => {
        console.log(data);
        if (data.returnCode === '1') {
          alert('Giao dịch thành công!');
        } else {
          alert('Giao dịch thất bại!');
        }
      },
    );
    return () => {
      console.log('unmount');
      subscription.remove();
    };
  }, []);

  const zlpMacHash = (hmacInput: string) => {
    const key1 = 'sdngKKJmqEMzvh5QQcdD2A9XBSKUNaYn';
    let key = CryptoJS.HmacSHA256(hmacInput, key1).toString();

    return key; // 'my message'
  };

  const handleCheckoutBtn = () => {
    const app_id = 2554;
    const app_trans_id = '230510_77';
    const app_user = 'admin';
    const amount = totalPrice;
    const app_time = Date.now();
    const embed_data =
      '{"promotioninfo":"","merchantinfo":"du lieu rieng cua ung dung"}';
    const item = JSON.stringify(productData);

    const hmacInput =
      app_id +
      '|' +
      app_trans_id +
      '|' +
      app_user +
      '|' +
      amount +
      '|' +
      app_time +
      '|' +
      embed_data +
      '|' +
      item;

    const data = {
      app_id,
      app_user,
      app_trans_id,
      app_time,
      amount,
      item,
      description: 'Payment for #1 at STW app',
      embed_data,
      bank_code: '',
      mac: zlpMacHash(hmacInput),
      // callback_url:
      //   'http://ec2-13-114-231-191.ap-northeast-1.compute.amazonaws.com:81/token/',
    };
    apiCreateZlpOrderInfo(data).then(response => {
      dispatch(createZlpOrderInfoSuccess(response));
      console.log(response);
      // const payZP = NativeModules.PayZaloBridge;
      // payZP.payOrder(response.zp_trans_token);
    });

    console.log('checkout ');
  };

  useEffect(() => {
    if (isCreateZlpOrderInfoSuccess) {
      // console.log('event pay');
      // payZaloBridgeEmitter.addListener('EventPayZalo', data => {
      //   console.log(data);
      //   if (data.returnCode === 1) {
      //     alert('Giao dịch thành công!');
      //   } else {
      //     alert('Giao dịch thất bại!');
      //   }
      // });
      const payZP = NativeModules.PayZaloBridge;
      payZP.payOrder(zptranstoken);
    }
  }, [isCreateZlpOrderInfoSuccess]);

  return (
    <>
      <LinearGradient
        start={{x: 1, y: 0}}
        end={{x: 1, y: 1}}
        colors={['#fff', BOX_SHADOW_COLOR]}
        style={{height: 3}}></LinearGradient>
      <View style={style.cartCheckoutActionWrapper}>
        <View style={style.cartTotalPriceWrapper}>
          <Text>
            Total: <Text style={style.cartPriceText}>{totalPrice}</Text>
          </Text>
        </View>
        <Pressable onPress={handleCheckoutBtn} style={style.cartCheckoutBtn}>
          <Text style={style.carCheckoutBtnText}>Checkout</Text>
        </Pressable>
      </View>
    </>
  );
};

export default CartCheckoutAction;
