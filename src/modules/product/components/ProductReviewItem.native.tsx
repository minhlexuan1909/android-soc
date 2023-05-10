import React from 'react';
import {View, Image, Text} from 'react-native';
import {style} from '../assets/css/productReviewItemStyle';
import StarBar from '../../base/components/StarBar.native';
import ShowMoreText from '../../base/components/ShowMoreText.native';

type Props = {
  image?: string | null;
  name: string;
  star: number;
  created_at?: string;
};

const ProductReviewItem = (props: Props) => {
  const {image, name, star, created_at} = props;

  return (
    <View style={style.wrapper}>
      <Image
        style={style.image}
        source={
          image
            ? {uri: image}
            : require('../../base/assets/images/default-product-image.jpg')
        }
      />
      <View style={{flex: 1}}>
        <Text style={style.nameText}>{name}</Text>
        <StarBar star={star} />
        <ShowMoreText
          style={[style.commentText]}
          maxLine={100}
          text={`Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus assumenda pariatur, mollitia commodi voluptatibus ea maiores, ab velit, hic modi autem officiis fugit eaque magnam architecto adipisci aut sed dolorem!
        Voluptate eligendi quisquam repellat laborum tempore temporibus quasi sint. Nisi hic ex est fugit similique quasi culpa incidunt ipsam laborum odio ab beatae, veritatis a iste, ducimus nam. Repudiandae, officia!
        Ex corrupti magni nam ad animi provident culpa eveniet vel. Pariatur quo ipsum ut perspiciatis voluptatem adipisci molestiae soluta, minus nulla eveniet quas omnis distinctio quidem consectetur aperiam nihil. Possimus!s`}
        />
        {created_at && <Text style={style.createdText}>{created_at}</Text>}
      </View>
    </View>
  );
};

export default ProductReviewItem;
