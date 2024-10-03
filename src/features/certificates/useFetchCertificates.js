import { useQuery } from "@tanstack/react-query";
import { fetchCertificates } from "../../services/apiGetCertificates";

export default function useFetchCertificates() {
  const {
    data: certificates,
    isLoading,
    error,
    refetch,
  } = useQuery({
    queryKey: ["certificates"],
    queryFn: fetchCertificates,
  })



  return {
    certificates,
    isLoading,
    error,
    refetch,
  };
}
