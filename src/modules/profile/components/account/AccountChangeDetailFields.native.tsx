import React, {useState} from 'react';
import {View, Pressable, Text} from 'react-native';
import AccountChangeDetailItem from './AccountChangeDetailItem.native';
import {style} from '../../assets/css/account/accountChangeDetailFieldsStyle';
import {
  faEnvelope,
  faMobileScreenButton,
  faSignature,
} from '@fortawesome/free-solid-svg-icons';
import {TAccountDetailField, TAccoutDetail, TProfileState} from '../../utils';
import ConditionalButton from '../../../base/components/ConditionalButton.native';
import {useDispatch, useSelector} from 'react-redux';
import {updateMyInfo} from '../../redux/actions';

const CHANGE_DETAIL_FIELDS: {
  valueKey: TAccountDetailField;
  [key: string]: any;
}[] = [
  {
    icon: faSignature,
    placeholder: 'Full name',
    valueKey: 'name',
  },
  {
    icon: faEnvelope,
    placeholder: 'Email',
    valueKey: 'email',
  },
  {
    icon: faMobileScreenButton,
    placeholder: 'Phone number',
    valueKey: 'phone',
  },
];

const AccountChangeDetailFields = () => {
  const dispatch = useDispatch();

  const accountDetails = useSelector(
    (state: {profile: TProfileState}) => state.profile.me,
  );
  const isUpdateMyInfo = useSelector(
    (state: {profile: TProfileState}) => state.profile.isUpdateMyInfo,
  );
  const [accountDetailsForm, setAccountDetailsForm] = useState<TAccoutDetail>({
    name: accountDetails?.name || '',
    email: accountDetails?.email || '',
    phone: accountDetails?.phone || '',
  });

  const isEnableBtn = Object.values(accountDetailsForm).every(
    field => field !== '',
  );

  const handleUpdateAccountDetails = () => {
    console.log('accountDetailsForm', accountDetailsForm);
    dispatch(updateMyInfo(accountDetailsForm));
  };

  return (
    <View style={style.wrapper}>
      {CHANGE_DETAIL_FIELDS.map(field => (
        <AccountChangeDetailItem
          key={field.valueKey}
          icon={field.icon}
          placeholder={field.placeholder}
          value={accountDetailsForm?.[field.valueKey] || ''}
          valueKey={field.valueKey}
          setValue={setAccountDetailsForm}
        />
      ))}
      <ConditionalButton
        isEnable={isEnableBtn}
        isLoading={isUpdateMyInfo}
        style={[style.changeDetailBtn]}
        text="Update"
        onPress={handleUpdateAccountDetails}
      />
    </View>
  );
};

export default AccountChangeDetailFields;
