import {StyleSheet} from 'react-native';
import {GREY_COLOR_6} from '../../../base';
export const style = StyleSheet.create({
  wrapper: {
    display: 'flex',
    flexDirection: 'row',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderBottomColor: GREY_COLOR_6,
    borderBottomWidth: 1,
  },
  image: {
    borderRadius: 10,
    height: 20,
    width: 20,
    marginRight: 10,
  },
  nameText: {
    color: '#000',
    marginBottom: 5,
  },
  commentText: {
    marginTop: 10,
  },
  createdText: {
    fontSize: 12,
    marginTop: 5,
  },
});
