package expo.modules.webview
import com.redsys.tpvvinapplibrary.TPVVConfiguration
import com.redsys.tpvvinapplibrary.IPaymentResult
import com.redsys.tpvvinapplibrary.ResultResponse
import com.redsys.tpvvinapplibrary.ErrorResponse
import com.redsys.tpvvinapplibrary.TPVV
import com.redsys.tpvvinapplibrary.TPVVConstants
import android.content.Context
import android.webkit.WebView
import android.webkit.WebViewClient
import expo.modules.kotlin.AppContext
import expo.modules.kotlin.viewevent.EventDispatcher
import expo.modules.kotlin.views.ExpoView

class ExpoWebView(context: Context, appContext: AppContext) : ExpoView(context, appContext) {
  private val onLoad by EventDispatcher()

  init{
    TPVVConfiguration.setLicense("sq7HjrUOBfKmC576ILgskD5srU870gJ7");
    TPVVConfiguration.setEnvironment(TPVVConstants.ENVIRONMENT_TEST);
    TPVVConfiguration.setFuc("999008881");
    TPVVConfiguration.setTerminal("001");
    TPVVConfiguration.setCurrency("978");

    TPVV.doWebViewPayment(
      context, "1234567", 3050.0,TPVVConstants.PAYMENT_TYPE_NORMAL, null, "Descripcion", null, 
            object : IPaymentResult {
                override fun paymentResultOK(response: ResultResponse) {
                    // Manejar el resultado exitoso del pago
                }

                override fun paymentResultKO(error: ErrorResponse) {
                    // Manejar el error del pago
                }
            }
        )
  }

}
