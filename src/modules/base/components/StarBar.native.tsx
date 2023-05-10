import React from 'react';
import {View} from 'react-native';
import {roundHalf} from '../utils';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faStar, faStarHalfStroke} from '@fortawesome/free-solid-svg-icons';
import {faStar as faStarRegular} from '@fortawesome/free-regular-svg-icons';
import {STAR_COLOR} from '../assets';

type Props = {
  star: number;
};

const StarBar = (props: Props) => {
  const {star} = props;
  const convertedStar = roundHalf(star);
  const fullStar = Math.floor(convertedStar);
  const halfStar = Math.ceil(convertedStar - fullStar);
  const emptyStar = 5 - fullStar - halfStar;

  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
      }}>
      {[...Array(fullStar)].map((item, index) => (
        <FontAwesomeIcon key={index} icon={faStar} color={STAR_COLOR} />
      ))}
      {[...Array(halfStar)].map((item, index) => (
        <FontAwesomeIcon
          key={index}
          icon={faStarHalfStroke}
          color={STAR_COLOR}
        />
      ))}
      {[...Array(emptyStar)].map((item, index) => (
        <FontAwesomeIcon key={index} icon={faStarRegular} color={STAR_COLOR} />
      ))}
    </View>
  );
};

export default StarBar;
