import React from 'react';
import {View, Image, Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {style} from '../assets/css/categoryItemStyle';

type Props = {
  image: string | null;
  title: string;
};

const CategoryItem = (props: Props) => {
  const {image, title} = props;

  return (
    <View style={style.wrapper}>
      {image ? (
        <Image
          style={{
            width: '100%',
            height: 150,
          }}
          source={{uri: image}}
        />
      ) : (
        <Image
          style={{
            width: '100%',
            height: 150,
          }}
          source={require('../../base/assets/images/default-product-image.jpg')}
        />
      )}

      <View style={style.shadowWrapper}>
        <LinearGradient
          colors={['transparent', 'rgba(0,0,0,0.8)']}
          style={{width: '100%', height: 150}}></LinearGradient>
      </View>
      <Text style={style.titleWrapper}>{title}</Text>
    </View>
  );
};

export default CategoryItem;
