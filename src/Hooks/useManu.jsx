import { useEffect, useState } from "react";

const useManu = () => {
  const [manu, setMenu] = useState([]);
  const [loding, setLoding] = useState(true);
  useEffect(() => {
    fetch("http://localhost:3000/menu")
      .then((res) => res.json())
      .then((data) => {
        setMenu(data);
        setLoding(false);
      });
  }, []);
  return [manu, loding];
};

export default useManu;
