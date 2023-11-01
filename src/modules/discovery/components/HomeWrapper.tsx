import {useIsFocused} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {ScrollView, StatusBar, View} from 'react-native';

import VerticalProductList from '../../base/components/VerticalProductList.native';
import BannerCarousel from './BannerCarousel';
import CategoryFilter from './CategoryFilter.native';
import {ViewWithStatusBar} from '../../base';
import {useDispatch, useSelector} from 'react-redux';
import {getProducts} from '../redux/actions';

const HomeWrapper = () => {
  const dispatch = useDispatch();

  const isFocused = useIsFocused();

  const {products} = useSelector((state: any) => state.discovery);

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  return (
    <ScrollView>
      <ViewWithStatusBar
        statusBarColor="#f8f9fD"
        statusBarContent="dark-content">
        <BannerCarousel />
        <View>
          {/* <CategoryFilter /> */}
          {products.length !== 0 && (
            <VerticalProductList productList={products} />
          )}
        </View>
      </ViewWithStatusBar>
    </ScrollView>
  );
};

export default React.memo(HomeWrapper);
