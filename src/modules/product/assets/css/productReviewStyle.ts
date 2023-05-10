import {StyleSheet} from 'react-native';
import {BACKGROUND_GREY_COLOR, GREY_COLOR_6} from '../../../base';
export const style = StyleSheet.create({
  reviewWrapper: {
    backgroundColor: '#fff',
    marginTop: 15,
  },
  reviewHeaderWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: GREY_COLOR_6,
  },
  reviewText: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#000',
  },
  reviewSummaryText: {
    marginLeft: 10,
  },
  seeAllTextWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  seeAllText: {
    fontWeight: '500',
    color: '#000',
    marginRight: 5,
  },
  seeAllCommentWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
  },
  seeAllCommentText: {
    fontWeight: '500',
    color: '#000',
    marginRight: 5,
    paddingBottom: 2,
  },
});
