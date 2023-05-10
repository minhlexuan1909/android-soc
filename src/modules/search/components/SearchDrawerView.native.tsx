import React from 'react';
import {View, Text, Pressable} from 'react-native';
import SearchDrawerSection from './SearchDrawerSection.native';
import {TSearchDrawerSectionItem, TSearchSettingSection} from '../utils';
import {SEARCH_SORT_KEY} from '../utils/constants';
import {ScrollView} from 'react-native';
import {style} from '../assets/css/searchDrawerViewStyle';

const SORT_OPTTION_LIST: TSearchDrawerSectionItem[] = [
  {
    btnTitle: 'Newest',
    btnValue: 'created_at',
    order: 'desc',
  },
  {
    btnTitle: 'Rating',
    btnValue: 'rating',
    order: 'desc',
  },
  {
    btnTitle: 'Price: Low to High',
    btnValue: 'price',
    order: 'asc',
  },
  {
    btnTitle: 'Price: High to Low',
    btnValue: 'price',
    order: 'desc',
  },
];

const SEARCH_SETTING_SECTION: TSearchSettingSection[] = [
  {
    title: 'Sort',
    searchKey: SEARCH_SORT_KEY,
    optionList: SORT_OPTTION_LIST,
    singleSelect: true,
  },
];

const SearchDrawer = () => {
  return (
    <View style={style.searchDrawerView}>
      <ScrollView style={style.searchSectionWrapper}>
        {SEARCH_SETTING_SECTION.map((section, index) => (
          <SearchDrawerSection
            key={index}
            title={section.title}
            searchKey={section.searchKey}
            optionList={section.optionList}
            singleSelect={section.singleSelect}
          />
        ))}
      </ScrollView>
      <View style={style.searchActionWrapper}>
        <View style={style.searchActionGapWrapper}>
          <Pressable style={[style.searchResetBtn, style.searchActionBtn]}>
            <Text style={style.searchResetBtnText}>Reset</Text>
          </Pressable>
        </View>
        <View style={style.searchActionGapWrapper}>
          <Pressable style={[style.searchConfirmBtn, style.searchActionBtn]}>
            <Text style={style.searchConfirmBtnText}>Confirm</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default SearchDrawer;
