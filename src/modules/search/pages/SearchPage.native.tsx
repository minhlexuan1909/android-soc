import React from 'react';
import SearchWrapper from '../../search/components/SearchWrapper.native';
import {View} from 'react-native';

const SearchPage = () => {
  return (
    <View style={{flexGrow: 1}}>
      <SearchWrapper />
    </View>
  );
};

export default SearchPage;
