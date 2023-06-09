import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useState } from "react";


const CheckoutForm = () => {
    const stripe = useStripe()
    const elements = useElements()
const [cardError,SetCardError]= useState('')
  const handleSubmit = async (event) => {
    // Block native form submission.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.
    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

     const { error, paymentMethod } = await stripe.createPaymentMethod({
       type: "card",
       card,
     });

     if (error) {
       console.log("[error]", error);
       SetCardError(error.message);
      //  console.log(error.code);
     } else {
      SetCardError('')
       console.log("[PaymentMethod]", paymentMethod);
     }

  }
      

    
  
   
    return (
      <div>
      
        <form onSubmit={handleSubmit}>
          <CardElement
            options={{
              style: {
                base: {
                  fontSize: "16px",
                  color: "#424770",
                  "::placeholder": {
                    color: "#aab7c4",
                  },
                },
                invalid: {
                  color: "#9e2146",
                },
              },
            }}
          />
          <button
            className="btn btn-warning mt-5 btn-sm"
            type="submit"
            disabled={!stripe}
          >
            Pay
          </button>
        </form>
        {
          cardError && <p className="text-red-500 text-2xl">{cardError}</p>
        }
      </div>
    );
};

export default CheckoutForm;