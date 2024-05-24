import { createContext, useContext, useState } from 'react';
import { Article, ArticleProviderProps, ArticleContextType } from './Types';

const ArticleContext = createContext<ArticleContextType | null>(null);

export const useArticle = () => useContext(ArticleContext);

export const ArticleProvider = ({ children }: ArticleProviderProps) => {
  const [article, setArticle] = useState<Article | null>(null);

  return (
    <ArticleContext.Provider value={{ article, setArticle }}>
      {children}
    </ArticleContext.Provider>
  );
};
