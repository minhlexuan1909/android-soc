import React from 'react';
import LoginForm from '../components/LoginForm.native';
import {Button, View} from 'react-native';

const LoginPage = ({navigation}) => {
  console.log('Hi');
  return <LoginForm navigation={navigation} />;
};

export default LoginPage;
