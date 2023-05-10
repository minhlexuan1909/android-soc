import React, {useState} from 'react';
import {Pressable, Text, View} from 'react-native';
import {TSearchState, TSearchDrawerSectionItem} from '../utils';
import {style} from '../assets/css/searchDrawerSectionStyle';
import {useDispatch, useSelector} from 'react-redux';
import {setSearchCondition} from '../redux/actions';
import {SEARCH_SORT_KEY} from '../utils/constants';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faCheck} from '@fortawesome/free-solid-svg-icons';

type Props = {
  title?: string;
  optionList?: TSearchDrawerSectionItem[];
  searchKey: string;
  children?: any;
  singleSelect?: boolean;
};

const SearchDrawerSection = (props: Props) => {
  const {
    title = '',
    optionList = [],
    searchKey,
    children,
    singleSelect = false,
  } = props;

  const dispatch = useDispatch();

  const searchCondition = useSelector(
    (state: {search: TSearchState}) => state.search?.searchCondition,
  );

  const sectionSearchCondition: undefined | any[] =
    searchCondition?.[searchKey];

  const [optionListState, setOptionListState] = useState(
    optionList.map(item => {
      return {
        ...item,
        state:
          sectionSearchCondition &&
          sectionSearchCondition.includes(item.btnValue)
            ? true
            : false,
      };
    }),
  );

  const handleOptionBtnPress = (index: number) => {
    optionListState[index].state = !optionListState[index].state;
    if (singleSelect) {
      optionListState.forEach((option, i) => {
        if (i !== index) {
          optionListState[i].state = false;
        }
      });
    }
    setOptionListState([...optionListState]);

    const optionEnabled = optionListState
      .filter(option => option.state)
      .map(option => option.btnValue);

    dispatch(
      setSearchCondition({
        ...searchCondition,
        [searchKey]: optionEnabled,
        order:
          searchKey === SEARCH_SORT_KEY
            ? optionListState[index].order
            : searchCondition.order,
      }),
    );
  };

  return (
    <View style={style.drawerSectionWrapper}>
      <Text style={style.drawerSectionText}>{title}</Text>
      <View style={style.optionListWrapper}>
        {optionListState.map((option, index) => (
          <View key={index} style={style.optionBtnGapWrapper}>
            <Pressable
              style={[
                style.optionBtnWrapper,
                option.state ? style.chosenOptionBtn : {},
              ]}
              onPress={() => handleOptionBtnPress(index)}>
              {option.state && (
                <View style={style.optionCheckedBox}>
                  <FontAwesomeIcon icon={faCheck} color="#fff" size={7} />
                </View>
              )}
              <Text style={style.optionBtnText}>{option.btnTitle}</Text>
            </Pressable>
          </View>
        ))}
        {children}
      </View>
    </View>
  );
};

export default SearchDrawerSection;
