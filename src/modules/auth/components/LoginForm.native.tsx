import React from 'react';
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
import {commonStyle} from '../../base';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faFacebookF, faGoogle} from '@fortawesome/free-brands-svg-icons';

function LoginForm({navigation}): JSX.Element {
  const handleLogin = () => {
    navigation.navigate('Blank');
  };

  return (
    <ScrollView
      automaticallyAdjustKeyboardInsets={true}
      contentContainerStyle={style.loginForm}>
      <Image
        style={style.loginLogo}
        source={require('../../base/assets/images/main-logo.jpg')}
      />
      <TextInput
        style={[commonStyle.pill, style.loginInput]}
        placeholder="Email"
      />
      <TextInput
        style={[commonStyle.pill, style.loginInput]}
        placeholder="Password"
      />
      <Pressable
        style={[commonStyle.pill, commonStyle.primaryBtn, style.loginMainBtn]}>
        <Text style={commonStyle.primaryBtnText}>SIGN IN</Text>
      </Pressable>
      <View style={style.loginStrikeThroughText}>
        <View style={style.loginStrikeLine}></View>
        <Text style={style.loginOrText}>OR</Text>
        <View style={style.loginStrikeLine}></View>
      </View>
      <Pressable
        style={[
          commonStyle.pill,
          commonStyle.primaryBtn,
          style.loginMainBtn,
          style.loginFacebookBtn,
        ]}>
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
      </Pressable>
      <Pressable
        style={[
          commonStyle.pill,
          commonStyle.primaryBtn,
          style.loginMainBtn,
          style.loginGoogleBtn,
        ]}>
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
      </Pressable>
    </ScrollView>
  );
}

export default LoginForm;
