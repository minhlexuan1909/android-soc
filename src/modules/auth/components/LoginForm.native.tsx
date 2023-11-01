import React, {useEffect, useState} from 'react';
import {
  View,
  Button,
  Image,
  Pressable,
  Text,
  TextInput,
  ScrollView,
} from 'react-native';
import {FACEBOOK_COLOR, style} from '../assets/css/loginFormStyle';
import {
  DEFAULT_RIPPLE_COLOR,
  PillButton,
  commonStyle,
  handleChangeFormInput,
} from '../../base';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faFacebookF, faGoogle} from '@fortawesome/free-brands-svg-icons';
import {useNavigation} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../app/androidStackType';
import {useDispatch, useSelector} from 'react-redux';
import {TAuthState, TLoginRequest} from '../utils/types';
import {
  login,
  registerGoogle,
  registerPhone,
  setIsRegisterGoogleSuccess,
  setIsUpdatePhone,
  setLoginErrorMessage,
} from '../redux/actions';
import {LoadingView} from '../../base';
import {Alert} from 'react-native';

import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

GoogleSignin.configure({
  webClientId:
    '823798145710-dllb888use9q8pc5m0ol0gke0p6t37of.apps.googleusercontent.com',
});

type NavProps = NativeStackScreenProps<RootStackParamList>;

function LoginForm(): JSX.Element {
  const navigation = useNavigation<NavProps['navigation']>();

  const dispatch = useDispatch();
  const {
    accessToken,
    isLogin,
    loginErrorCode,
    loginErrorMessage,
    isRegisterGoogleSuccess,
  } = useSelector((state: {auth: TAuthState}) => state.auth);

  const [email, setEmail] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [loginData, setLoginData] = useState<TLoginRequest>({
    phone: '',
    password: '',
  });

  const handleLogin = () => {
    dispatch(setLoginErrorMessage(''));
    dispatch(login(loginData));
  };

  const handleRegisterText = () => {
    navigation.navigate('Register');
  };

  useEffect(() => {
    console.log('loginErrorMessage', loginErrorMessage);
    console.log('loginErrorCode', loginErrorCode);
    if (
      loginErrorMessage === 'Email is not registered' &&
      loginErrorCode === 401
    ) {
      dispatch(
        registerGoogle({
          email,
          name,
        }),
      );
    } else {
      if (loginErrorMessage) {
        Alert.alert('', loginErrorMessage, [
          {
            text: 'OK',
            onPress: () => {
              if (loginErrorCode === 400) {
                navigation.navigate('UpdatePhone', {email});
              } else if (
                loginErrorCode === 403 &&
                loginErrorMessage === 'User phone number is not verified'
              ) {
                navigation.navigate('UpdatePhone', {email});
              }
            },
          },
        ]);
      }
    }

    return () => {
      dispatch(setLoginErrorMessage(''));
    };
  }, [loginErrorCode, loginErrorMessage]);

  // dispatch(setIsUpdatePhone(false));

  async function onGoogleButtonPress() {
    try {
      // Repick account
      await GoogleSignin.signOut();
      // Check if your device supports Google Play
      await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});
      // Get the users ID token
      const userInfo = await GoogleSignin.signIn();
      // Create a Google credential with the token
      // const googleCredential = auth.GoogleAuthProvider.credential(
      //   userInfo?.idToken,
      // );

      // Sign-in the user with the credential
      // return auth().signInWithCredential(googleCredential);
      if (userInfo?.user.email && userInfo?.user.name) {
        dispatch(login({email: userInfo?.user.email}));
        setEmail(userInfo?.user.email);
        setName(userInfo?.user.name);
      }
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

  async function onGoogleButtonSignOutPress() {
    try {
      await GoogleSignin.signOut();
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    if (accessToken) {
      navigation.navigate('Blank');
    }
  }, [accessToken]);

  useEffect(() => {
    if (isRegisterGoogleSuccess) {
      dispatch(setIsRegisterGoogleSuccess(false));
      navigation.navigate('UpdatePhone', {
        email,
      });
    }
  }, [isRegisterGoogleSuccess]);

  return (
    <ScrollView
      automaticallyAdjustKeyboardInsets={true}
      contentContainerStyle={style.loginForm}>
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
        android_ripple={{color: DEFAULT_RIPPLE_COLOR}}
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
        android_ripple={{color: DEFAULT_RIPPLE_COLOR}}
        btnStyle={[style.loginGoogleBtn]}
        onPress={() =>
          onGoogleButtonPress().then(() =>
            console.log('Signed in with Google!'),
          )
        }>
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
      <PillButton
        android_ripple={{color: DEFAULT_RIPPLE_COLOR}}
        btnStyle={[style.loginGoogleBtn]}
        onPress={() =>
          onGoogleButtonSignOutPress().then(() =>
            console.log('Signed out with Google!'),
          )
        }>
        <Text style={[commonStyle.primaryBtnText, style.loginGoogleText]}>
          <View>
            <FontAwesomeIcon
              style={style.loginFacebookIcon}
              color="#000"
              icon={faGoogle}
            />
          </View>
          Sign out with Google
        </Text>
      </PillButton>
    </ScrollView>
  );
}

export default LoginForm;
