import Article from "./components/Article";
import { useArticle } from "../ArticleContext";

const NewsArticle = () => {
    const { article } = useArticle() || {};

    console.log(article); // Check what data is actually being retrieved

    if (!article) {
      return <div>No Article Found</div>; 
    }

    return (
        <Article {...article}/>
    );
};

export default NewsArticle;