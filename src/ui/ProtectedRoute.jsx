import { Navigate } from "react-router-dom";
import useDashboard from "../features/dashboard/useDashboard";
import Loader from "./Loader";
import useFetchCertificates from "../features/certificates/useFetchCertificates";

function ProtectedRoute({ children }) {
  const { data: user, isLoading:isLoading1, error:error1 } = useDashboard();
  const { certificates, isLoading:isLoading2, error:error2 } = useFetchCertificates();


  const isLoading = isLoading1 || isLoading2;


  const error = error1 || error2;

  if (isLoading) return <Loader />;

  if (error) return <Navigate to={"/login"} replace />;

  if (user || certificates) return children;

}

export default ProtectedRoute;
