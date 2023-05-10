import React from 'react';
import {View} from 'react-native';
import {ViewWithStatusBar} from '../../base';
import CategoryWrapper from '../components/CategoryWrapper.native';

const CategoryPage = () => {
  return (
    <ViewWithStatusBar>
      <CategoryWrapper />
    </ViewWithStatusBar>
  );
};

export default CategoryPage;
