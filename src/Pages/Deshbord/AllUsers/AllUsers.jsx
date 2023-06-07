import { useQuery } from "@tanstack/react-query";


const AllUsers = () => {
    const {data: users =[], refetch} = useQuery(["users"], async () => {
        const res = await fetch("http://localhost:3000/users");
        return res.json();

    });
  return <div>
    {
        users.length
    }
  </div>;
};

export default AllUsers;
