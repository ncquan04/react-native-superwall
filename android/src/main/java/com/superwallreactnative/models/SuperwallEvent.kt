package com.superwallreactnative.models

import com.facebook.react.bridge.Arguments
import com.facebook.react.bridge.ReadableMap
import com.facebook.react.bridge.ReadableType
import com.superwall.sdk.analytics.superwall.SuperwallEvent
import com.superwall.sdk.paywall.view.webview.messaging.PageViewData
import com.superwall.sdk.store.abstractions.transactions.StoreTransaction

class SuperwallEvent {
  companion object {
    fun toJson(superwallPlacement: SuperwallEvent): ReadableMap {
      val map = Arguments.createMap()
      when (superwallPlacement) {
        is SuperwallEvent.FirstSeen -> map.putString("event", "firstSeen")
        is SuperwallEvent.Reset -> map.putString("event", "reset")
        is SuperwallEvent.Restore.Start -> map.putString("event", "restoreStart")
        is SuperwallEvent.Restore.Complete -> map.putString("event", "restoreComplete")
        is SuperwallEvent.ConfigRefresh -> map.putString("event", "configRefresh")
        is SuperwallEvent.Restore.Fail -> {
          map.putString("event", "restoreFail")
          map.putString("message", superwallPlacement.reason)
        }
        is SuperwallEvent.AppOpen -> map.putString("event", "appOpen")
        is SuperwallEvent.AppLaunch -> map.putString("event", "appLaunch")
        is SuperwallEvent.IdentityAlias -> map.putString("event", "identityAlias")
        is SuperwallEvent.AppInstall -> map.putString("event", "appInstall")
        is SuperwallEvent.SessionStart -> map.putString("event", "sessionStart")
        is SuperwallEvent.DeviceAttributes -> {
          map.putString("event", "deviceAttributes")
          // Assuming this.attributes is a Map<String, Any>
          map.putMap("attributes", convertMapToReadableMap(superwallPlacement.attributes))
        }
        is SuperwallEvent.SubscriptionStatusDidChange -> map.putString("event", "subscriptionStatusDidChange")
        is SuperwallEvent.AppClose -> map.putString("event", "appClose")
        is SuperwallEvent.DeepLink -> {
          map.putString("event", "deepLink")
          map.putString("url", superwallPlacement.uri.toString())
        }
        is SuperwallEvent.TriggerFire -> {
          map.putString("event", "triggerFire")
          map.putString("placementName", superwallPlacement.placementName)
          // Assuming result.toJson() returns Map<String, Any>
          val triggerResult = TriggerResult.toJson(superwallPlacement.result)
          map.putMap("result", triggerResult)
        }
        is SuperwallEvent.PaywallOpen -> {
          map.putString("event", "paywallOpen")
          map.putMap("paywallInfo", superwallPlacement.paywallInfo.toJson())
        }
        is SuperwallEvent.PaywallClose -> {
          map.putString("event", "paywallClose")
          map.putMap("paywallInfo", superwallPlacement.paywallInfo.toJson())
        }
        is SuperwallEvent.PaywallDecline -> {
          map.putString("event", "paywallDecline")
          map.putMap("paywallInfo", superwallPlacement.paywallInfo.toJson())
        }
        is SuperwallEvent.TransactionStart -> {
          map.putString("event", "transactionStart")
          map.putMap("product", superwallPlacement.product.toJson())
          map.putMap("paywallInfo", superwallPlacement.paywallInfo.toJson())
        }
        is SuperwallEvent.TransactionFail -> {
          map.putString("event", "transactionFail")
          map.putString("error", superwallPlacement.error.localizedMessage ?: "Error message unavailable")
          map.putMap("paywallInfo", superwallPlacement.paywallInfo.toJson())
        }
        is SuperwallEvent.TransactionAbandon -> {
          map.putString("event", "transactionAbandon")
          // Assuming this.product.toJson() returns a Map<String, Any>
          map.putMap("product", superwallPlacement.product.toJson())
          map.putMap("paywallInfo", superwallPlacement.paywallInfo.toJson())
        }
        is SuperwallEvent.TransactionComplete -> {
          map.putString("event", "transactionComplete")
          // Assuming this.product.toJson() returns a Map<String, Any>
          map.putMap("product", superwallPlacement.product.toJson())
          map.putMap("paywallInfo", superwallPlacement.paywallInfo.toJson())

          val transaction = superwallPlacement.transaction as? StoreTransaction
          transaction?.toJson()?.let {
            // Assuming transaction.toJson() returns a Map<String, Any>
            map.putMap("transaction", it)
          }
        }
        is SuperwallEvent.SubscriptionStart -> {
          map.putString("event", "subscriptionStart")
          map.putMap("product", superwallPlacement.product.toJson())
          map.putMap("paywallInfo", superwallPlacement.paywallInfo.toJson())
        }
        is SuperwallEvent.FreeTrialStart -> {
          map.putString("event", "freeTrialStart")
          map.putMap("product", superwallPlacement.product.toJson())
          map.putMap("paywallInfo", superwallPlacement.paywallInfo.toJson())
        }
        is SuperwallEvent.TransactionRestore -> {
          map.putString("event", "transactionRestore")
          map.putMap("restoreType", superwallPlacement.restoreType.toJson())
          map.putMap("paywallInfo", superwallPlacement.paywallInfo.toJson())
        }
        is SuperwallEvent.TransactionTimeout -> {
          map.putString("event", "transactionTimeout")
          map.putMap("paywallInfo", superwallPlacement.paywallInfo.toJson())
        }
        is SuperwallEvent.UserAttributes -> {
          map.putString("event", "userAttributes")
          map.putMap("attributes", convertMapToReadableMap(superwallPlacement.attributes))
        }
        is SuperwallEvent.NonRecurringProductPurchase -> {
          map.putString("event", "nonRecurringProductPurchase")
          map.putMap("product", superwallPlacement.product.toJson())
          map.putMap("paywallInfo", superwallPlacement.paywallInfo.toJson())
        }
        is SuperwallEvent.PaywallResponseLoadStart -> {
          map.putString("event", "paywallResponseLoadStart")
          map.putString("triggeredPlacementName", superwallPlacement.triggeredPlacementName ?: "")
        }
        is SuperwallEvent.PaywallResponseLoadNotFound -> {
          map.putString("event", "paywallResponseLoadNotFound")
          map.putString("triggeredPlacementName", superwallPlacement.triggeredPlacementName ?: "")
        }
        is SuperwallEvent.PaywallResponseLoadFail -> {
          map.putString("event", "paywallResponseLoadFail")
          map.putString("triggeredPlacementName", superwallPlacement.triggeredPlacementName ?: "")
        }
        is SuperwallEvent.PaywallResponseLoadComplete -> {
          map.putString("event", "paywallResponseLoadComplete")
          map.putString("triggeredPlacementName", superwallPlacement.triggeredPlacementName ?: "")
          map.putMap("paywallInfo", superwallPlacement.paywallInfo.toJson())
        }
        is SuperwallEvent.PaywallWebviewLoadStart -> {
          map.putString("event", "paywallWebviewLoadStart")
          map.putMap("paywallInfo", superwallPlacement.paywallInfo.toJson())
        }
        is SuperwallEvent.PaywallWebviewLoadFail -> {
          map.putString("event", "paywallWebviewLoadFail")
          map.putMap("paywallInfo", superwallPlacement.paywallInfo.toJson())
        }
        is SuperwallEvent.PaywallWebviewLoadComplete -> {
          map.putString("event", "paywallWebviewLoadComplete")
          map.putMap("paywallInfo", superwallPlacement.paywallInfo.toJson())
        }
        is SuperwallEvent.PaywallWebviewLoadTimeout -> {
          map.putString("event", "paywallWebviewLoadTimeout")
          map.putMap("paywallInfo", superwallPlacement.paywallInfo.toJson())
        }
        is SuperwallEvent.PaywallProductsLoadStart -> {
          map.putString("event", "paywallProductsLoadStart")
          map.putString("triggeredPlacementName", superwallPlacement.triggeredPlacementName ?: "")
          map.putMap("paywallInfo", superwallPlacement.paywallInfo.toJson())
        }
        is SuperwallEvent.PaywallProductsLoadFail -> {
          map.putString("event", "paywallProductsLoadFail")
          map.putString("triggeredPlacementName", superwallPlacement.triggeredPlacementName ?: "")
          map.putMap("paywallInfo", superwallPlacement.paywallInfo.toJson())
        }
        is SuperwallEvent.PaywallProductsLoadComplete -> {
          map.putString("event", "paywallProductsLoadComplete")
          map.putString("triggeredPlacementName", superwallPlacement.triggeredPlacementName ?: "")
        }
        is SuperwallEvent.SurveyResponse -> {
          map.putString("event", "surveyResponse")
          // Assuming survey.toJson() and selectedOption.toJson() return Map<String, Any>
          map.putMap("survey", superwallPlacement.survey.toJson())
          map.putMap("selectedOption", superwallPlacement.selectedOption.toJson())
          map.putString("customResponse", superwallPlacement.customResponse ?: "")
          map.putMap("paywallInfo", superwallPlacement.paywallInfo.toJson())
        }
        is SuperwallEvent.PaywallPresentationRequest -> {
          map.putString("event", "paywallPresentationRequest")
          // Assuming status.toJson() returns Map<String, Any>
          map.putMap("status", superwallPlacement.status.toJson())
          superwallPlacement.reason?.toJson()?.let {
            map.putMap("reason", it)
          }
        }
        is SuperwallEvent.SurveyClose -> {
          map.putString("event", "surveyClose")
        }
        is SuperwallEvent.ConfigAttributes -> {
          map.putString("event", "configAttributes")
        }
        is SuperwallEvent.CustomPlacement -> {
          map.putString("event", "customPlacement")
          map.putString("name", superwallPlacement.placementName)
          map.putMap("params", convertMapToReadableMap(superwallPlacement.params))
          map.putMap("paywallInfo", superwallPlacement.paywallInfo.toJson())
        }
        is SuperwallEvent.PaywallWebviewLoadFallback -> {
          map.putString("event", "paywallWebviewLoadFallback")
          map.putMap("paywallInfo", superwallPlacement.paywallInfo.toJson())
        }
        is SuperwallEvent.ConfigFail -> {
          map.putString("event", "configFail")
        }
        is SuperwallEvent.ConfirmAllAssignments -> {
          map.putString("event", "confirmAllAssignments")
        }
        is SuperwallEvent.PaywallResourceLoadFail -> {
          map.putString("event", "paywallResourceLoadFail")
          map.putString("url", superwallPlacement.url.toString())
          map.putString("error", superwallPlacement.error)
        }
        is SuperwallEvent.ShimmerViewComplete -> {
          map.putString("event", "shimmerViewComplete")
          map.putDouble("duration", superwallPlacement.duration)
        }
        is SuperwallEvent.ShimmerViewStart -> {
          map.putString("event", "shimmerViewStart")
        }
        is SuperwallEvent.EnrichmentStart -> {
          map.putString("event", "enrichmentStart")
        }
        is SuperwallEvent.EnrichmentComplete -> {
          map.putString("event", "enrichmentComplete")
          map.putMap("userEnrichment", convertMapToReadableMap(superwallPlacement.userEnrichment))
          map.putMap("deviceEnrichment", convertMapToReadableMap(superwallPlacement.deviceEnrichment))
        }
        is SuperwallEvent.EnrichmentFail -> {
          map.putString("event", "enrichmentFail")
        }
        is SuperwallEvent.ErrorThrown -> {
          map.putString("event", "errorThrown")
        }
        is SuperwallEvent.RedemptionStart -> {
          map.putString("event", "redemptionStart")
        }
        is SuperwallEvent.RedemptionComplete -> {
          map.putString("event", "redemptionComplete")
        }
        is SuperwallEvent.RedemptionFail -> {
          map.putString("event", "redemptionFail")
        }
        is SuperwallEvent.PaywallPreloadStart -> {
          map.putString("event", "paywallPreloadStart")
          map.putInt("paywallCount", superwallPlacement.paywallCount)
        }
        is SuperwallEvent.PaywallPreloadComplete -> {
          map.putString("event", "paywallPreloadComplete")
          map.putInt("paywallCount", superwallPlacement.paywallCount)
        }
        is SuperwallEvent.IntegrationProps -> {
          map.putString("event", "integrationAttributes")
          map.putMap(
            "audienceFilterParams",
            convertMapToReadableMap(superwallPlacement.audienceFilterParams)
          )
        }
        is SuperwallEvent.IntegrationAttributes -> {
          map.putString("event", "integrationAttributes")
          map.putMap(
            "audienceFilterParams",
            convertMapToReadableMap(superwallPlacement.audienceFilterParams)
          )
        }
        is SuperwallEvent.ExpressionResult -> {
          map.putString("event", "expressionResult")
        }
        is SuperwallEvent.ReviewRequested -> {
          map.putString("event", "reviewRequested")
          map.putInt("count", superwallPlacement.count)
        }
        is SuperwallEvent.ReviewGranted -> {
          map.putString("event", "reviewGranted")
          map.putInt("count", superwallPlacement.count)
        }
        is SuperwallEvent.ReviewDenied -> {
          map.putString("event", "reviewDenied")
          map.putInt("count", superwallPlacement.count)
        }
        is SuperwallEvent.CustomerInfoDidChange -> {
          map.putString("event", "customerInfoDidChange")
        }
        is SuperwallEvent.PermissionRequested -> {
          map.putString("event", "permissionRequested")
          map.putString("permissionName", superwallPlacement.permissionName)
          map.putString("paywallIdentifier", superwallPlacement.paywallIdentifier)
        }
        is SuperwallEvent.PermissionGranted -> {
          map.putString("event", "permissionGranted")
          map.putString("permissionName", superwallPlacement.permissionName)
          map.putString("paywallIdentifier", superwallPlacement.paywallIdentifier)
        }
        is SuperwallEvent.PermissionDenied -> {
          map.putString("event", "permissionDenied")
          map.putString("permissionName", superwallPlacement.permissionName)
          map.putString("paywallIdentifier", superwallPlacement.paywallIdentifier)
        }
        is SuperwallEvent.PaywallPageView -> {
          map.putString("event", "paywallPageView")
          map.putMap("paywallInfo", superwallPlacement.paywallInfo.toJson())
          map.putMap("data", pageViewDataToJson(superwallPlacement.data))
        }
        is SuperwallEvent.TestModeModalOpen -> {
          map.putString("event", "testModeModalOpen")
        }
        is SuperwallEvent.TestModeModalClose -> {
          map.putString("event", "testModeModalClose")
        }
        // Backstop: SDK phát event mới nhanh hơn bridge này. Luôn phải có key
        // "event" — bỏ trống thì SuperwallEvent.fromJson phía JS nhận undefined.
        // rawName là snake_case nên JS rơi vào default (chỉ warn, không throw).
        else -> map.putString("event", superwallPlacement.rawName)
      }
      return map
    }
  }
}

fun pageViewDataToJson(data: PageViewData): ReadableMap {
  val map = Arguments.createMap()
  map.putString("pageNodeId", data.pageNodeId)
  map.putInt("flowPosition", data.flowPosition)
  map.putString("pageName", data.pageName)
  map.putString("navigationNodeId", data.navigationNodeId)
  map.putString("previousPageNodeId", data.previousPageNodeId)
  data.previousFlowPosition?.let { map.putInt("previousFlowPosition", it) }
    ?: map.putNull("previousFlowPosition")
  map.putString("navigationType", data.navigationType)
  data.timeOnPreviousPageMs?.let { map.putInt("timeOnPreviousPageMs", it) }
    ?: map.putNull("timeOnPreviousPageMs")
  return map
}

fun convertMapToReadableMap(map: Map<String, Any?>): ReadableMap {
  val readableMap = Arguments.createMap()
  map.forEach { (key, value) ->
    when (value) {
      is String -> readableMap.putString(key, value)
      is Boolean -> readableMap.putBoolean(key, value)
      is Double -> readableMap.putDouble(key, value)
      is Int -> readableMap.putInt(key, value)
      is Map<*, *> -> {
        @Suppress("UNCHECKED_CAST")
        readableMap.putMap(key, convertMapToReadableMap(value as Map<String, Any?>))
      }
      else -> if (value == null) {
        readableMap.putNull(key)
      } // You can handle other types here if necessary
    }
  }
  return readableMap
}

fun convertReadableMapToMap(readableMap: ReadableMap): Map<String, Any?> {
  val map: MutableMap<String, Any?> = HashMap()
  val iterator = readableMap.keySetIterator()
  while (iterator.hasNextKey()) {
    val key = iterator.nextKey()
    when (val value = readableMap.getType(key)) {
      ReadableType.String -> map[key] = readableMap.getString(key)
      ReadableType.Boolean -> map[key] = readableMap.getBoolean(key)
      ReadableType.Number -> map[key] = readableMap.getDouble(key)
      ReadableType.Map -> map[key] = convertReadableMapToMap(readableMap.getMap(key)!!)
      ReadableType.Null -> map[key] = null
      else -> {}
    }
  }
  return map
}
