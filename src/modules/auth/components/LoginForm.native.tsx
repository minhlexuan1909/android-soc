import React, { useEffect, useState } from 'react';
import {
  View,
  Button,
  Image,
  Pressable,
  Text,
  TextInput,
  ScrollView,
} from 'react-native';
import { FACEBOOK_COLOR, style } from '../assets/css/loginFormStyle';
import {
  DEFAULT_RIPPLE_COLOR,
  PillButton,
  commonStyle,
  handleChangeFormInput,
} from '../../base';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faFacebookF, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { useNavigation } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../app/androidStackType';
import { useDispatch, useSelector } from 'react-redux';
import { TAuthState, TLoginRequest } from '../utils/types';
import { login, setLoginErrorMessage } from '../redux/actions';
import { LoadingView } from '../../base';
import { Alert } from 'react-native';


import { GoogleSignin, statusCodes  } from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';

GoogleSignin.configure({
  webClientId: '823798145710-redtb86jltnoa0v8jlr2gaqanb0tgdi3.apps.googleusercontent.com',
});

type NavProps = NativeStackScreenProps<RootStackParamList>;

function LoginForm(): JSX.Element {
  const navigation = useNavigation<NavProps['navigation']>();

  const dispatch = useDispatch();
  const { accessToken, isLogin, loginErrorMessage } = useSelector(
    (state: { auth: TAuthState }) => state.auth,
  );

  const [loginData, setLoginData] = useState<TLoginRequest>({
    phone: '',
    password: '',
  });

  const handleLogin = () => {
    dispatch(login(loginData));
  };

  const handleRegisterText = () => {
    navigation.navigate('Register');
  };

  useEffect(() => {
    if (loginErrorMessage) {
      Alert.alert('', loginErrorMessage, [
        {
          text: 'OK',
          onPress: () => {
            dispatch(setLoginErrorMessage(''));
          },
        },
      ]);
    }
  }, [loginErrorMessage]);

  useEffect(() => {
    if (accessToken) {
      navigation.navigate('BottomTab', { screen: 'Home' });
    }
  }, [accessToken]);

  async function onGoogleButtonPress() {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      console.log(userInfo);
    } catch (error: any) {
      console.log(error);
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
      } else {
        // some other error happened
      }
    }
  }

  return (
    <ScrollView
      automaticallyAdjustKeyboardInsets={true}
      contentContainerStyle={style.loginForm}>
      <Button
        title="Google Sign-In"
        onPress={() => onGoogleButtonPress().then(() => console.log('Signed in with Google!'))}
      />
      {isLogin && <LoadingView />}
      <Image
        style={style.loginLogo}
        source={require('../../base/assets/images/main-logo.jpg')}
      />
      <TextInput
        style={[commonStyle.pill, style.loginInput]}
        placeholder="Phone number"
        onChangeText={(text: string) => {
          handleChangeFormInput('phone', text, setLoginData);
        }}
      />
      <TextInput
        style={[commonStyle.pill, style.loginInput]}
        placeholder="Password"
        secureTextEntry={true}
        onChangeText={(text: string) => {
          handleChangeFormInput('password', text, setLoginData);
        }}
      />
      <PillButton
        android_ripple={{ color: DEFAULT_RIPPLE_COLOR }}
        btnStyle={[style.loginMainBtn]}
        onPress={handleLogin}>
        <Text style={commonStyle.primaryBtnText}>SIGN IN</Text>
      </PillButton>
      <Pressable onPress={handleRegisterText}>
        <Text style={style.createAccountText}>
          Don't have account? Create one here
        </Text>
      </Pressable>
      <View style={style.loginStrikeThroughText}>
        <View style={style.loginStrikeLine}></View>
        <Text style={style.loginOrText}>OR</Text>
        <View style={style.loginStrikeLine}></View>
      </View>
      <PillButton
        android_ripple={{ color: DEFAULT_RIPPLE_COLOR }}
        btnStyle={[style.loginFacebookBtn]}>
        <Text style={[commonStyle.primaryBtnText, style.loginFacebookText]}>
          <View>
            <FontAwesomeIcon
              style={style.loginFacebookIcon}
              color="#fff"
              icon={faFacebookF}
            />
          </View>
          Sign in with Facebook
        </Text>
      </PillButton>
      <PillButton
        android_ripple={{ color: DEFAULT_RIPPLE_COLOR }}
        btnStyle={[style.loginGoogleBtn]}>
        <Text style={[commonStyle.primaryBtnText, style.loginGoogleText]}>
          <View>
            <FontAwesomeIcon
              style={style.loginFacebookIcon}
              color="#000"
              icon={faGoogle}
            />
          </View>
          Sign in with Google
        </Text>
      </PillButton>
    </ScrollView>
  );
}

export default LoginForm;
