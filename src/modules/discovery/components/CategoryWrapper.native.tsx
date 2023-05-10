import React from 'react';
import {View, Image, Text} from 'react-native';
import ScreenHeader from '../../base/components/ScreenHeader.native';
import LinearGradient from 'react-native-linear-gradient';
import CategoryItem from './CategoryItem.native';

const CategoryWrapper = () => {
  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <ScreenHeader
        title="Category"
        showBackButton={false}
        showBoxShadow={false}
      />

      <View style={{paddingHorizontal: 20}}>
        <CategoryItem
          image="https://as2.ftcdn.net/v2/jpg/05/64/24/71/1000_F_564247106_JGzQ3iVqvJnLwdEyW01l1uCrH8Iefqo4.jpg"
          title="Book"
        />
        <CategoryItem
          image="https://as2.ftcdn.net/v2/jpg/05/64/24/71/1000_F_564247106_JGzQ3iVqvJnLwdEyW01l1uCrH8Iefqo4.jpg"
          title="Book"
        />
      </View>
    </View>
  );
};

export default CategoryWrapper;
