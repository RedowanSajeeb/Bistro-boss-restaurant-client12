import { FaTrashAlt } from "react-icons/fa";
import SectionTitle from "../../../Components/SectionTitale/SectionTitle";
import useManu from "../../../Hooks/useManu";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const ManageItems = () => {
  const [manu, , refetch] = useManu();
  const [axiosSecure] = useAxiosSecure();
  const deleteHandelItms = (item) => {
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
        axiosSecure.delete(`/menu/${item._id}`).then((res) => {
          console.log("deleted successfully", res.data);
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire("Deleted!", "Itms has been deleted.", "success");
          }
        });
      }
    });
  };
  return (
    <div className="w-full">
      <SectionTitle
        hading={"MANAGE ALL ITEMS"}
        shortHading={"Hurry Up!"}
      ></SectionTitle>

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>##</th>
              <th>ITEM</th>
              <th>Name</th>
              <th>PRICE</th>
              <th>ACTION</th>
              <th>Dlt A</th>
            </tr>
          </thead>
          <tbody>
            {manu.map((i, indx) => (
              <tr key={i._id}>
                <td>{indx + 1}</td>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={i.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{i.category}</div>
                    </div>
                  </div>
                </td>
                <td>{i.name}</td>
                <td className="text-right">$ {i.price}</td>
                <td>
                  <button className="btn btn-ghost btn-xs">edit</button>
                </td>
                <td>
                  <button
                    onClick={() => deleteHandelItms(i)}
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
  );
};

export default ManageItems;
