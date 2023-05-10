import {StyleSheet} from 'react-native';
import {BACKGROUND_GREY_COLOR} from '../../../../base';
export const style = StyleSheet.create({
  settingItemWrapper: {
    backgroundColor: '#fff',
    paddingLeft: 15,
  },
  settingItemInnerWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingRight: 15,
    paddingVertical: 15,
    borderBottomColor: BACKGROUND_GREY_COLOR,
    borderBottomWidth: 1,
  },
  settingItemTitle: {
    fontSize: 14,
    color: '#000',
  },
});
