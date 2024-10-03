import { useQuery } from "@tanstack/react-query";
import { fetchCertificates } from "../../services/apiGetCertificates";

export default function useFetchCertificates() {
  const {
    data,
    isLoading,
    error,
    refetch,
  } = useQuery({
    queryKey: ["certificates"],
    queryFn: fetchCertificates,
  })

const certificates = data?.certifications

  return {
    certificates,
    isLoading,
    error,
    refetch,
  };
}
