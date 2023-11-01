import React from 'react';
import {View, Text} from 'react-native';
import ShowMoreText from '../../base/components/ShowMoreText.native';
import {style} from '../assets/css/productDetailStyle';
import {useSelector} from 'react-redux';
import {TProductState} from '../utils/types';

const ProductDetail = () => {
  const {title, quantity, description} = useSelector(
    (state: {product: TProductState}) => state.product.productDetail,
  );
  return (
    <View style={style.productDetailWrapper}>
      <Text numberOfLines={1} style={style.productName}>
        {title}
      </Text>
      <Text style={style.quantityText}>Quantity: {quantity}</Text>
      <ShowMoreText maxLine={100} text={description} />
    </View>
  );
};

export default ProductDetail;
