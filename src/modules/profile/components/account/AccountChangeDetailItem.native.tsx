import {faEnvelope} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import React from 'react';
import {View} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {style} from '../../assets/css/account/accountChangeDetailItemStyle';
import {IconProp} from '@fortawesome/fontawesome-svg-core';
import {handleChangeFormInput} from '../../../base';

type Props = {
  icon: IconProp;
  placeholder?: string;
  value: string;
  valueKey: string;
  setValue: React.Dispatch<React.SetStateAction<any>>;
};

const AccountChangeDetailItem = (props: Props) => {
  const {icon, placeholder = '', value, valueKey, setValue} = props;

  const handleChangeText = (text: string) => {
    handleChangeFormInput(valueKey, text, setValue);
  };

  return (
    <View style={style.inputWrapper}>
      <FontAwesomeIcon style={style.inputIcon} icon={icon} />
      <TextInput
        value={value}
        style={style.input}
        placeholder={placeholder}
        onChangeText={handleChangeText}
      />
    </View>
  );
};

export default AccountChangeDetailItem;
