import { createContext, useContext, useState, ReactNode } from 'react';

interface Article {
    id: number;
    title: string;
    date: string;
    imageUrl: string;
    description: string;
    content: string;
    priority: number;
}

interface ArticleContextType {
  article: Article | null;
  setArticle: (article: Article | null) => void;
}

const ArticleContext = createContext<ArticleContextType | null>(null);

export const useArticle = () => useContext(ArticleContext);

interface ArticleProviderProps {
  children: ReactNode;
}

export const ArticleProvider = ({ children }: ArticleProviderProps) => {
  const [article, setArticle] = useState<Article | null>(null);

  return (
    <ArticleContext.Provider value={{ article, setArticle }}>
      {children}
    </ArticleContext.Provider>
  );
};
