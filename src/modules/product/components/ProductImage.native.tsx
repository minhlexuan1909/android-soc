import React from 'react';
import {Dimensions, Image} from 'react-native';
import {useSelector} from 'react-redux';
import {TProductState} from '../utils/types';

const ProductImage = () => {
  const {image} = useSelector(
    (state: {product: TProductState}) => state.product.productDetail,
  );

  const windowWidth = Dimensions.get('window').width;

  return (
    <>
      {image ? (
        <Image
          style={{width: windowWidth, height: windowWidth}}
          source={{uri: image}}
        />
      ) : (
        <Image
          style={{width: windowWidth, height: windowWidth}}
          source={require('../../base/assets/images/default-product-image.jpg')}
        />
      )}
    </>
  );
};

export default ProductImage;
