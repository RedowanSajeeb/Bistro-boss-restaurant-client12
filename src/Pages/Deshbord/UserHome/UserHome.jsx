import useAuth from "../../../Hooks/useAuth";


const UserHome = () => {
     const { user } = useAuth();
    return (
      <div>
        <h1>Welcome Back {user.displayName}</h1>
      </div>
    );
};

export default UserHome;