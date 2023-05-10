import React from 'react';
import {View, Text, ScrollView, Image} from 'react-native';
import ProductImage from './ProductImage.native';
import PageStatusBar from '../../base/components/PageStatusBar.native';
import {BackButton} from '../../base';
import ProductDetail from './ProductDetail.native';
import ProductReview from './ProductReview.native';

const ProductWrapper = () => {
  return (
    <ScrollView style={{position: 'relative', marginBottom: 60}}>
      <ProductImage />
      <ProductDetail />
      <ProductReview />
    </ScrollView>
  );
};

export default ProductWrapper;
