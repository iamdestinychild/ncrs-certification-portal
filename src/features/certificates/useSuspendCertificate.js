import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { suspendCertificateApi } from "../../services/apiGetCertificates";

export default function useDeleteCertificate() {
  const queryClient = useQueryClient();

  const { mutate: suspendCertificate, isPending: isLoading } = useMutation({
    mutationFn: suspendCertificateApi,
    mutationKey: ["certificates"],
    onSuccess: () => {
      toast.success("Certificate Suspended");
      queryClient.invalidateQueries(["certificates"]);
    },
    onError: () => toast.error("Failed to suspend certificate"),
  });

  return {
    isLoading,
    suspendCertificate,
  };
}
