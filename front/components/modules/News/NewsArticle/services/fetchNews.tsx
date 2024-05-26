import newsData from '../../../news-dummy.json';

export const fetchArticleData = async (id: number): Promise<any> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      let foundArticle = null;
      for (const article of newsData) {
        console.log(`Searching article with ID: ${article.id} - Title: ${article.title}`);
        if (article.id === id) {
          foundArticle = article;
          break;
        }
      }
      resolve(foundArticle || { message: "Article not found" });
    }, 500); // Simulate network delay
  });
};
