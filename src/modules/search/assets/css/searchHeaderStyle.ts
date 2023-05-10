import {StyleSheet} from 'react-native';
import {MAIN_COLOR} from '../../../base';

const searchRadius = 4;

export const style = StyleSheet.create({
  searchHeaderWrapper: {
    // zIndex: 999,
    position: 'relative',
    backgroundColor: '#fff',
    display: 'flex',
    alignItems: 'flex-end',
    flexDirection: 'column',
    paddingBottom: 10,
    paddingRight: 10,
    paddingLeft: 15,
    marginBottom: 5,
  },
  searchWrapper: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    marginTop: 10,
  },
  searchInput: {
    flexGrow: 1,
    height: 40,
    borderWidth: 1,
    borderTopLeftRadius: searchRadius,
    borderBottomLeftRadius: searchRadius,
    paddingLeft: 10,
  },
  searchBtn: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 40,
    borderWidth: 1,
    backgroundColor: MAIN_COLOR,
    borderTopRightRadius: searchRadius,
    borderBottomRightRadius: searchRadius,
  },
  searchSettingWrapper: {
    marginTop: 10,
    alignSelf: 'flex-end',
  },
  searchSettingText: {
    marginRight: 3,
    color: MAIN_COLOR,
  },
  searchSettingBtn: {
    backgroundColor: '#fff',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: MAIN_COLOR,
    borderRadius: searchRadius,
  },
});
