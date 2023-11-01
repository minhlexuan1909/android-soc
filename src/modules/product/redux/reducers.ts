// @ts-ignore
import ReducerRegistry from '../../base/redux/ReducerRegistry';
import {TAction} from '../../base';
import {ACTION_TYPES} from './actionTypes';
import {TProductState} from '../utils/types';

const initState: TProductState = {
  productDetail: {
    id: 0,
    title: '',
    price: '',
    link: '',
    image: null,
    quantity: 0,
    tags: [],
    created_at: '',
    updated_at: '',
    description: '',
    comment: [],
  },
};

ReducerRegistry.register('product', (state = initState, action: TAction) => {
  switch (action.type) {
    case ACTION_TYPES.GET_PRODUCT_BY_ID_SUCCESS: {
      return {
        ...state,
        productDetail: action.response.data.product,
      };
    }
    // case ACTION_TYPES.SET_PRODUCTS: {
    //   return {
    //     ...state,
    //     products: action.response.data.results,
    //   };
    // }
    default:
      return state;
  }
});
