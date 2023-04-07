declare module "@salesforce/apex/CustomCCBTopicArticleResults.getTopicName" {
  export default function getTopicName(param: {topicId: any}): Promise<any>;
}
declare module "@salesforce/apex/CustomCCBTopicArticleResults.getAllArticleTypes" {
  export default function getAllArticleTypes(param: {topicId: any}): Promise<any>;
}
declare module "@salesforce/apex/CustomCCBTopicArticleResults.getArticles" {
  export default function getArticles(param: {topicId: any, articleType: any}): Promise<any>;
}
declare module "@salesforce/apex/CustomCCBTopicArticleResults.getTopicByArticle" {
  export default function getTopicByArticle(param: {articleId: any}): Promise<any>;
}
declare module "@salesforce/apex/CustomCCBTopicArticleResults.getArticleData" {
  export default function getArticleData(param: {articleId: any}): Promise<any>;
}
declare module "@salesforce/apex/CustomCCBTopicArticleResults.doFollowArticle" {
  export default function doFollowArticle(param: {articleId: any}): Promise<any>;
}
declare module "@salesforce/apex/CustomCCBTopicArticleResults.doUnfollowArticle" {
  export default function doUnfollowArticle(param: {articleId: any}): Promise<any>;
}
declare module "@salesforce/apex/CustomCCBTopicArticleResults.getFollowArticleStatus" {
  export default function getFollowArticleStatus(param: {articleId: any}): Promise<any>;
}
