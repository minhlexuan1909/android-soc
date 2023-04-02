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
import {DEFAULT_RIPPLE_COLOR, PillButton, commonStyle} from '../../base';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faFacebookF, faGoogle} from '@fortawesome/free-brands-svg-icons';
import {useNavigation} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../app/androidStackType';

type NavProps = NativeStackScreenProps<RootStackParamList, 'Blank'>;

function LoginForm(): JSX.Element {
  const navigation = useNavigation<NavProps['navigation']>();
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
      <PillButton
        android_ripple={{color: DEFAULT_RIPPLE_COLOR}}
        btnStyle={[style.loginMainBtn]}
        onPress={handleLogin}>
        <Text style={commonStyle.primaryBtnText}>SIGN IN</Text>
      </PillButton>
      <View style={style.loginStrikeThroughText}>
        <View style={style.loginStrikeLine}></View>
        <Text style={style.loginOrText}>OR</Text>
        <View style={style.loginStrikeLine}></View>
      </View>
      <PillButton
        android_ripple={{color: DEFAULT_RIPPLE_COLOR}}
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
        android_ripple={{color: DEFAULT_RIPPLE_COLOR}}
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
