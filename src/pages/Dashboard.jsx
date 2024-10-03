import useFetchCertificates from "../features/certificates/useFetchCertificates";
import ErrorPage from "../ui/ErrorPage";
import Loader from "../ui/Loader";
import TableList from "../ui/TableList";

function Dashboard() {
  const { certificates, isLoading, error, refetch } = useFetchCertificates();

  if (isLoading) return <Loader />;

  if (!isLoading && error) return <ErrorPage onClick={() => refetch()} />;

  return (
    <div className="p-2 space-y-3">
      <h1 className="font-semibold text-2xl">Hello Kolawunla</h1>
      <p className="text-sm text-gray-500">Welcome Back</p>

      <h2 className="font-semibold">Recently Uploaded</h2>
      <div className="px-4 flex flex-col gap-4">
        {certificates?.slice(0, 5).map((item) => (
          <TableList key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
