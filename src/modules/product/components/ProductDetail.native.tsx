import React from 'react';
import {View, Text} from 'react-native';
import ShowMoreText from '../../base/components/ShowMoreText.native';
import {style} from '../assets/css/productDetailStyle';

const quantity = 5;

const ProductDetail = () => {
  return (
    <View style={style.productDetailWrapper}>
      <Text numberOfLines={1} style={style.productName}>
        Ipad Pro
      </Text>
      <Text style={style.quantityText}>Quantity: {quantity}</Text>
      <ShowMoreText
        maxLine={100}
        text={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae hic pariatur cum animi accusantium. Architecto dicta enim quisquam unde accusantium amet excepturi, doloremque, sunt possimus ea quaerat! Consequuntur, natus ipsam?
      Hic et nobis velit rerum, recusandae nisi, exercitationem dicta corporis quibusdam laudantium possimus, impedit voluptates tempora porro! Vero adipisci suscipit, enim expedita ex omnis excepturi, natus ullam impedit laborum nostrum?
      Est animi tempore debitis laudantium, similique quae amet corporis, atque, natus qui impedit excepturi at harum ullam quaerat dolor repellat sapiente! Debitis, voluptate autem. Ex enim culpa et repellendus. Laudantium?
      Error pariatur incidunt, odio quis eos earum ratione autem beatae, sapiente, quisquam minus sed quidem deserunt sint mollitia temporibus ut laborum. Itaque quam laboriosam numquam deleniti similique iste, alias quidem.
      Optio minima quibusdam impedit at et, quis dolorem tenetur nesciunt in iste consequuntur blanditiis aliquam commodi quasi, nulla ut vitae debitis, temporibus soluta culpa itaque. Corporis reprehenderit aliquam quae deleniti?`}
      />
    </View>
  );
};

export default ProductDetail;
