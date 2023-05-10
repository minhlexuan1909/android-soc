import {faCircleNotch} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import React, {useRef, useEffect} from 'react';
import {Animated, Easing} from 'react-native';

const SpinningIcon = ({size = 40, color = '#fff'}) => {
  const spinValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.timing(spinValue, {
        toValue: 1,
        duration: 1000,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
    ).start();
  }, [spinValue]);

  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <Animated.View style={{transform: [{rotate: spin}]}}>
      <FontAwesomeIcon icon={faCircleNotch} size={size} color={color} />
    </Animated.View>
  );
};

export default SpinningIcon;
