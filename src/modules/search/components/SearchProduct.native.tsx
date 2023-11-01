import React from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import {style} from '../assets/css/searchProductStyle';
import {VerticalProductList} from '../../base';
import {useSelector} from 'react-redux';
import {TSearchState} from '../utils';

const SearchProduct = () => {
  const {products} = useSelector(
    (state: {search: TSearchState}) => state.search,
  );

  return (
    <ScrollView contentContainerStyle={style.searchProductWrapper}>
      <VerticalProductList productList={products} />
    </ScrollView>
  );
};

export default SearchProduct;
