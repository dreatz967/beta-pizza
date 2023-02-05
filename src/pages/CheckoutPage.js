import { loadScript } from "@paypal/paypal-js";

let paypal;

try {
    paypal = await loadScript({ "client-id": "test" });
} catch (error) {
    console.error("failed to load the PayPal JS SDK script", error);
}

if (paypal) {
    try {
        await paypal.Buttons().render("#your-container-element");
    } catch (error) {
        console.error("failed to render the PayPal Buttons", error);
    }
}

paypal.Buttons({
    style: {
      layout: 'vertical',
      color:  'blue',
      shape:  'rect',
      label:  'paypal'
    }
  }).render('#paypal-button-container');


export default function CheckoutPage(){
    return(
        <div>
            This is a holder for CheckoutPage.js navigation.   
        </div>

     
    )
}