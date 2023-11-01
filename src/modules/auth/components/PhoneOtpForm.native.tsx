import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import {
  DEFAULT_RIPPLE_COLOR,
  LoadingView,
  MAIN_COLOR,
  PillButton,
  commonStyle,
} from '../../base';
import {style} from '../assets/css/loginFormStyle';
// @ts-ignore
import OTPTextInput from 'react-native-otp-textinput';
import {useNavigation, useRoute} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../app/androidStackType';
import {useDispatch, useSelector} from 'react-redux';
import {TAuthState} from '../utils/types';
import {confirmPhoneOtp, getPhoneOtp, setIsConfirmPhoneSuccess} from '../redux/actions';

type NavProps = NativeStackScreenProps<RootStackParamList>;

const PhoneOtpForm = () => {
  const navigation = useNavigation<NavProps['navigation']>();

  const route = useRoute();
  const {phone} = route.params as any;

  const dispatch = useDispatch();

  const {isConfirmPhone, isConfirmPhoneSuccess} = useSelector(
    (state: {auth: TAuthState}) => state.auth,
  );
  const [otp, setOtp] = useState('');

  const handleChangeOtp = (text: string) => {
    setOtp(text);
  };

  const handleConfirmOtp = () => {
    dispatch(confirmPhoneOtp({phone, otp}));
  };

  useEffect(() => {
    dispatch(getPhoneOtp({phone}));
  }, [phone]);

  useEffect(() => {
    if (isConfirmPhoneSuccess) {
      dispatch(setIsConfirmPhoneSuccess(false));
      navigation.navigate('Login');
    }
  }, [isConfirmPhoneSuccess]);

  return (
    <View style={style.loginForm}>
      {isConfirmPhone && <LoadingView />}
      <View
        style={{
          marginTop: 150,
          marginBottom: 50,
        }}>
        <OTPTextInput
          inputCount={6}
          tintColor={MAIN_COLOR}
          handleTextChange={handleChangeOtp}
        />
      </View>
      <PillButton
        android_ripple={{color: DEFAULT_RIPPLE_COLOR}}
        btnStyle={[style.loginMainBtn]}
        onPress={handleConfirmOtp}>
        <Text style={commonStyle.primaryBtnText}>CONFIRM OTP</Text>
      </PillButton>
    </View>
  );
};

export default PhoneOtpForm;
