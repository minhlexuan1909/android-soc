import {StyleSheet} from 'react-native';

export const MAIN_COLOR = '#000';
export const MAIN_TEXT_COLOR = '#fff';

export const GREY_COLOR_6 = '#d3d3d3';

export const commonStyle = StyleSheet.create({
  pill: {
    borderRadius: 30,
  },
  primaryBtn: {
    backgroundColor: MAIN_COLOR,
    paddingVertical: 15,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  primaryBtnText: {
    color: MAIN_TEXT_COLOR,
    textAlign: 'center',
    fontSize: 16,
  },
});
