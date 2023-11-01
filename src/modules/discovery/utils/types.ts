export type TDiscoveryState = {
  products: [];
  isRefreshTag: boolean;
  tags: TTag[];
};

export type TTag = {
  id: number;
  name: string;
  image: null | string;
  description: string | null;
  created_at: string | null;
  updated_at: string | null;
};
