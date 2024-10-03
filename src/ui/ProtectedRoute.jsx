import { Navigate } from "react-router-dom";
import useDashboard from "../features/dashboard/useDashboard";
import Loader from "./Loader";
import useFetchCertificates from "../features/certificates/useFetchCertificates";

function ProtectedRoute({ children }) {
  const { data: user, isLoading1, error1 } = useDashboard();
  const { certificates, isLoading2, error2 } = useFetchCertificates();

  const isLoading = isLoading1 || isLoading2;

  const data = user || certificates;

  const error = error1 || error2;

  if (isLoading) return <Loader />;

  if (error) return <Navigate to={"/login"} replace />;

  if (data && !isLoading && !error) return children;

  return <Navigate to={"/login"} replace />;
}

export default ProtectedRoute;
