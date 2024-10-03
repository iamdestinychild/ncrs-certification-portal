import { useQuery } from "@tanstack/react-query";
import { getDashBoard } from "../../services/apiDashBoard";

export default function useDashboard() {
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ["dashboard"],
    queryFn: getDashBoard,
  });

  const userDetails = data?.msg?.userDetails

  return {
    data,
    userDetails,
    isLoading,
    error,
    refetch,
  };
}
