import React from 'react';
import {View} from 'react-native';
import ProductWrapper from '../components/ProductWrapper.native';
import {BackButton} from '../../base';
import {style} from '../assets/css/productPageStyle';
import AddToCartBtn from '../components/AddToCartBtn.native';
import {useRoute} from '@react-navigation/native';
import PageStatusBar from '../../base/components/PageStatusBar.native';

const ProductPage = () => {
  const route = useRoute();
  console.log(route.params);

  return (
    <View style={{flex: 1}}>
      <PageStatusBar translucent animated />
      <BackButton style={[style.backButton]} color={'white'} />
      <ProductWrapper />
      <AddToCartBtn />
    </View>
  );
};

export default ProductPage;
