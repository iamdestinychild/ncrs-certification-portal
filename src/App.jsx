import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import Dashboard from "./pages/Dashboard";
import Certificates from "./pages/Certificates";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Validate from "./pages/Validate";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import ValidationState from "./pages/ValidationState";
import ResetPassword from "./pages/resetPassword";
import PageNotFound from "./pages/PageNotFound";

const queryClient = new QueryClient(
  {
    defaultOptions:{
      queries:{
        retry: 2,
        staleTime: 300000,
      }
    }
  }
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "/certificates",
        element: <Certificates />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <SignUp />,
  },
  {
    path: "/reset-password",
    element: <ResetPassword />,
  },
  {
    path: "/validate",
    element: <Validate />,
  },
  {
    path: "*",
    element: <PageNotFound />,
  },
  {
    path: "/validate/:id",
    element: <ValidationState />,
  },
]);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
