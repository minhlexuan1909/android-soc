import React, {useState} from 'react';
import {View, Text, Pressable} from 'react-native';
import {style as textStyle} from '../assets/css/showMoreTextStyle';

type Props = {
  maxLine?: number;
  lineHeight?: number;
  style?: object[];
  text: string;
};

const ShowMoreText = (props: Props) => {
  const {maxLine = 2, lineHeight = 14, style = [], text} = props;

  const [showMore, setShowMore] = useState<boolean>(false);
  const [currentMaxLine, setCurrentMaxLine] = useState<number>(2);

  const handleToggleShowMore = () => {
    setShowMore(prev => !prev);
    if (!showMore) {
      setCurrentMaxLine(maxLine);
    } else {
      setCurrentMaxLine(0);
    }
  };

  const onLayout = (event: any) => {
    const {height} = event.nativeEvent.layout;
    const maxHeight = currentMaxLine * lineHeight;

    // if (currentMaxLine > 0 && height > maxHeight) {
    //   setShowMore(true);
    // }
  };

  return (
    <View style={style}>
      <Text
        style={[textStyle.text]}
        numberOfLines={showMore ? maxLine : 2}
        ellipsizeMode="tail"
        onLayout={event => onLayout(event)}>
        {text}
      </Text>
      {
        <Pressable onPress={handleToggleShowMore}>
          <Text style={textStyle.textShowMore} onPress={handleToggleShowMore}>
            {showMore ? 'Show Less' : 'Show More'}
          </Text>
        </Pressable>
      }
    </View>
  );
};

export default ShowMoreText;
