import {useIsFocused} from '@react-navigation/native';
import React from 'react';
import {ScrollView, StatusBar, View} from 'react-native';

import VerticalProductList from '../../base/components/VerticalProductList.native';
import BannerCarousel from './BannerCarousel';
import CategoryFilter from './CategoryFilter.native';
import {ViewWithStatusBar} from '../../base';

const HomeWrapper = () => {
  const isFocused = useIsFocused();

  return (
    <ScrollView>
      <ViewWithStatusBar
        statusBarColor="#f8f9fD"
        statusBarContent="dark-content">
        <BannerCarousel />
        <View>
          <CategoryFilter />
          <VerticalProductList />
        </View>
      </ViewWithStatusBar>
    </ScrollView>
  );
};

export default React.memo(HomeWrapper);
