import React, {useEffect} from 'react';
import {View, Image, Text, RefreshControl} from 'react-native';
import ScreenHeader from '../../base/components/ScreenHeader.native';
import LinearGradient from 'react-native-linear-gradient';
import CategoryItem from './CategoryItem.native';
import {useDispatch, useSelector} from 'react-redux';
import {getTags} from '../redux/actions';
import {TDiscoveryState} from '../utils';
import {ScrollView} from 'react-native-gesture-handler';

const CategoryWrapper = () => {
  const dispatch = useDispatch();

  const {tags, isRefreshTag} = useSelector(
    (state: {discovery: TDiscoveryState}) => state.discovery,
  );

  const handleRefreshTag = () => {
    dispatch(getTags());
  };

  useEffect(() => {
    dispatch(getTags());
  }, []);

  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <ScreenHeader
        title="Category"
        showBackButton={false}
        showBoxShadow={false}
      />

      <ScrollView
        refreshControl={
          <RefreshControl
            refreshing={isRefreshTag}
            onRefresh={handleRefreshTag}
          />
        }
        style={{paddingHorizontal: 20}}>
        {tags &&
          tags.map((tag, index) => (
            <CategoryItem key={tag.id} image={tag.image} title={tag.name} />
          ))}
      </ScrollView>
    </View>
  );
};

export default CategoryWrapper;
