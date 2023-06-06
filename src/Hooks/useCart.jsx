import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
const useCart = () => {
    const {user} = useContext(AuthContext)
     const { refetch,  data: cart = [] } = useQuery({
       queryKey: ["carts", user?.email],
       queryFn: async () => {
         const response = await fetch(`http://localhost:3000/carts?email=${user?.email}`);
         if (!response.ok) {
           throw new Error("Network response was not ok");
         }
         return response.json();
       },
     });

     return [refetch, cart]



    
};

export default useCart;
