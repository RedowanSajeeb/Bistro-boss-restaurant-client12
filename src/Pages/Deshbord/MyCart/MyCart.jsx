import { FaTrashAlt } from "react-icons/fa";
import Helmett from "../../../Components/Helmet/Helmett";
import useCart from "../../../Hooks/useCart";
import Swal from "sweetalert2";
import SectionTitle from "../../../Components/SectionTitale/SectionTitle";

const MyCart = () => {
  const [cart, refetch] = useCart();
  const totalprice = cart.reduce((sum, items) => items.price + sum, 0);

  const deleteHandelItms = (itms) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/carts/${itms._id}`, {
          method: "delete",
        })
          .then((res) => res.json())
          .then(data => {
             if (data.daletedCount > 0) {
               console.log(data);
               refetch();
               Swal.fire("Deleted!", "Your file has been deleted.", "success");
             }
          })
      }
    });
  };

  return (
    <div className="w-full">
      <Helmett title={"Bistro || My Cart "}></Helmett>
      <SectionTitle
        shortHading={"My Cart"}
        hading={"WANNA ADD MORE?"}
      ></SectionTitle>
      <div className="flex justify-evenly items-center h-24 font-semibold">
        <h1 className="text-3xl uppercase">Total Itms: {cart.length}</h1>
        <h1 className="text-3xl uppercase">Total Price: $ {totalprice}</h1>
        <button className="btn btn-warning btn-sm">Pay</button>
      </div>
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>Food</th>
                <th>Item Name</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item, indx) => (
                <tr key={item._id}>
                  <td>
                    <label>{indx + 1}</label>
                  </td>
                  <td>
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={item.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </td>
                  <td>{item.name}</td>
                  <td className="text-end">$ {item.price}</td>
                  <td>
                    <button
                      onClick={() => deleteHandelItms(item)}
                      className="btn btn-ghost btn-md bg-red-500 text-white"
                    >
                      <FaTrashAlt></FaTrashAlt>{" "}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyCart;
