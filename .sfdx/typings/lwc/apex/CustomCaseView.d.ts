declare module "@salesforce/apex/CustomCaseView.getorganizationid" {
  export default function getorganizationid(): Promise<any>;
}
declare module "@salesforce/apex/CustomCaseView.openCases" {
  export default function openCases(param: {offset: any, organizationid: any}): Promise<any>;
}
declare module "@salesforce/apex/CustomCaseView.archivedCases" {
  export default function archivedCases(param: {offset: any, organizationid: any}): Promise<any>;
}
declare module "@salesforce/apex/CustomCaseView.getAttachment" {
  export default function getAttachment(param: {caseId: any}): Promise<any>;
}
declare module "@salesforce/apex/CustomCaseView.closeCase" {
  export default function closeCase(param: {cas: any}): Promise<any>;
}
declare module "@salesforce/apex/CustomCaseView.getEmails" {
  export default function getEmails(param: {caseIdFroEmail: any}): Promise<any>;
}
declare module "@salesforce/apex/CustomCaseView.getFeedItems" {
  export default function getFeedItems(param: {caseIdFroFeedItems: any}): Promise<any>;
}
declare module "@salesforce/apex/CustomCaseView.getCaseHistory" {
  export default function getCaseHistory(param: {caseIdForCaseHistory: any}): Promise<any>;
}
declare module "@salesforce/apex/CustomCaseView.replyToCaseWithFeedItem" {
  export default function replyToCaseWithFeedItem(param: {caseId: any, body: any}): Promise<any>;
}
declare module "@salesforce/apex/CustomCaseView.replyToCaseWithFeedAttachment" {
  export default function replyToCaseWithFeedAttachment(param: {caseId: any, body: any, contentVersionId: any, title: any}): Promise<any>;
}
declare module "@salesforce/apex/CustomCaseView.addContentVersion" {
  export default function addContentVersion(param: {title: any, fileName: any, base64Data: any, caseId: any}): Promise<any>;
}
declare module "@salesforce/apex/CustomCaseView.getUserEmailId" {
  export default function getUserEmailId(param: {id: any}): Promise<any>;
}
declare module "@salesforce/apex/CustomCaseView.getDistributionPublicUrl" {
  export default function getDistributionPublicUrl(param: {contentVersionId: any}): Promise<any>;
}
