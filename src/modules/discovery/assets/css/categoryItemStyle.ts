import {StyleSheet} from 'react-native';

const borderRadius = 10;

export const style = StyleSheet.create({
  wrapper: {
    marginTop: 10,
    marginBottom: 10,
    position: 'relative',
    borderRadius: borderRadius,
    overflow: 'hidden',
  },
  shadowWrapper: {
    position: 'absolute',
    width: '100%',
    borderBottomLeftRadius: borderRadius,
    borderBottomRightRadius: borderRadius,
    overflow: 'hidden',
    bottom: 0,
    // top: 125,
  },
  titleWrapper: {
    position: 'absolute',
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 25,
    bottom: 20,
    left: 20,
  },
});
