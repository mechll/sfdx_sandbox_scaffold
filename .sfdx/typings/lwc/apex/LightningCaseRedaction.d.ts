declare module "@salesforce/apex/LightningCaseRedaction.getAttachements" {
  export default function getAttachements(param: {recordIdString: any}): Promise<any>;
}
declare module "@salesforce/apex/LightningCaseRedaction.deleteFiles" {
  export default function deleteFiles(param: {linksToDelete: any, recordIdString: any}): Promise<any>;
}
declare module "@salesforce/apex/LightningCaseRedaction.redactData" {
  export default function redactData(param: {recordIdString: any, dataToRedact: any}): Promise<any>;
}
