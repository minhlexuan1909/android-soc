import React, {useState} from 'react';
import {View} from 'react-native';
import StarFilterBtn from './StarFilterBtn.native';

const StarFilter = () => {
  const [activeBtn, setActiveBtn] = useState<number>(5);

  const handleOnPress = (star: number) => {
    setActiveBtn(star);
  };

  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
        paddingHorizontal: 10,
        marginTop: 10,
      }}>
      {[5, 4, 3, 2, 1].map((star, index) => (
        <StarFilterBtn
          key={index}
          star={star}
          active={activeBtn === star}
          onPress={() => handleOnPress(star)}
        />
      ))}
    </View>
  );
};

export default StarFilter;
