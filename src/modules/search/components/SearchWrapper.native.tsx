import {useIsFocused} from '@react-navigation/native';
import React from 'react';
import {StatusBar, View} from 'react-native';

import SearchHeader from './SearchHeader.native';
import SearchProduct from './SearchProduct.native';
import {LoadingView, ViewWithStatusBar} from '../../base';
import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {setSearchProducts} from '../redux/actions';
import {TSearchState} from '../utils';

const SearchWrapper = () => {
  const dispatch = useDispatch();
  const isFocused = useIsFocused();

  const {isSearching} = useSelector(
    (state: {search: TSearchState}) => state.search,
  );

  useEffect(() => {
    return () => {
      dispatch(setSearchProducts([]));
    };
  }, []);

  return (
    <ViewWithStatusBar>
      {isSearching && <LoadingView />}
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
