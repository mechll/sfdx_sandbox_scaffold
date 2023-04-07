declare module "@salesforce/apex/PortalArticlesController.getFollowingArticles" {
  export default function getFollowingArticles(): Promise<any>;
}
declare module "@salesforce/apex/PortalArticlesController.searchFollowingArticles" {
  export default function searchFollowingArticles(param: {searchTerm: any}): Promise<any>;
}
declare module "@salesforce/apex/PortalArticlesController.getArticleData" {
  export default function getArticleData(param: {articleId: any}): Promise<any>;
}
declare module "@salesforce/apex/PortalArticlesController.doFollowArticle" {
  export default function doFollowArticle(param: {articleId: any}): Promise<any>;
}
declare module "@salesforce/apex/PortalArticlesController.doUnfollowArticle" {
  export default function doUnfollowArticle(param: {kavId: any}): Promise<any>;
}
declare module "@salesforce/apex/PortalArticlesController.getFollowArticleStatus" {
  export default function getFollowArticleStatus(param: {articleId: any}): Promise<any>;
}
declare module "@salesforce/apex/PortalArticlesController.getTopSubscribedArticles" {
  export default function getTopSubscribedArticles(): Promise<any>;
}
declare module "@salesforce/apex/PortalArticlesController.getTrendingArticles" {
  export default function getTrendingArticles(param: {numberOfArticles: any}): Promise<any>;
}
declare module "@salesforce/apex/PortalArticlesController.getBreadCrumbsByArticleId" {
  export default function getBreadCrumbsByArticleId(param: {articleId: any}): Promise<any>;
}
