import {StyleSheet} from 'react-native';
import {MAIN_COLOR} from '../../../base';
export const style = StyleSheet.create({
  drawerSectionWrapper: {
    width: '100%',
    paddingHorizontal: 5,
  },
  drawerSectionText: {
    padding: 5,
    color: '#000',
  },
  optionListWrapper: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  optionBtnGapWrapper: {
    width: '50%',
    padding: 5,
  },
  optionBtnWrapper: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#000000',
    backgroundColor: '#EEEEEE',
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: '#EEEEEE',
  },
  chosenOptionBtn: {
    borderWidth: 1,
    borderColor: MAIN_COLOR,
    backgroundColor: '#fff',
  },
  optionCheckedBox: {
    position: 'absolute',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: MAIN_COLOR,
    top: -1,
    left: -1,
    width: 10,
    height: 10,
  },
  optionBtnText: {
    fontSize: 12,
    color: '#000000',
  },
});
