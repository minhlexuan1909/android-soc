import React from 'react';
import CartProductItem from './CartProductItem.native';
import {Button, FlatList, ScrollView, View, Alert} from 'react-native';
import {Pressable} from 'react-native';
import {Text} from 'react-native';
import {style} from '../assets/css/cartListProductStyle';
import {productData} from '../utils/constants';

const CartListProduct = () => {
  let prevOpenedRow: any;
  let row: Array<any> = [];

  const deleteItem = ({item, index}: any) => {
    Alert.alert('', 'Are you sure you want to delete this item?', [
      {
        text: 'Cancel',
      },
      {
        text: 'OK',
        onPress: () => {},
      },
    ]);
  };

  const renderItem = ({item, index}: any, onClick: any) => {
    const closeRow = (index: number) => {
      if (prevOpenedRow && prevOpenedRow !== row[index]) {
        prevOpenedRow.close();
      }
      prevOpenedRow = row[index];
    };

    const renderRightActions = (
      progress: any,
      dragX: any,
      onClick: () => void,
    ) => {
      return (
        <View>
          <Pressable style={style.deleteBtn} onPress={onClick}>
            <Text style={style.deleteBtnText}>DELETE</Text>
          </Pressable>
        </View>
      );
    };

    return (
      <CartProductItem
        title={item.title}
        price={item.price}
        amount={item.amount}
        image={item?.image}
        renderRightActions={(progress: any, dragX: any) =>
          renderRightActions(progress, dragX, onClick)
        }
        onSwipeableOpen={() => closeRow(index)}
        ref={(ref: any) => (row[index] = ref)}
        rightOpenValue={-100}
      />
    );
  };

  return (
    <View style={style.cartListProductWrapper}>
      <FlatList
        data={productData}
        renderItem={v =>
          renderItem(v, () => {
            deleteItem(v);
          })
        }
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

export default CartListProduct;
