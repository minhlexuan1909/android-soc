import React from 'react';
import {Text, View} from 'react-native';
import {useSelector} from 'react-redux';

function Dev(): JSX.Element {
  const store = useSelector(state => state);

  return (
    <View>
      <Text>AnhLH</Text>
    </View>
  );
}

export default Dev;
