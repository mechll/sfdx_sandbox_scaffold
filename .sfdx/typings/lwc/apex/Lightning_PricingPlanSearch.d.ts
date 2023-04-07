declare module "@salesforce/apex/Lightning_PricingPlanSearch.findPlans" {
  export default function findPlans(param: {creditInput: any, debitInput: any, achInput: any}): Promise<any>;
}
declare module "@salesforce/apex/Lightning_PricingPlanSearch.setSelectedPlan" {
  export default function setSelectedPlan(param: {selectedPricingPlanId: any, rateReviewId: any}): Promise<any>;
}
declare module "@salesforce/apex/Lightning_PricingPlanSearch.cloneSelectedPlanMethod" {
  export default function cloneSelectedPlanMethod(param: {selectedPricingPlanId: any, rateReviewId: any}): Promise<any>;
}
declare module "@salesforce/apex/Lightning_PricingPlanSearch.cloneStandardPlanMethod" {
  export default function cloneStandardPlanMethod(param: {creditInput: any, debitInput: any, achInput: any, rateReviewId: any}): Promise<any>;
}
