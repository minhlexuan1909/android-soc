import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import {style} from '../assets/css/loginFormStyle';
import {TextInput} from 'react-native-gesture-handler';
import PillButton from '../../base/components/PillButton.native';
import {DEFAULT_RIPPLE_COLOR, LoadingView, commonStyle} from '../../base';
import {useNavigation, useRoute} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {TAuthState} from '../utils/types';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../app/androidStackType';
import {setIsUpdatePhoneSuccess, updatePhone} from '../redux/actions';

type NavProps = NativeStackScreenProps<RootStackParamList>;

const UpdatePhoneForm = () => {
  const navigation = useNavigation<NavProps['navigation']>();

  const dispatch = useDispatch();

  const route = useRoute();
  const {email} = route.params as any;

  const [phone, setPhone] = useState('');
  const {isUpdatePhone, isUpdatePhoneSuccess} = useSelector(
    (state: {auth: TAuthState}) => state.auth,
  );

  const handleUpdatePhone = () => {
    dispatch(updatePhone({email, phone}));
  };

  useEffect(() => {
    if (isUpdatePhoneSuccess) {
      dispatch(setIsUpdatePhoneSuccess(false));
      navigation.navigate('PhoneOtp', {
        email,
        phone,
      });
    }
  }, [isUpdatePhoneSuccess]);

  return (
    <View style={style.loginForm}>
      {isUpdatePhone && <LoadingView />}
      <View
        style={{
          width: '100%',
          marginTop: 180,
          marginBottom: 20,
        }}>
        <TextInput
          style={[commonStyle.pill, style.loginInput]}
          placeholder="Phone number"
          onChangeText={(text: string) => setPhone(text)}
        />
      </View>
      <PillButton
        android_ripple={{color: DEFAULT_RIPPLE_COLOR}}
        btnStyle={[style.loginMainBtn]}
        onPress={handleUpdatePhone}>
        <Text style={commonStyle.primaryBtnText}>UPDATE PHONE</Text>
      </PillButton>
    </View>
  );
};

export default UpdatePhoneForm;
