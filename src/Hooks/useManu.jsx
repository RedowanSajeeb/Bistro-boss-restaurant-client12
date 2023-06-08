// import { useEffect, useState } from "react";

import { useQuery } from "@tanstack/react-query";

const useManu = () => {
  // const [manu, setMenu] = useState([]);
  // const [loding, setLoding] = useState(true);


  // useEffect(() => {
  //   fetch("http://localhost:3000/menu")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setMenu(data);
  //       setLoding(false);
  //     });
  // }, []);
 
  const { data: manu = [], isLoading: loding ,refetch } = useQuery({
    queryKey: ["menu"],
    queryFn: async () => {
      const res = await fetch("http://localhost:3000/menu");
      return res.json();
    },
  });

  return [manu, loding ,refetch];
};

export default useManu;
