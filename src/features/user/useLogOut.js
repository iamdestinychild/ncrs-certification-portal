import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { logOutUser } from "../../services/apiAuth";

export default function useLogOut() {
  const navigate = useNavigate();
  const {
    mutate: logout,
    isPending: isLoading,
    error,
  } = useMutation({
    mutationFn: logOutUser,
    mutationKey: ["logOut"],

    onSuccess: () => {
      navigate("/login");
    },
    onError: () => {
      toast.error("Failed to Logout");
    },
  });
  return { logout, isLoading, error };
}
