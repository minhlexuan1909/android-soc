import React from 'react';
import {View, Text} from 'react-native';
import {style} from '../assets/css/verticalProductListStyle';
import ProductItem from './ProductItem.native';

type Props = {
  chosenCategory?: string;
};

const VerticalProductList = (props: Props) => {
  const {chosenCategory} = props;
  return (
    <View style={style.productListWrapper}>
      {chosenCategory && (
        <Text style={style.choosenCategory}>{chosenCategory}</Text>
      )}
      <View style={style.mainProductListWrapper}>
        <ProductItem
          title={'Nồi chiên không dầu 9L SUNHOUSE SUNHOUSE SUNHOUSE SUNHOUSE'}
          price={'1200.00'}
        />
        <ProductItem
          title={'Nồi chiên không dầu 9L SUNHOUSE SUNHOUSE SUNHOUSE SUNHOUSE'}
          price={'1200.00'}
        />
        <ProductItem
          title={'Nồi chiên không dầu 9L SUNHOUSE SUNHOUSE SUNHOUSE SUNHOUSE'}
          price={'1200.00'}
        />
        <ProductItem
          title={'Nồi chiên không dầu 9L SUNHOUSE SUNHOUSE SUNHOUSE SUNHOUSE'}
          price={'1200.00'}
        />
        <ProductItem
          title={'Nồi chiên không dầu 9L SUNHOUSE SUNHOUSE SUNHOUSE SUNHOUSE'}
          price={'1200.00'}
        />
        <ProductItem
          title={'Nồi chiên không dầu 9L SUNHOUSE SUNHOUSE SUNHOUSE SUNHOUSE'}
          price={'1200.00'}
        />
        <ProductItem
          title={'Nồi chiên không dầu 9L SUNHOUSE SUNHOUSE SUNHOUSE SUNHOUSE'}
          price={'1200.00'}
        />
      </View>
    </View>
  );
};

export default React.memo(VerticalProductList);
