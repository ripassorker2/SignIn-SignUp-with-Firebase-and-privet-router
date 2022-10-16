import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../components/UserContext/UserContext";

const PrivetRouter = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  if (loading) {
    return (
      <div className="w-full h-full flex justify-center content-center text-lg ">
        Loading.....
      </div>
    );
  }
  if (user && user.uid) {
    return children;
  }
  return <Navigate to={"/login"}></Navigate>;
};

export default PrivetRouter;
