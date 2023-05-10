import React, {useEffect} from 'react';
import {View, Image} from 'react-native';
import {init} from '..';
import {useDispatch, useSelector} from 'react-redux';
import {TAuthState} from '../../auth/utils/types';
import {useNavigation} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../app/androidStackType';
import InitAction from '../redux/InitAction';

type NavProps = NativeStackScreenProps<RootStackParamList>;

const BlankPage = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation<NavProps['navigation']>();

  const accessToken = useSelector(
    (state: {auth: TAuthState}) => state.auth.accessToken,
  );

  useEffect(() => {
    const timeout = setTimeout(() => {
      init(accessToken);
      if (accessToken) {
        console.log('process');
        InitAction.process(dispatch);
      }
      navigation.navigate('Login');
    }, 3000);
    return () => {
      clearTimeout(timeout);
    };
  }, []);
  return (
    <View
      style={{
        backgroundColor: '#fff',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Image
        style={{width: 180, height: 150}}
        source={require('../../base/assets/images/main-logo.jpg')}
      />
    </View>
  );
};

export default BlankPage;
