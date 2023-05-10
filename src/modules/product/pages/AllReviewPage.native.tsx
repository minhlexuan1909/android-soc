import React from 'react';
import {View} from 'react-native';
import AllReviewWrapper from '../components/AllReviewWrapper.native';
import ScreenHeader from '../../base/components/ScreenHeader.native';

const AllReviewPage = () => {
  return (
    <View style={{flex: 1}}>
      <ScreenHeader title="Reviews" showBoxShadow={true} />
      <AllReviewWrapper />
    </View>
  );
};

export default AllReviewPage;
