import React from 'react';
import {View, Text} from 'react-native';
import {style} from '../assets/css/verticalProductListStyle';
import ProductItem from './ProductItem.native';

type Props = {
  chosenCategory?: string;
  productList?: any;
};

const VerticalProductList = (props: Props) => {
  const {chosenCategory, productList = []} = props;

  return (
    <View style={style.productListWrapper}>
      {chosenCategory && (
        <Text style={style.choosenCategory}>{chosenCategory}</Text>
      )}
      <View style={style.mainProductListWrapper}>
        {productList?.map((product: any) => (
          <ProductItem
            key={product?.id}
            id={product?.id}
            title={product?.title}
            price={product?.price}
            image={product?.image ? product?.image : ''}
          />
        ))}
      </View>
    </View>
  );
};

export default React.memo(VerticalProductList);
