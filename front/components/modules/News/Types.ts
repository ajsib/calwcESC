export interface NewsItem {
    title: string;
    description: string;
    imageUrl: string;
    date: string;
    priority: number;
    id: number;
    content: string;
}

export interface PaginationProps {
    numPages: number;
    currentPage: number;
    handlePageChange: (page: number) => void;
}

export interface ArticleProps {
    id: number;
    title: string;
    date: string;
    imageUrl: string;
    description: string;
    content: string;
    priority: number;
}

export interface Article {
    id: number;
    title: string;
    date: string;
    imageUrl: string;
    description: string;
    content: string;
    priority: number;
}

export interface ArticleProviderProps {
    children: React.ReactNode;
  }

export interface ArticleContextType {
    article: Article | null;
    setArticle: (article: Article | null) => void;
  }