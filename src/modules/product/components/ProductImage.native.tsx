import React from 'react';
import {Dimensions, Image} from 'react-native';

type Props = {
  source?: undefined | null | string;
};

const ProductImage = (props: Props) => {
  const {source} = props;

  const windowWidth = Dimensions.get('window').width;

  return (
    <Image
      // style={style}
      style={{width: windowWidth, height: windowWidth}}
      source={
        source
          ? {uri: source}
          : require('../../base/assets/images/default-product-image.jpg')
      }
    />
  );
};

export default ProductImage;
