import React, {useRef} from 'react';
import {TextInput} from 'react-native-gesture-handler';
import {style} from '../assets/css/searchHeaderStyle';
import {View, Pressable, Text, DrawerLayoutAndroid} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faArrowLeft,
  faCaretLeft,
  faSearch,
} from '@fortawesome/free-solid-svg-icons';
import {useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../../app/androidStackType';
import {DrawerScreenProps} from '@react-navigation/drawer';
import {BackButton} from '../../base';

type SearchStackParamsList = {
  Search: undefined;
};

type NavProps = DrawerScreenProps<SearchStackParamsList>;

const SearchHeader = () => {
  const navigation = useNavigation<NavProps['navigation']>();

  const handleBackBtn = () => {
    navigation.goBack();
  };

  const handleSettingsBtn = () => {
    navigation.openDrawer();
  };

  return (
    <View style={style.searchHeaderWrapper}>
      <View style={style.searchWrapper}>
        <TextInput style={style.searchInput} returnKeyType="search" />
        <Pressable style={style.searchBtn}>
          <FontAwesomeIcon icon={faSearch} color="#fff" />
        </Pressable>
      </View>
      <View style={style.searchSettingWrapper}>
        <Pressable style={style.searchSettingBtn} onPress={handleSettingsBtn}>
          <FontAwesomeIcon icon={faCaretLeft} />
          <Text style={style.searchSettingText}>Settings</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default SearchHeader;
