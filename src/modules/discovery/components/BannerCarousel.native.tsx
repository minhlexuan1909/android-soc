import React from 'react';
import {Dimensions, Image} from 'react-native';
import {View, Text} from 'react-native';
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';
import Carousel from 'react-native-reanimated-carousel';

import PaginationItem from './PaginationItem.native';
import {MAIN_COLOR} from '../../base';

const colors = [MAIN_COLOR, MAIN_COLOR, MAIN_COLOR];

const images = [
  <Image
    style={{width: '100%', height: '100%'}}
    source={require('../assets/images/shirt.jpg')}
  />,
  <Image
    style={{width: '100%', height: '100%'}}
    source={require('../assets/images/shoes.jpeg')}
  />,
  <Image
    style={{width: '100%', height: '100%'}}
    source={require('../assets/images/guitar.jpg')}
  />,
];

const width = Dimensions.get('window').width;

const BannerCarousel = () => {
  const progressValue = useSharedValue<number>(0);

  return (
    <View
      style={{
        alignItems: 'center',
      }}>
      <Carousel
        loop
        width={width}
        height={width / 2}
        autoPlay={true}
        data={colors}
        autoPlayInterval={3000}
        scrollAnimationDuration={1000}
        pagingEnabled={true}
        snapEnabled={true}
        onProgressChange={(_, absoluteProgress) =>
          (progressValue.value = absoluteProgress)
        }
        mode="parallax"
        modeConfig={{
          parallaxScrollingScale: 0.9,
          parallaxScrollingOffset: 50,
        }}
        renderItem={({index}) => (
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 3,
              },
              shadowOpacity: 0.27,
              shadowRadius: 4.65,
              backgroundColor: '#fff',
              elevation: 6,
            }}>
            <>{images[index]}</>
          </View>
        )}
      />
      {!!progressValue && (
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: 50,
            alignSelf: 'center',
          }}>
          {colors.map((backgroundColor, index) => {
            return (
              <PaginationItem
                backgroundColor={backgroundColor}
                animValue={progressValue}
                index={index}
                key={index}
                length={colors.length}
                isRotate={true}
              />
            );
          })}
        </View>
      )}
    </View>
  );
};

export default BannerCarousel;
