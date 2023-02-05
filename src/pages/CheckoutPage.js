import {useState, useEffect, useRef} from 'react'

  export default function CheckoutPage(){
    
const [paid, setPaid] = useState(false);
const [error, setError] = useState(null);

const paypalRef = useRef();

useEffect(() => {
    window.paypal
      .Buttons({
        createOrder: (data, actions) => {
          return actions.order.create({
            intent: "CAPTURE",
            purchase_units: [
              {
                description: "Your description",
                amount: {
                  currency_code: "INR",
                  value: 500.0,
                },
              },
            ],
          });
        },
        onApprove: async (data, actions) => {
          const order = await actions.order.capture();
          setPaid(true);
          console.log(order);
        },
        onError: (err) => {
        //   setError(err),
          console.error(err);
        },
      })
      .render(paypalRef.current);
  }, []);

  if (paid) {
    return <div>Payment successful.!</div>;
  }

  // If any error occurs
  if (error) {
    return <div>Error Occurred in processing payment.! Please try again.</div>;
  }

  /*{(checkout === true) 
    ? <div className="payment-div">
      <ReactPayPal 
        total={500}
      />
    </div> 
  
    :<div>
      <h1>React-PayPal</h1>
      <button onClick={() => {setCheckout(true)}} className="checkout-button">Checkout</button>
    </div>
  }*/

    return(
        <div>
            This is a holder for CheckoutPage.js navigation.   
        </div>

     
    )
}