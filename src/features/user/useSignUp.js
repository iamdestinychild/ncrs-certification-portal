import { useMutation } from "@tanstack/react-query";
import { signUpUser } from "../../services/apiAuth";
import toast from "react-hot-toast";

export default function useSignUp() {
  const {
    mutate: signUp,
    isPending: isLoading,
    error,
  } = useMutation({
    mutationFn: (userData) => signUpUser(userData),
    mutationKey: ["signup"],
    onSuccess: () => toast.success("Registration Successfull"),
    onError: () => toast.error("Registration Failed"),
  });

  return {
    signUp,
    isLoading,
    error,
  };
}
