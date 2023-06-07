import Helmett from "../../../Components/Helmet/Helmett";
import useCart from "../../../Hooks/useCart";


const MyCart = () => {
    const [cart] = useCart()
    const totalprice = cart.reduce(( sum , items) => items.price + sum,0)
    return (
      <div>
        <Helmett title={"Bistro || My Cart "}></Helmett>
        <div>
          <h1 className="text-3xl uppercase">Total Itms: {cart.length}</h1>
          <h1 className="text-3xl uppercase">Total Price: $ {totalprice}</h1>
          <button className="btn btn-warning btn-sm">Pay</button>
        </div>
      </div>
    );
};

export default MyCart;