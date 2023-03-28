import React from 'react';
import {View, Button} from 'react-native';

function LoginForm(): JSX.Element {
  const handleLogin = () => {
    console.log('handleLogin');
  };

  return (
    <View>
      <Button onPress={handleLogin} title="Press Me" color="#841584" />
    </View>
  );
}

export default LoginForm;
