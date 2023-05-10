import React from 'react';
import {View, Text} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {commonStyle} from '../../base';
import {style} from '../assets/css/categoryFilterStyle';

const CategoryFilter = () => {
  return (
    <ScrollView horizontal={true} contentContainerStyle={style.categoryList}>
      <View style={[commonStyle.pill, style.categoryWrapper]}>
        <Text style={style.categoryText}>Recommended</Text>
      </View>
      <View style={[commonStyle.pill, style.categoryWrapper]}>
        <Text style={style.categoryText}>Recommended</Text>
      </View>
      <View style={[commonStyle.pill, style.categoryWrapper]}>
        <Text style={style.categoryText}>Recommended</Text>
      </View>
    </ScrollView>
  );
};

export default React.memo(CategoryFilter);
