import React from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import {style} from '../assets/css/searchProductStyle';
import {VerticalProductList} from '../../base';

const SearchProduct = () => {
  return (
    <ScrollView contentContainerStyle={style.searchProductWrapper}>
      <VerticalProductList />
    </ScrollView>
  );
};

export default SearchProduct;
