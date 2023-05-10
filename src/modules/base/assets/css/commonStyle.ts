import {StyleSheet} from 'react-native';

export const MAIN_COLOR = '#000';
export const MAIN_TEXT_COLOR = '#fff';

export const GREY_COLOR_6 = '#d3d3d3';
export const GREY_COLOR_7 = '#c6c6c6';
export const GREY_COLOR_8 = '#bababa';

export const DEFAULT_RIPPLE_COLOR = 'grey';
export const BACKGROUND_GREY_COLOR = '#f8f9fD';
export const BOX_SHADOW_COLOR = '#dedede';

export const STAR_COLOR = '#FEA200';

export const commonStyle = StyleSheet.create({
  pill: {
    width: '100%',
    borderRadius: 30,
    overflow: 'hidden',
  },
  primaryBtnWrapper: {
    display: 'flex',
    width: '100%',
    backgroundColor: MAIN_COLOR,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  primaryBtn: {
    paddingVertical: 15,
  },
  primaryBtnText: {
    color: MAIN_TEXT_COLOR,
    textAlign: 'center',
    fontSize: 16,
  },

  screenHeadingText: {
    fontSize: 20,
    paddingVertical: 15,
    textAlign: 'center',
    color: '#000',
  },
});
