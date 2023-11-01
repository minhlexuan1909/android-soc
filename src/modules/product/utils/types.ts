export type TProductState = {
  productDetail: TProductDetail;
};

export type TProductDetail = {
  id: number;
  title: string;
  price: string;
  link: string;
  image: null | string;
  quantity: number;
  tags: TTag[];
  created_at: string;
  updated_at: string;
  description: string;
  comment: TComment[];
};

export type TTag = {
  id: number;
  name: string;
  description: string;
  created_at: string;
  updated_at: string;
};

export type TComment = {
  id: number;
  account_id: number;
  product_id: number;
  user_name: string;
  star_rating: number;
  content: string;
  created_at: string;
  updated_at: string;
};
