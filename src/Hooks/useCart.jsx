import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";


const useCart = () => {
    const {user} = useContext(AuthContext)
        const token = localStorage.getItem("access-Token");

        // const [axiosSecure] = useAxiosSecure();


     const { refetch,  data: cart = [] } = useQuery({
       queryKey: ["carts", user?.email],
       queryFn: async () => {
         const response = await fetch(
           `http://localhost:3000/carts?email=${user?.email}`,
           {
             headers: { authentication: `bearer ${token}` },
           }
         );



      //  queryFn: async () => {
      //    const response = await axiosSecure(`/carts?email=${user?.email}`);

      //    if (!response.ok) {
      //      throw new Error("Network response was not ok");
      //    }
      
        // console.log(response.data);
         return response.json();
       },
     });

     return [cart,refetch];  
};

export default useCart;
