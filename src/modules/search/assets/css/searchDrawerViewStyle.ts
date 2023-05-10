import {StyleSheet} from 'react-native';
import {MAIN_COLOR} from '../../../base';

export const style = StyleSheet.create({
  searchDrawerView: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
  },
  searchSectionWrapper: {
    flexGrow: 1,
  },
  searchActionWrapper: {
    display: 'flex',
    flexDirection: 'row',
    borderTopColor: '#EEEEEE',
    borderTopWidth: 1,
    paddingVertical: 5,
    paddingHorizontal: 5,
  },
  searchActionGapWrapper: {
    width: '50%',
    padding: 5,
  },
  searchActionBtn: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 7,
  },
  searchResetBtn: {
    borderWidth: 1,
    borderColor: MAIN_COLOR,
    backgroundColor: '#fff',
  },
  searchResetBtnText: {
    color: MAIN_COLOR,
  },
  searchConfirmBtn: {
    borderWidth: 1,
    borderColor: MAIN_COLOR,
    backgroundColor: MAIN_COLOR,
  },
  searchConfirmBtnText: {
    color: '#fff',
  },
});
