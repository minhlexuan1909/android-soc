import {StyleSheet} from 'react-native';
import {MAIN_COLOR} from '../../../base';
export const style = StyleSheet.create({
  categoryList: {
    paddingHorizontal: 10,
    display: 'flex',
    marginTop: 20,
    marginBottom: 20,
    flexDirection: 'row',
    gap: 10,
  },
  categoryWrapper: {
    width: 'auto',
    borderColor: MAIN_COLOR,
    borderWidth: 2,
    backgroundColor: '#fff',
    paddingVertical: 7,
    paddingHorizontal: 20,
  },
  categoryText: {
    color: MAIN_COLOR,
    fontSize: 14,
  },
});
