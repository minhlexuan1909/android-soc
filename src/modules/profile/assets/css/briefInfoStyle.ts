import {StyleSheet} from 'react-native';

const AVATAR_SIZE = 70;

export const style = StyleSheet.create({
  briefInfoWrapper: {
    display: 'flex',
    flexDirection: 'row',
    padding: 20,
    backgroundColor: '#fff',
    marginBottom: 20,
  },
  avatarWrapper: {
    borderRadius: AVATAR_SIZE / 2,
    width: AVATAR_SIZE,
    height: AVATAR_SIZE,
    overflow: 'hidden',
    marginRight: 20,
  },
  avatar: {
    width: AVATAR_SIZE,
    height: AVATAR_SIZE,
  },
  infoWrapper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
});
