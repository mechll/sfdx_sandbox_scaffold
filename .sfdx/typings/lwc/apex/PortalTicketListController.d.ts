declare module "@salesforce/apex/PortalTicketListController.getTickets" {
  export default function getTickets(param: {acr: any, searchTerm: any, ticketsType: any, ticketScope: any}): Promise<any>;
}
declare module "@salesforce/apex/PortalTicketListController.getCaseByCaseNumber" {
  export default function getCaseByCaseNumber(param: {caseNumber: any}): Promise<any>;
}
declare module "@salesforce/apex/PortalTicketListController.getHasTicketAccess" {
  export default function getHasTicketAccess(param: {acr: any, caseNumber: any}): Promise<any>;
}
declare module "@salesforce/apex/PortalTicketListController.getEmails" {
  export default function getEmails(param: {caseId: any}): Promise<any>;
}
declare module "@salesforce/apex/PortalTicketListController.getCaseFeedItems" {
  export default function getCaseFeedItems(param: {caseId: any}): Promise<any>;
}
declare module "@salesforce/apex/PortalTicketListController.replyToCaseWithFeedItem" {
  export default function replyToCaseWithFeedItem(param: {caseId: any, body: any}): Promise<any>;
}
declare module "@salesforce/apex/PortalTicketListController.closeCase" {
  export default function closeCase(param: {caseToClose: any}): Promise<any>;
}
declare module "@salesforce/apex/PortalTicketListController.getFiles" {
  export default function getFiles(param: {contentDocumentIds: any}): Promise<any>;
}
declare module "@salesforce/apex/PortalTicketListController.deleteFile" {
  export default function deleteFile(param: {contentDocumentId: any}): Promise<any>;
}
