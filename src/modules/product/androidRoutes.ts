import ProductPage from './pages/ProductPage.native';
import AllReviewPage from './pages/AllReviewPage.native';

export const productRoutes = [
  {
    name: 'Product',
    component: ProductPage,
    initialParams: {productId: 42},
  },
  {
    name: 'AllReview',
    component: AllReviewPage,
    initialParams: {productId: 42},
  },
];
