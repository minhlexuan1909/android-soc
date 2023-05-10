import React from 'react';
import {View, Text, Pressable} from 'react-native';
import {style} from '../assets/css/productReviewStyle';
import {roundHalf} from '../../base/utils/functions';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faChevronRight,
  faStar,
  faStarHalfStroke,
} from '@fortawesome/free-solid-svg-icons';
import {faStar as faStarRegular} from '@fortawesome/free-regular-svg-icons';
import {STAR_COLOR} from '../../base';
import StarBar from '../../base/components/StarBar.native';
import ProductReviewItem from './ProductReviewItem.native';

const total_star = 3.8;
const total_comment = 15;

const ProductReview = () => {
  const convertedStar = roundHalf(total_star);
  const fullStar = Math.floor(convertedStar);
  const halfStar = Math.ceil(convertedStar - fullStar);
  const emptyStar = 5 - fullStar - halfStar;

  return (
    <View style={style.reviewWrapper}>
      <View style={style.reviewHeaderWrapper}>
        <View>
          <Text style={style.reviewText}>Reviews</Text>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <StarBar star={total_star} />
            <Text style={style.reviewSummaryText}>
              {total_star}/5 ({total_comment} reivew
              {total_comment > 1 ? 's' : ''})
            </Text>
          </View>
        </View>
        <Pressable style={style.seeAllTextWrapper}>
          <Text style={style.seeAllText}>See all</Text>
          <FontAwesomeIcon icon={faChevronRight} />
        </Pressable>
      </View>
      <ProductReviewItem name="Minh" star={4} created_at="12-12-2012" />
      <ProductReviewItem name="Minh" star={4} created_at="12-12-2012" />
      <ProductReviewItem name="Minh" star={4} created_at="12-12-2012" />
      {total_comment > 10 && (
        <Pressable style={style.seeAllCommentWrapper}>
          <Text style={style.seeAllCommentText}>
            See all reviews ({total_comment})
          </Text>
          <FontAwesomeIcon icon={faChevronRight} size={12} />
        </Pressable>
      )}
    </View>
  );
};

export default ProductReview;
