import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";


const useCart = () => {
    const { user, loading } = useAuth();

        // const token = localStorage.getItem("access-Token");

        const [axiosSecure] = useAxiosSecure();


     const { refetch,  data: cart = [] } = useQuery({
       queryKey: ["carts", user?.email],
       enabled: !loading,



      //  queryFn: async () => {
      //    const response = await fetch(
      //      `http://localhost:3000/carts?email=${user?.email}`,
      //      {
      //        headers: { authentication: `bearer ${token}` },
      //      }
      //    );

       queryFn: async () => {
         const response = await axiosSecure(`/carts?email=${user?.email}`);

        //  if (!response.ok) {
        //    throw new Error("Network response was not ok");
        //  }

        // console.log(response.data);
         return response.data
       },
     });

     return [cart,refetch];  
};

export default useCart;
