import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteCertificateApi } from "../../services/apiGetCertificates";
import toast from "react-hot-toast";

export default function useDeleteCertificate() {
  const queryClient = useQueryClient();

  const { mutate: deleteCertificate, isPending: isLoading } = useMutation({
    mutationFn: (id) => deleteCertificateApi(id),
    mutationKey: ["certificates"],
    onSuccess: () => {
      toast.success("Certificate Deleted");
      queryClient.invalidateQueries(["certificates"]);
    },
    onError: () => toast.error("Failed to delete certificate")
  });

  return {
    isLoading,
    deleteCertificate,
  };
}
