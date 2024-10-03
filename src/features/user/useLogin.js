import { useMutation } from "@tanstack/react-query";
import { logInUser } from "../../services/apiAuth";
import toast from "react-hot-toast";

export default function useLogin() {
  const {
    mutate: login,
    error,
    isPending: isLoading,
  } = useMutation({
    mutationFn: (userDetails) => logInUser(userDetails),
    mutationKey: ["loginUser"],
    onSuccess: () => toast.success("Log in Successful"),
    onError: () => toast.error("Login Failed"),
  });


  return {
    login,
    error,
    isLoading,
  };
}
