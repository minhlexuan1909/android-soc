export type TCartState = {
  zptranstoken: string;
  isCreateZlpOrderInfoSuccess: boolean;
  isRefreshCart: boolean;
  cart: TCart;
};

export type TCart = {
  id: number;
  account_id: number;
  total_value: string;
  cart_items: [];
  created_at: string;
  updated_at: string;
};

export type TCartItem = {
  id: number;
  product_id: number;
  quantity: number;
  price: string;
  created_at: string;
  updated_at: string;
  cart: number;
};
