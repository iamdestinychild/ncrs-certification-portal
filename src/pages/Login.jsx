import { useFormik } from "formik";
import * as Yup from "yup";
import Logo from "../ui/Logo";
import Box from "../assets/Boxes.png";
import Button from "../ui/Button";
import CustomInput from "../ui/CustomInput";
import Form from "../ui/Form";
import MiniLoader from "../ui/MiniLoader";
import { useNavigate } from "react-router-dom";
import useLogin from "../features/user/useLogin";

function Login() {
  const { login, isLoading } = useLogin();
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .required("Email is required")
        .email("Invalid email format"),
      password: Yup.string()
        .required("Password is required")
        .min(8, "Password must be at least 8 characters long"),
    }),
    onSubmit: (values, { setSubmitting }) => {
      login(values, {
        onSuccess: () => {
          navigate("/");
        },
        onSettled: () => setSubmitting(false),
      });
    },
  });

  return (
    <div className="flex flex-col gap-20 items-center justify-center">
      <header className="w-full z-10 flex items-center justify-between py-3 px-6">
        <Logo />
      </header>
      <img
        className="absolute hidden md:block right-0 top-0"
        src={Box}
        alt="alt_image"
      />
      <img
        className="absolute hidden md:block left-0 rotate-180 bottom-0"
        src={Box}
        alt="alt_image"
      />

      <div className="w-full md:w-1/2 flex flex-col justify-center items-center space-y-6 p-4 ">
        <h1 className="font-bold text-4xl">Welcome</h1>
        <p>Please kindly enter your details</p>

        <Form onSubmit={formik.handleSubmit}>
          <CustomInput
            label={"Email"}
            placeholder={"Enter your email address"}
            name={"email"}
            type={"email"}
            error={Boolean(formik.touched.email && formik.errors.email)}
            errorMessage={formik.errors.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          <CustomInput
            label={"Password"}
            placeholder={"Enter Password"}
            name={"password"}
            type={"password"}
            error={Boolean(formik.touched.password && formik.errors.password)}
            errorMessage={formik.errors.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />

          <div className="flex mt-4 flex-col items-center justify-end gap-3">
            <Button
              disabled={formik.isSubmitting || !formik.isValid}
              type={"primary"}
            >
              {formik.isSubmitting || isLoading ? <MiniLoader /> : "SIGN IN"}
            </Button>
            <p>Forgot Password?</p>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default Login;
