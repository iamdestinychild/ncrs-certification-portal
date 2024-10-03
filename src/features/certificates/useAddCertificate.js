import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addCertificatesApi } from "../../services/apiGetCertificates";
import toast from "react-hot-toast";

export default function useAddCertificate() {
  const queryClient = useQueryClient();
  const {
    mutate: addCertificate,
    isPending: isLoading,
    error,
  } = useMutation({
    mutationFn: (certificate) => addCertificatesApi(certificate),
    mutationKey: ["certificates"],
    onSuccess: () => {
      toast.success("Certificate Added Successfully");
      queryClient.invalidateQueries(["certificates"]);
    },
    onError: () => toast.error("Failed to add Certificate"),
  });

  return {
    addCertificate,
    isLoading,
    error,
  };
}
