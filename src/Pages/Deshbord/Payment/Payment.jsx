import { Elements } from "@stripe/react-stripe-js";
import SectionTitle from "../../../Components/SectionTitale/SectionTitle";
import CheckoutForm from "./CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";
import useCart from "../../../Hooks/useCart";


const Payment = () => {


  const [cart] = useCart();

  const totalPrice = cart.reduce((sum, items) => items.price + sum, 0);
  const price = parseFloat(totalPrice.toFixed(2));

    // 
    const stripePromise = loadStripe(import.meta.env.VITE_payment_GatewayOK);
    return (
      <div className="w-1/2">
        <SectionTitle
          shortHading={"$ PAy BRo"}
          hading={"Payment Gateway"}
        ></SectionTitle>

        <Elements stripe={stripePromise}>
          <CheckoutForm price={price} />
        </Elements>
      </div>
    );
};

export default Payment;