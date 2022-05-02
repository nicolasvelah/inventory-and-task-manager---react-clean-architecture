/* eslint-disable no-unused-vars */
// eslint-disable-next-line object-curly-newline
import React, { createContext, useContext, useState } from 'react';
import Category from '../../../domain/models/category';

type CategoryContent = {
  categories: Category[];
  setCategory: (newCategory: Category[]) => void;
};
const CategoryContext = createContext<CategoryContent>({
  categories: [],
  setCategory: (newCategory: Category[]) => {}
});

export const useCategoryContext = () => useContext(CategoryContext);

export const CategoryContextProvider: React.FC = ({ children }) => {
  const [categories, setCurrrentCategory] = useState<Category[]>([]);

  return (
    <CategoryContext.Provider
      value={{
        categories,
        setCategory: (newCategory: Category[]) => {
          setCurrrentCategory(newCategory);
        }
      }}
    >
      {children}
    </CategoryContext.Provider>
  );
};
