import { Elements } from "@stripe/react-stripe-js";
import SectionTitle from "../../../Components/SectionTitale/SectionTitle";
import CheckoutForm from "./CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";


const Payment = () => {
    // TODO: pk coming soon
    const stripePromise = loadStripe(import.meta.env.VITE_payment_GatewayOK);
    return (
      <div className="w-1/2">
        <SectionTitle 
          shortHading={"$ PAy BRo"}
          hading={"Payment Gateway"}
        ></SectionTitle>

        <Elements stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      </div>
    );
};

export default Payment;