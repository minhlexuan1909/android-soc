import React from 'react';
import {View, Button} from 'react-native';

function LoginForm({navigation}): JSX.Element {
  const handleLogin = () => {
    console.log('handleLogin');
    navigation.navigate('Blank');
  };

  return (
    <View>
      <Button onPress={handleLogin} title="Press" color="#841584" />
    </View>
  );
}

export default LoginForm;
