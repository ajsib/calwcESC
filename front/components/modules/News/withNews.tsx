import { ArticleProvider } from "./ArticleContext";

const withArticleProvider = (Component: React.ComponentType) => {
    return function WrappedComponent(props: any) {
        return (
            <ArticleProvider>
                <Component {...props} />
            </ArticleProvider>
        );
    };
};

export default withArticleProvider;