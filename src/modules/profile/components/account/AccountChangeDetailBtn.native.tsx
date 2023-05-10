import React from 'react';
import WrapperSettingItem from '../setting/WrapperSettingItem.native';
import {Text} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faChevronRight} from '@fortawesome/free-solid-svg-icons';

const AccountChangeDetailBtn = () => {
  return (
    <WrapperSettingItem linkTo="AccountChangeDetail">
      <Text>Change details</Text>
      <FontAwesomeIcon icon={faChevronRight} />
    </WrapperSettingItem>
  );
};

export default AccountChangeDetailBtn;
