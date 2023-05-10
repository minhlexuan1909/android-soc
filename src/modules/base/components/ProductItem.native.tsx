import React, {useState} from 'react';
import {View, Image, Text, LayoutChangeEvent, Pressable} from 'react-native';
import {style as productItemStyle} from '../assets/css/productItemStyle';
import {useNavigation} from '@react-navigation/native';
import {NavProps} from '../../app/androidStackType';

type Props = {
  style?: object[];
  image?: string;
  title: string;
  price: string;
};

const gapSize = 5;

const ProductItem = (props: Props) => {
  const {style = [], image, title, price} = props;

  const navigation = useNavigation<NavProps['navigation']>();

  const [imageSize, setImageSize] = useState<number>(0);

  const getImageSize = (e: LayoutChangeEvent) => {
    const {width} = e.nativeEvent.layout;
    setImageSize(width - gapSize * 2);
  };

  const handlePressProduct = () => {
    navigation.navigate('Product', {
      productId: 1,
    });
  };

  return (
    <View
      style={[
        ...style,
        productItemStyle.productItemGapWrapper,
        {padding: gapSize},
      ]}
      onLayout={e => getImageSize(e)}>
      <Pressable
        style={productItemStyle.productItemWrapper}
        onPress={handlePressProduct}>
        <Image
          style={[
            productItemStyle.productItemImage,
            {width: imageSize, height: imageSize},
          ]}
          source={
            image
              ? {uri: image}
              : require('../../base/assets/images/default-product-image.jpg')
          }
        />
        <View style={productItemStyle.productItemTextWrapper}>
          <Text style={productItemStyle.productItemTitle} numberOfLines={2}>
            {title}
          </Text>
          <Text style={productItemStyle.productItemPrice}>{price}</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default ProductItem;
