import {StyleSheet} from 'react-native';
import {GREY_COLOR_6, MAIN_COLOR} from '../../../base';

export const FACEBOOK_COLOR = '#3b5998';

export const style = StyleSheet.create({
  loginForm: {
    position: 'relative',
    backgroundColor: '#fff',
    display: 'flex',
    flexGrow: 1,
    flexDirection: 'column',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  loginLogo: {
    width: 120,
    height: 100,
    marginBottom: 50,
  },
  loginInput: {
    borderWidth: 1,
    borderColor: MAIN_COLOR,
    marginBottom: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
    width: '100%',
    fontSize: 16,
  },
  loginMainBtn: {
    marginTop: 20,
    marginBottom: 10,
  },
  loginStrikeThroughText: {
    padding: 10,
    marginBottom: 20,
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
  },
  loginOrText: {
    textAlign: 'center',
    flex: 1,
    color: GREY_COLOR_6,
    fontSize: 16,
  },
  loginStrikeLine: {
    backgroundColor: GREY_COLOR_6,
    height: 2,
    width: 150,
  },
  loginFacebookText: {},
  loginFacebookBtn: {
    backgroundColor: FACEBOOK_COLOR,
    marginBottom: 20,
  },
  loginFacebookIcon: {
    top: 2,
    marginRight: 10,
  },
  loginGoogleBtn: {
    backgroundColor: '#fff',
  },
  loginGoogleText: {
    color: '#000',
  },
  createAccountText: {
    textDecorationLine: 'underline',
    marginBottom: 15,
  },
});
