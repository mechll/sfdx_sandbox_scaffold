declare module "@salesforce/apex/PortalTicketController.createCase" {
  export default function createCase(param: {newCase: any, contentDocumentIds: any}): Promise<any>;
}
declare module "@salesforce/apex/PortalTicketController.getFiles" {
  export default function getFiles(param: {contentDocumentIds: any}): Promise<any>;
}
declare module "@salesforce/apex/PortalTicketController.deleteFile" {
  export default function deleteFile(param: {contentDocumentId: any}): Promise<any>;
}
declare module "@salesforce/apex/PortalTicketController.getRequestTopicByProduct" {
  export default function getRequestTopicByProduct(param: {portalProductHolding: any}): Promise<any>;
}
declare module "@salesforce/apex/PortalTicketController.getDependentPicklistValues" {
  export default function getDependentPicklistValues(param: {fieldName: any, parentValue: any}): Promise<any>;
}
declare module "@salesforce/apex/PortalTicketController.getPicklistValues" {
  export default function getPicklistValues(param: {objectName: any, fieldName: any}): Promise<any>;
}
declare module "@salesforce/apex/PortalTicketController.createSupportCase" {
  export default function createSupportCase(param: {caseSupport: any}): Promise<any>;
}
