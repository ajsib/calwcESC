import Article from '@/components/modules/News/NewsArticle';
import Header from '@/components/landing/shared/Header/Header';
import Footer from '@/components/landing/shared/Footer';

const ArticlePage = () => {
    return (
        <>
        <Header backgroundColor='var(--primary-color)' />
        <Article />
        <Footer />
        </>
    );
};  
export default ArticlePage;
