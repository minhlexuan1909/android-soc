import {StyleSheet} from 'react-native';
export const style = StyleSheet.create({
  productListWrapper: {
    paddingHorizontal: 5,
    display: 'flex',
  },
  choosenCategory: {
    fontSize: 27,
    fontWeight: 'bold',
    color: '#000',
  },
  mainProductListWrapper: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    flexGrow: 1,
    flexWrap: 'wrap',
  },
});
