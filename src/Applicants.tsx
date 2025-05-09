import { useUser } from "@clerk/clerk-react";
import { Navigate } from "react-router-dom";

export default function Applicants() {
  const { isLoaded, isSignedIn, user } = useUser();

  if (!isLoaded) return <div>Loading...</div>;

  if (!isSignedIn || user?.publicMetadata?.role !== "admin") {
    return <Navigate to="/" />;
  }

  return(
    <div className="text-white flex items-center justify-center w-full">
        Admin Dashboard
    </div>
  )
}
