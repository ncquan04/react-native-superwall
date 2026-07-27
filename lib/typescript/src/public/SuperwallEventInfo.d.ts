import { PaywallInfo } from "./PaywallInfo";
import { PaywallPresentationRequestStatus, PaywallPresentationRequestStatusReason } from "./PaywallPresentationRequestStatus";
import type { RestoreType } from "./RestoreType";
import { StoreProduct } from "./StoreProduct";
import { StoreTransaction } from "./StoreTransaction";
import { Survey, SurveyOption } from "./Survey";
import { TriggerResult } from "./TriggerResult";
/**
 * @category Events
 * @since 0.0.15
 * Contains information about a Superwall event.
 */
export declare class SuperwallEventInfo {
    event: SuperwallEvent;
    params?: Record<string, any>;
    constructor(event: SuperwallEvent, params?: Record<string, any>);
    static fromJson(json: any): SuperwallEventInfo;
}
/**
 * @category Enums
 * @since 0.0.15
 * Enum representing the types of Superwall events.
 */
export declare enum EventType {
    firstSeen = "firstSeen",
    configRefresh = "configRefresh",
    appOpen = "appOpen",
    appLaunch = "appLaunch",
    identityAlias = "identityAlias",
    appInstall = "appInstall",
    sessionStart = "sessionStart",
    deviceAttributes = "deviceAttributes",
    subscriptionStatusDidChange = "subscriptionStatusDidChange",
    appClose = "appClose",
    deepLink = "deepLink",
    triggerFire = "triggerFire",
    paywallOpen = "paywallOpen",
    paywallClose = "paywallClose",
    paywallDecline = "paywallDecline",
    transactionStart = "transactionStart",
    transactionFail = "transactionFail",
    transactionAbandon = "transactionAbandon",
    transactionComplete = "transactionComplete",
    subscriptionStart = "subscriptionStart",
    freeTrialStart = "freeTrialStart",
    transactionRestore = "transactionRestore",
    transactionTimeout = "transactionTimeout",
    userAttributes = "userAttributes",
    nonRecurringProductPurchase = "nonRecurringProductPurchase",
    paywallResponseLoadStart = "paywallResponseLoadStart",
    paywallResponseLoadNotFound = "paywallResponseLoadNotFound",
    paywallResponseLoadFail = "paywallResponseLoadFail",
    paywallResponseLoadComplete = "paywallResponseLoadComplete",
    paywallWebviewLoadStart = "paywallWebviewLoadStart",
    paywallWebviewLoadFail = "paywallWebviewLoadFail",
    paywallWebviewLoadComplete = "paywallWebviewLoadComplete",
    paywallWebviewLoadTimeout = "paywallWebviewLoadTimeout",
    paywallWebviewLoadFallback = "paywallWebviewLoadFallback",
    paywallProductsLoadStart = "paywallProductsLoadStart",
    paywallProductsLoadFail = "paywallProductsLoadFail",
    paywallProductsLoadComplete = "paywallProductsLoadComplete",
    paywallWebviewProcessTerminated = "paywallWebviewProcessTerminated",
    paywallProductsLoadMissingProducts = "paywallProductsLoadMissingProducts",
    paywallPreloadStart = "paywallPreloadStart",
    paywallPreloadComplete = "paywallPreloadComplete",
    paywallProductsLoadRetry = "paywallProductsLoadRetry",
    surveyResponse = "surveyResponse",
    paywallPresentationRequest = "paywallPresentationRequest",
    touchesBegan = "touchesBegan",
    surveyClose = "surveyClose",
    reset = "reset",
    restoreStart = "restoreStart",
    restoreComplete = "restoreComplete",
    restoreFail = "restoreFail",
    configAttributes = "configAttributes",
    customPlacement = "customPlacement",
    errorThrown = "errorThrown",
    confirmAllAssignments = "confirmAllAssignments",
    configFail = "configFail",
    adServicesTokenRequestStart = "adServicesTokenRequestStart",
    adServicesTokenRequestFail = "adServicesTokenRequestFail",
    adServicesTokenRequestComplete = "adServicesTokenRequestComplete",
    shimmerViewStart = "shimmerViewStart",
    shimmerViewComplete = "shimmerViewComplete",
    redemptionStart = "redemptionStart",
    redemptionComplete = "redemptionComplete",
    redemptionFail = "redemptionFail",
    enrichmentStart = "enrichmentStart",
    enrichmentComplete = "enrichmentComplete",
    enrichmentFail = "enrichmentFail",
    integrationAttributes = "integrationAttributes",
    expressionResult = "expressionResult",
    reviewRequested = "reviewRequested",
    reviewGranted = "reviewGranted",
    reviewDenied = "reviewDenied",
    paywallResourceLoadFail = "paywallResourceLoadFail",
    networkDecodingFail = "networkDecodingFail",
    handleLog = "handleLog",
    testModeModalOpen = "testModeModalOpen",
    testModeModalClose = "testModeModalClose",
    stripeCheckoutStart = "stripeCheckoutStart",
    stripeCheckoutSubmit = "stripeCheckoutSubmit",
    stripeCheckoutComplete = "stripeCheckoutComplete",
    stripeCheckoutFail = "stripeCheckoutFail",
    paywallPageView = "paywallPageView"
}
/**
 * @category Models
 * Page-specific details for a multi-page paywall page view.
 */
export interface PageViewData {
    pageNodeId: string;
    flowPosition: number;
    pageName: string;
    navigationNodeId: string;
    previousPageNodeId?: string;
    previousFlowPosition?: number;
    /** `"entry"` | `"forward"` | `"back"` | `"auto_transition"` */
    navigationType: string;
    timeOnPreviousPageMs?: number;
}
/**
 * @category Events
 * @since 0.0.15
 * Represents a Superwall event with its associated data.
 */
export declare class SuperwallEvent {
    type: EventType | undefined;
    placementName?: string;
    deviceAttributes?: Record<string, any>;
    deepLinkUrl?: string;
    result?: TriggerResult;
    paywallInfo?: PaywallInfo;
    transaction?: StoreTransaction;
    product?: StoreProduct;
    error?: string;
    message?: string;
    triggeredEventName?: string;
    survey?: Survey;
    selectedOption?: SurveyOption;
    customResponse?: string;
    status?: PaywallPresentationRequestStatus;
    reason?: PaywallPresentationRequestStatusReason;
    restoreType?: RestoreType;
    userAttributes?: Record<string, any>;
    audienceFilterParams?: Record<string, any>;
    identifiers?: string[];
    paywallCount?: number;
    count?: number;
    duration?: number;
    url?: string;
    errorMessage?: string;
    userEnrichment?: Record<string, any>;
    deviceEnrichment?: Record<string, any>;
    pageViewData?: PageViewData;
    private constructor();
    static fromJson(json: any): SuperwallEvent;
}
/**
 * @category Types
 * @since 0.0.15
 * Alias for SuperwallEventInfo, representing information about a Superwall placement.
 */
export type SuperwallPlacementInfo = SuperwallEventInfo;
/**
 * @category Types
 * @since 0.0.15
 * Alias for SuperwallEvent, representing a Superwall placement event.
 */
export type SuperwallPlacement = SuperwallEvent;
//# sourceMappingURL=SuperwallEventInfo.d.ts.map