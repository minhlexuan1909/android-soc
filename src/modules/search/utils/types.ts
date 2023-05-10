export type TSearchSettingSection = {
  title?: string;
  searchKey: string;
  optionList: TSearchDrawerSectionItem[];
  singleSelect?: boolean;
};

export type TSearchDrawerSectionItem = {
  btnTitle: string;
  btnValue: string;
  order?: 'asc' | 'desc';
  onPress?: () => void;
};

export type TSearchState = {
  searchCondition: {
    order: 'asc' | 'desc';
    [key: string]: any;
  };
};
