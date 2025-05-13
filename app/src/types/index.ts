export type CategoryType = {
  idCategory: string;
  strCategory: string;
  strCategoryDescription: string;
  strCategoryThumb: string;
};

export type RootStackParamList = {
  Home: undefined;
  Meals: { category: string };
};
