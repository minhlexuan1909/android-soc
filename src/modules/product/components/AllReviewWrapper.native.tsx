import React from 'react';
import {View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import StarFilterBtn from './StarFilterBtn.native';
import ProductReviewItem from './ProductReviewItem.native';
import StarFilter from './StarFilter.native';

const AllReviewWrapper = () => {
  return (
    <ScrollView style={{backgroundColor: '#fff'}}>
      <StarFilter />
      <ProductReviewItem name="Minh" star={4} created_at="12-12-2012" />
      <ProductReviewItem name="Minh" star={4} created_at="12-12-2012" />
      <ProductReviewItem name="Minh" star={4} created_at="12-12-2012" />
    </ScrollView>
  );
};

export default AllReviewWrapper;
