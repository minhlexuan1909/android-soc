import {StyleSheet} from 'react-native';
import {GREY_COLOR_6} from '../../../../base';
export const style = StyleSheet.create({
  inputWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: GREY_COLOR_6,
    marginBottom: 20,
  },
  inputIcon: {
    padding: 10,
    marginRight: 10,
  },
  input: {
    width: '100%',
    paddingLeft: 0,
    color: '#000',
    fontSize: 16,
    height: 40,
  },
});
