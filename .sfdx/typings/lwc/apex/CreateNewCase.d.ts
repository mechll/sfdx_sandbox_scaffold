declare module "@salesforce/apex/CreateNewCase.createCase" {
  export default function createCase(param: {cas: any}): Promise<any>;
}
declare module "@salesforce/apex/CreateNewCase.getPicklistValues" {
  export default function getPicklistValues(param: {objectName: any, fieldName: any}): Promise<any>;
}
declare module "@salesforce/apex/CreateNewCase.getPicklistValues1" {
  export default function getPicklistValues1(param: {objectName: any, fieldName: any, recordTypeDeveloperName: any}): Promise<any>;
}
declare module "@salesforce/apex/CreateNewCase.saveContentVersion" {
  export default function saveContentVersion(param: {title: any, fileName: any, base64Data: any, caseId: any, contentVersionId: any}): Promise<any>;
}
declare module "@salesforce/apex/CreateNewCase.addContentVersion" {
  export default function addContentVersion(param: {title: any, fileName: any, base64Data: any, caseId: any}): Promise<any>;
}
