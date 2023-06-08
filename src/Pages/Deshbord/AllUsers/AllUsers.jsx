import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../../Components/SectionTitale/SectionTitle";
import Helmett from "../../../Components/Helmet/Helmett";
import { FaTrashAlt, FaUserShield } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";


const AllUsers = () => {

  //1
    const [axiosSecure] = useAxiosSecure()

    const {data: users =[], refetch} = useQuery(["users"], async () => {
        const res = await axiosSecure.get("/users");
        return res.data;

    });


     const handelMakeAdmin = user =>{

        fetch(`http://localhost:3000/users/admin/${user._id}`, {
          method: "PATCH",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.modifiedCount) {
              refetch();
              Swal.fire({
                position: "top-center",
                icon: "success",
                title: `${user.name} is an now authenticated!`,
                showConfirmButton: false,
                timer: 1500,
              });
            }
          });

     }

     
    const handelDleate =  (user) =>{        
         fetch(`http://localhost:3000/users/${user._id}`, {
           method: "DELETE",
         })
           .then((res) => res.json())
           .then((data) => {
            refetch();
             if (data.modifiedCount) {
               console.log(data);
               Swal.fire({
                 position: "top-center",
                 icon: "success",
                 title: `${user.name} User dlt`,
                 showConfirmButton: false,
                 timer: 1500,
               });
             }
           });

    }

  return (
    <div className="w-full ms-20">
      <Helmett title={"Bistro ||All Users "}></Helmett>
      <SectionTitle
        shortHading={"How many??"}
        hading={"MANAGE ALL USERS"}
      ></SectionTitle>
      <h3 className="text-2xl font-extrabold my-4 ">
        {" "}
        Total users: {users.length}
      </h3>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, idex) => (
              <tr key={user._id}>
                <th>{idex + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  {user.role === "@Admin" ? (
                    "Admin"
                  ) : (
                    <button
                      onClick={() => handelMakeAdmin(user)}
                      className="btn btn-ghost btn-md text-2xl bg-[#D1A054] text-white"
                    >
                      <FaUserShield></FaUserShield>
                    </button>
                  )}
                </td>
                <button
                  onClick={() => handelDleate(user)}
                  className="btn btn-ghost btn-md mt-2  bg-red-500 text-white"
                >
                  <FaTrashAlt></FaTrashAlt>{" "}
                </button>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
