import {useIsFocused} from '@react-navigation/native';
import React from 'react';
import {StatusBar, View} from 'react-native';

import SearchHeader from './SearchHeader.native';
import SearchProduct from './SearchProduct.native';
import {ViewWithStatusBar} from '../../base';

const SearchWrapper = () => {
  const isFocused = useIsFocused();
  return (
    <ViewWithStatusBar>
      <View
        style={{
          height: '100%',
        }}>
        {isFocused && (
          <StatusBar backgroundColor="#fff" barStyle="dark-content" />
        )}
        <SearchHeader />
        <SearchProduct />
      </View>
    </ViewWithStatusBar>
  );
};

export default SearchWrapper;
