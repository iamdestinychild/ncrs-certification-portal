import useFetchCertificates from "../features/certificates/useFetchCertificates";
import useDashboard from "../features/dashboard/useDashboard";
import ErrorPage from "../ui/ErrorPage";
import Loader from "../ui/Loader";
import TableList from "../ui/TableList";

function Dashboard() {
  const { certificates, isLoading, error, refetch } = useFetchCertificates();
  const {userDetails} = useDashboard()

  
  if (isLoading) return <Loader />;
  
  if (!isLoading && error) return <ErrorPage onClick={() => refetch()} />;
  
  const name = userDetails?.fullname?.split(" ")[0]
  return (
    <div className="p-2 space-y-3">
      <h1 className="font-semibold text-2xl">Hello {name}</h1>
      <p className="text-sm text-gray-500">Welcome Back</p>

      <h2 className="font-semibold">Recently Uploaded</h2>
      <div className="px-4 flex flex-col gap-4">
        {certificates.length > 0 ? (
          certificates.slice(0, 5).map((item) => (
            <TableList key={item._id} data={item} />
          ))
        ) : (
          <p className=" text-center mt-20 text-3xl">No Certificates Uploaded Yet.</p>
        )}
      </div>
    </div>
  );
}

export default Dashboard;
