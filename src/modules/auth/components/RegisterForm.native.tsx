import React, {useState, useEffect} from 'react';
import {ScrollView, Image, Text, Pressable, Alert} from 'react-native';
import {style} from '../assets/css/loginFormStyle';
import {TextInput} from 'react-native-gesture-handler';
import {
  DEFAULT_RIPPLE_COLOR,
  PillButton,
  commonStyle,
  handleChangeFormInput,
} from '../../base';
import {useDispatch, useSelector} from 'react-redux';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../app/androidStackType';
import {useNavigation} from '@react-navigation/native';
import {
  registerPhone,
  setIsRegisterPhone,
  setIsRegisterPhoneSuccess,
  setRegisterPhoneErrorMessage,
} from '../redux/actions';
import {TAuthState} from '../utils/types';
import {LoadingView} from '../../base';

type NavProps = NativeStackScreenProps<RootStackParamList>;

const RegisterForm = () => {
  const navigation = useNavigation<NavProps['navigation']>();

  const dispatch = useDispatch();

  const {registerPhoneErrorMessage, isRegisterPhone, isRegisterPhoneSuccess} =
    useSelector((state: {auth: TAuthState}) => state.auth);

  const [registerData, setRegisterData] = useState<any>({
    name: '',
    phone: '',
    password: '',
    confirmPassword: '',
  });

  const handleRegister = () => {
    if (!registerData.phone) {
      Alert.alert('Phone number is required!');
      return;
    }
    if (!registerData.password || !registerData.confirmPassword) {
      Alert.alert('Password and confirm password are required!');
      return;
    }
    if (registerData.password !== registerData.confirmPassword) {
      Alert.alert('Password and confirm password must be the same!');
      return;
    }
    dispatch(
      registerPhone({
        name: registerData.name,
        phone: registerData.phone,
        password: registerData.password,
      }),
    );
  };

  useEffect(() => {
    if (registerPhoneErrorMessage) {
      Alert.alert('', registerPhoneErrorMessage, [
        {
          text: 'OK',
          onPress: () => {
            dispatch(setRegisterPhoneErrorMessage(''));
          },
        },
      ]);
    }
  }, [registerPhoneErrorMessage]);

  useEffect(() => {
    if (isRegisterPhoneSuccess) {
      dispatch(setIsRegisterPhoneSuccess(false));
      navigation.navigate('PhoneOtp', {
        phone: registerData.phone,
        email: registerData.email,
      });
    }
  }, [isRegisterPhoneSuccess]);

  const handleBackToLogin = () => {
    dispatch(setRegisterPhoneErrorMessage(''));
    dispatch(setIsRegisterPhone(false));
    navigation.navigate('Login');
  };

  return (
    <ScrollView
      automaticallyAdjustKeyboardInsets={true}
      contentContainerStyle={style.loginForm}>
      {isRegisterPhone && <LoadingView />}
      <Image
        style={style.loginLogo}
        source={require('../../base/assets/images/main-logo.jpg')}
      />
      <TextInput
        style={[commonStyle.pill, style.loginInput]}
        placeholder="Phone number"
        onChangeText={(text: string) => {
          handleChangeFormInput('phone', text, setRegisterData);
        }}
      />
      <TextInput
        style={[commonStyle.pill, style.loginInput]}
        placeholder="Full name"
        onChangeText={(text: string) => {
          handleChangeFormInput('name', text, setRegisterData);
        }}
      />
      <TextInput
        style={[commonStyle.pill, style.loginInput]}
        placeholder="Password"
        secureTextEntry={true}
        onChangeText={(text: string) => {
          handleChangeFormInput('password', text, setRegisterData);
        }}
      />
      <TextInput
        style={[commonStyle.pill, style.loginInput]}
        placeholder="Password"
        secureTextEntry={true}
        onChangeText={(text: string) => {
          handleChangeFormInput('confirmPassword', text, setRegisterData);
        }}
      />
      <PillButton
        android_ripple={{color: DEFAULT_RIPPLE_COLOR}}
        btnStyle={[style.loginMainBtn]}
        onPress={handleRegister}>
        <Text style={commonStyle.primaryBtnText}>REGISTER</Text>
      </PillButton>
      <Pressable onPress={handleBackToLogin}>
        <Text style={style.createAccountText}>Back to login</Text>
      </Pressable>
    </ScrollView>
  );
};

export default RegisterForm;
