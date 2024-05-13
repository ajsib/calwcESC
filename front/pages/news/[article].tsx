import { useArticle } from '@/contexts/ArticleContext';
import Article from '@/components/landing/News/NewsArticle/Article';
import Header from '@/components/Shared/Public/Header/Header';
import Footer from '@/components/Shared/Public/Footer';

const ArticlePage = () => {
    const { article } = useArticle() || {};

    console.log(article); // Check what data is actually being retrieved

    if (!article) {
      return <div>No Article Found</div>; // Handle loading state or no article found
    }

    return (
        <>
        <Header backgroundColor='var(--primary-color)' />
        <Article {...article} />
        <Footer />
        </>
    );
};  
export default ArticlePage;
