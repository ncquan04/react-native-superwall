import { PaywallInfo } from "./PaywallInfo";
import { PaywallPresentationRequestStatus, PaywallPresentationRequestStatusReason } from "./PaywallPresentationRequestStatus";
import { StoreProduct } from "./StoreProduct";
import { StoreTransaction } from "./StoreTransaction";
import { Survey, SurveyOption } from "./Survey";
import { TriggerResult } from "./TriggerResult";

/**
 * @category Events
 * @since 0.0.15
 * Contains information about a Superwall event.
 */
export class SuperwallEventInfo {
  constructor(event, params) {
    this.event = event;
    this.params = params;
  }
  static fromJson(json) {
    return new SuperwallEventInfo(SuperwallEvent.fromJson(json.event), json.params);
  }
}

/**
 * @category Enums
 * @since 0.0.15
 * Enum representing the types of Superwall events.
 */
export let EventType = /*#__PURE__*/function (EventType) {
  EventType["firstSeen"] = "firstSeen";
  EventType["configRefresh"] = "configRefresh";
  EventType["appOpen"] = "appOpen";
  EventType["appLaunch"] = "appLaunch";
  EventType["identityAlias"] = "identityAlias";
  EventType["appInstall"] = "appInstall";
  EventType["sessionStart"] = "sessionStart";
  EventType["deviceAttributes"] = "deviceAttributes";
  EventType["subscriptionStatusDidChange"] = "subscriptionStatusDidChange";
  EventType["appClose"] = "appClose";
  EventType["deepLink"] = "deepLink";
  EventType["triggerFire"] = "triggerFire";
  EventType["paywallOpen"] = "paywallOpen";
  EventType["paywallClose"] = "paywallClose";
  EventType["paywallDecline"] = "paywallDecline";
  EventType["transactionStart"] = "transactionStart";
  EventType["transactionFail"] = "transactionFail";
  EventType["transactionAbandon"] = "transactionAbandon";
  EventType["transactionComplete"] = "transactionComplete";
  EventType["subscriptionStart"] = "subscriptionStart";
  EventType["freeTrialStart"] = "freeTrialStart";
  EventType["transactionRestore"] = "transactionRestore";
  EventType["transactionTimeout"] = "transactionTimeout";
  EventType["userAttributes"] = "userAttributes";
  EventType["nonRecurringProductPurchase"] = "nonRecurringProductPurchase";
  EventType["paywallResponseLoadStart"] = "paywallResponseLoadStart";
  EventType["paywallResponseLoadNotFound"] = "paywallResponseLoadNotFound";
  EventType["paywallResponseLoadFail"] = "paywallResponseLoadFail";
  EventType["paywallResponseLoadComplete"] = "paywallResponseLoadComplete";
  EventType["paywallWebviewLoadStart"] = "paywallWebviewLoadStart";
  EventType["paywallWebviewLoadFail"] = "paywallWebviewLoadFail";
  EventType["paywallWebviewLoadComplete"] = "paywallWebviewLoadComplete";
  EventType["paywallWebviewLoadTimeout"] = "paywallWebviewLoadTimeout";
  EventType["paywallWebviewLoadFallback"] = "paywallWebviewLoadFallback";
  EventType["paywallProductsLoadStart"] = "paywallProductsLoadStart";
  EventType["paywallProductsLoadFail"] = "paywallProductsLoadFail";
  EventType["paywallProductsLoadComplete"] = "paywallProductsLoadComplete";
  EventType["paywallWebviewProcessTerminated"] = "paywallWebviewProcessTerminated";
  EventType["paywallProductsLoadMissingProducts"] = "paywallProductsLoadMissingProducts";
  EventType["paywallPreloadStart"] = "paywallPreloadStart";
  EventType["paywallPreloadComplete"] = "paywallPreloadComplete";
  EventType["paywallProductsLoadRetry"] = "paywallProductsLoadRetry";
  EventType["surveyResponse"] = "surveyResponse";
  EventType["paywallPresentationRequest"] = "paywallPresentationRequest";
  EventType["touchesBegan"] = "touchesBegan";
  EventType["surveyClose"] = "surveyClose";
  EventType["reset"] = "reset";
  EventType["restoreStart"] = "restoreStart";
  EventType["restoreComplete"] = "restoreComplete";
  EventType["restoreFail"] = "restoreFail";
  EventType["configAttributes"] = "configAttributes";
  EventType["customPlacement"] = "customPlacement";
  EventType["errorThrown"] = "errorThrown";
  EventType["confirmAllAssignments"] = "confirmAllAssignments";
  EventType["configFail"] = "configFail";
  EventType["adServicesTokenRequestStart"] = "adServicesTokenRequestStart";
  EventType["adServicesTokenRequestFail"] = "adServicesTokenRequestFail";
  EventType["adServicesTokenRequestComplete"] = "adServicesTokenRequestComplete";
  EventType["shimmerViewStart"] = "shimmerViewStart";
  EventType["shimmerViewComplete"] = "shimmerViewComplete";
  EventType["redemptionStart"] = "redemptionStart";
  EventType["redemptionComplete"] = "redemptionComplete";
  EventType["redemptionFail"] = "redemptionFail";
  EventType["enrichmentStart"] = "enrichmentStart";
  EventType["enrichmentComplete"] = "enrichmentComplete";
  EventType["enrichmentFail"] = "enrichmentFail";
  EventType["integrationAttributes"] = "integrationAttributes";
  EventType["expressionResult"] = "expressionResult";
  EventType["reviewRequested"] = "reviewRequested";
  EventType["reviewGranted"] = "reviewGranted";
  EventType["reviewDenied"] = "reviewDenied";
  EventType["paywallResourceLoadFail"] = "paywallResourceLoadFail";
  EventType["networkDecodingFail"] = "networkDecodingFail";
  EventType["handleLog"] = "handleLog";
  EventType["testModeModalOpen"] = "testModeModalOpen";
  EventType["testModeModalClose"] = "testModeModalClose";
  EventType["stripeCheckoutStart"] = "stripeCheckoutStart";
  EventType["stripeCheckoutSubmit"] = "stripeCheckoutSubmit";
  EventType["stripeCheckoutComplete"] = "stripeCheckoutComplete";
  EventType["stripeCheckoutFail"] = "stripeCheckoutFail";
  EventType["paywallPageView"] = "paywallPageView";
  return EventType;
}({});

/**
 * @category Models
 * Page-specific details for a multi-page paywall page view.
 */

/**
 * @category Events
 * @since 0.0.15
 * Represents a Superwall event with its associated data.
 */
export class SuperwallEvent {
  constructor(options) {
    Object.assign(this, options);
  }
  static fromJson(json) {
    const eventType = EventType[json.event];

    // Example for one case, replicate logic for other cases as needed
    switch (eventType) {
      case EventType.configRefresh:
      case EventType.firstSeen:
      case EventType.appOpen:
      case EventType.appLaunch:
      case EventType.identityAlias:
      case EventType.appInstall:
      case EventType.sessionStart:
      case EventType.appClose:
      case EventType.touchesBegan:
      case EventType.surveyClose:
      case EventType.reset:
      case EventType.restoreStart:
      case EventType.restoreComplete:
      case EventType.configAttributes:
      case EventType.configFail:
      case EventType.adServicesTokenRequestStart:
      case EventType.errorThrown:
      case EventType.confirmAllAssignments:
      case EventType.shimmerViewStart:
      case EventType.subscriptionStatusDidChange:
      case EventType.enrichmentFail:
      case EventType.networkDecodingFail:
      case EventType.expressionResult:
      case EventType.testModeModalOpen:
      case EventType.testModeModalClose:
        return new SuperwallEvent({
          type: eventType
        });
      case EventType.shimmerViewComplete:
        return new SuperwallEvent({
          type: eventType,
          duration: json.duration
        });
      case EventType.restoreFail:
        return new SuperwallEvent({
          type: eventType,
          message: json.message
        });
      case EventType.deviceAttributes:
        return new SuperwallEvent({
          type: eventType,
          deviceAttributes: json.attributes
        });
      case EventType.deepLink:
        return new SuperwallEvent({
          type: eventType,
          deepLinkUrl: json.url
        });
      case EventType.triggerFire:
        return new SuperwallEvent({
          type: eventType,
          placementName: eventType,
          // TODO: This seems incorrect, should be json.eventName or similar
          result: TriggerResult.fromJson(json.result)
        });
      case EventType.paywallOpen:
      case EventType.paywallClose:
      case EventType.paywallDecline:
      case EventType.transactionRestore: // Note: transactionRestore was duplicated, keeping one
      case EventType.paywallWebviewLoadStart:
      case EventType.paywallWebviewLoadComplete:
      case EventType.paywallWebviewLoadTimeout:
      case EventType.paywallWebviewLoadFallback:
      case EventType.paywallWebviewProcessTerminated:
        return new SuperwallEvent({
          type: eventType,
          paywallInfo: PaywallInfo.fromJson(json.paywallInfo)
        });
      case EventType.paywallProductsLoadMissingProducts:
        return new SuperwallEvent({
          type: eventType,
          triggeredEventName: json.triggeredEventName,
          paywallInfo: PaywallInfo.fromJson(json.paywallInfo),
          identifiers: json.identifiers
        });
      case EventType.paywallPreloadStart:
      case EventType.paywallPreloadComplete:
        return new SuperwallEvent({
          type: eventType,
          paywallCount: json.paywallCount
        });
      case EventType.paywallWebviewLoadFail:
        return new SuperwallEvent({
          type: eventType,
          paywallInfo: PaywallInfo.fromJson(json.paywallInfo),
          errorMessage: json.errorMessage
        });
      case EventType.transactionStart:
      case EventType.transactionAbandon:
      case EventType.subscriptionStart:
      case EventType.freeTrialStart:
      case EventType.nonRecurringProductPurchase:
        return new SuperwallEvent({
          type: eventType,
          product: StoreProduct.fromJson(json.product),
          paywallInfo: PaywallInfo.fromJson(json.paywallInfo)
        });
      case EventType.transactionFail:
        return new SuperwallEvent({
          type: eventType,
          error: json.error,
          paywallInfo: PaywallInfo.fromJson(json.paywallInfo)
        });
      case EventType.transactionComplete:
        return new SuperwallEvent({
          type: eventType,
          transaction: json.transaction ? StoreTransaction.fromJson(json.transaction) : undefined,
          product: StoreProduct.fromJson(json.product),
          paywallInfo: PaywallInfo.fromJson(json.paywallInfo)
        });
      // case EventType.transactionRestore: // Already handled above
      //   return new SuperwallEvent({
      //     type: eventType,
      //     restoreType: RestoreType.fromJson(json.restoreType),
      //     paywallInfo: PaywallInfo.fromJson(json.paywallInfo),
      //   });
      case EventType.userAttributes:
        return new SuperwallEvent({
          type: eventType,
          userAttributes: json.attributes
        });
      case EventType.paywallResponseLoadStart:
      case EventType.paywallResponseLoadNotFound:
      case EventType.paywallResponseLoadFail:
        return new SuperwallEvent({
          type: eventType,
          triggeredEventName: json.triggeredEventName
        });
      case EventType.paywallResponseLoadComplete:
      case EventType.paywallProductsLoadStart:
      case EventType.paywallProductsLoadComplete:
        return new SuperwallEvent({
          type: eventType,
          triggeredEventName: json.triggeredEventName // Assuming this should be based on json.paywallInfo or similar
        });
      case EventType.paywallProductsLoadFail:
        return new SuperwallEvent({
          type: eventType,
          triggeredEventName: json.triggeredEventName,
          errorMessage: json.errorMessage
        });
      case EventType.paywallProductsLoadRetry:
        return new SuperwallEvent({
          type: eventType,
          paywallInfo: PaywallInfo.fromJson(json.paywallInfo),
          triggeredEventName: json.triggeredEventName,
          attempt: json.attempt
        });
      case EventType.surveyResponse:
        return new SuperwallEvent({
          type: eventType,
          survey: Survey.fromJson(json.survey),
          selectedOption: SurveyOption.fromJson(json.selectedOption),
          customResponse: json.customResponse,
          paywallInfo: PaywallInfo.fromJson(json.paywallInfo)
        });
      case EventType.paywallPresentationRequest:
        return new SuperwallEvent({
          type: eventType,
          status: PaywallPresentationRequestStatus.fromJson(json.status),
          reason: json.reason ? PaywallPresentationRequestStatusReason.fromJson(json.reason) : undefined
        });
      case EventType.customPlacement:
        return new SuperwallEvent({
          type: eventType,
          name: json.name,
          params: json.params,
          paywallInfo: PaywallInfo.fromJson(json.paywallInfo)
        });
      case EventType.adServicesTokenRequestFail:
        return new SuperwallEvent({
          type: eventType,
          error: json.error
        });
      case EventType.adServicesTokenRequestComplete:
        return new SuperwallEvent({
          type: eventType,
          token: json.token
        });
      case EventType.transactionTimeout:
        return new SuperwallEvent({
          type: eventType,
          paywallInfo: PaywallInfo.fromJson(json.paywallInfo)
        });
      // case EventType.shimmerViewComplete: // Already handled
      //   return new SuperwallEvent({ type: eventType });
      case EventType.redemptionStart:
        return new SuperwallEvent({
          type: eventType
        });
      case EventType.redemptionComplete:
        return new SuperwallEvent({
          type: eventType
        });
      // Potentially add redemption info
      case EventType.redemptionFail:
        return new SuperwallEvent({
          type: eventType
        });
      // Potentially add error info
      case EventType.enrichmentStart:
        return new SuperwallEvent({
          type: eventType
        });
      case EventType.handleLog:
        // Consider adding log parameters
        return new SuperwallEvent({
          type: eventType
        });
      case EventType.enrichmentComplete:
        return new SuperwallEvent({
          type: eventType,
          userEnrichment: json.userEnrichment,
          deviceEnrichment: json.deviceEnrichment
        });
      case EventType.integrationAttributes:
        return new SuperwallEvent({
          type: eventType,
          audienceFilterParams: json.audienceFilterParams
        });
      case EventType.reviewRequested:
      case EventType.reviewGranted:
      case EventType.reviewDenied:
        return new SuperwallEvent({
          type: eventType,
          count: json.count
        });
      case EventType.paywallResourceLoadFail:
        return new SuperwallEvent({
          type: eventType,
          url: json.url,
          error: json.error
        });
      case EventType.stripeCheckoutStart:
      case EventType.stripeCheckoutSubmit:
      case EventType.stripeCheckoutComplete:
      case EventType.stripeCheckoutFail:
        return new SuperwallEvent({
          type: eventType,
          paywallInfo: PaywallInfo.fromJson(json.paywallInfo)
        });
      case EventType.paywallPageView:
        return new SuperwallEvent({
          type: eventType,
          paywallInfo: PaywallInfo.fromJson(json.paywallInfo),
          pageViewData: json.data
        });
      default:
        console.warn(`[Superwall] Unhandled event type in SuperwallEvent.fromJson: ${json.event}`);
        return new SuperwallEvent({
          type: eventType
        });
      // Fallback for unhandled but known types
      // For truly unknown types, an error might be more appropriate:
      // throw new Error(`Invalid event type: ${json.event}`);
    }
  }
}

/**
 * @category Types
 * @since 0.0.15
 * Alias for SuperwallEventInfo, representing information about a Superwall placement.
 */

/**
 * @category Types
 * @since 0.0.15
 * Alias for SuperwallEvent, representing a Superwall placement event.
 */
//# sourceMappingURL=SuperwallEventInfo.js.map