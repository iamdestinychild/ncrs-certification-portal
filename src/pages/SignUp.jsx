import { useFormik } from "formik";
import * as Yup from "yup";
import Logo from "../ui/Logo";
import Box from "../assets/Boxes.png";
import Form from "../ui/Form";
import CustomInput from "../ui/CustomInput";
import Button from "../ui/Button";
import MiniLoader from "../ui/MiniLoader";
import { Link, useNavigate } from "react-router-dom";
import useSignUp from "../features/user/useSignUp";

function SignUp() {
  const { signUp, isLoading } = useSignUp();
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      fullname: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      fullname: Yup.string()
        .required("Full name is required")
        .min(2, "Full name must be at least 2 characters long"),
      email: Yup.string()
        .required("Email is required")
        .email("Invalid email format"),
      password: Yup.string()
        .required("Password is required")
        .min(8, "Password must be at least 8 characters long"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required("Confirm password is required"),
    }),
    onSubmit: (values, { setSubmitting }) => {
      const userData = {
        fullname: values.fullname,
        email: values.email,
        password: values.password,
      };
      signUp(userData, {
        onSuccess: () => {
          setTimeout(() => {
            navigate("/login");
          }, 1000);
        },
        onSettled: () => setSubmitting(false),
      });
    },
  });


  return (
    <div className="flex md:gap-20 lg:gap-2 flex-col items-center justify-center">
      <header className="w-full z-10 flex items-center justify-between py-3 px-6">
        <Logo />
      </header>

      <img
        className="absolute pointer-events-none hidden md:block right-0 top-0"
        src={Box}
        alt="alt_image"
      />
      <img
        className="absolute pointer-events-none hidden md:block left-0 rotate-180 bottom-0"
        src={Box}
        alt="alt_image"
      />

      <div className="w-full md:w-1/2 flex bg-white z-10 flex-col justify-center items-center space-y-6 p-4">
        <h1 className="font-bold text-3xl md:text-4xl">Registration</h1>
        <p>Please kindly enter your details</p>
        <Form onSubmit={formik.handleSubmit}>
          <CustomInput
            label={"Full name"}
            error={Boolean(formik.touched.fullname && formik.errors.fullname)}
            errorMessage={formik.errors.fullname}
            placeholder={"Enter your name"}
            name={"fullname"}
            type={"text"}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.fullname}
          />

          <CustomInput
            label={"Email"}
            placeholder={"Enter your email address"}
            error={Boolean(formik.touched.email && formik.errors.email)}
            errorMessage={formik.errors.email}
            name={"email"}
            type={"email"}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />

          <CustomInput
            label={"Create Password"}
            placeholder={"Create a Password"}
            error={Boolean(formik.touched.password && formik.errors.password)}
            errorMessage={formik.errors.password}
            name={"password"}
            type={"password"}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />

          <CustomInput
            label={"Confirm Password"}
            placeholder={"Confirm Password"}
            error={Boolean(
              formik.touched.confirmPassword && formik.errors.confirmPassword
            )}
            errorMessage={formik.errors.confirmPassword}
            name={"confirmPassword"}
            type={"password"}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.confirmPassword}
          />

          <div className="flex mt-4 flex-col items-center justify-end gap-3">
            <Button
              disabled={formik.isSubmitting || !formik.isValid}
              type={"primary"}
            >
              {formik.isSubmitting || isLoading ? <MiniLoader /> : "SIGN UP"}
            </Button>
            <p>
              Already have an account?{" "}
              <span className="font-semibold">
                <Link className="text-[#1C5237]" to={"/login"}>
                  Login
                </Link>
              </span>
            </p>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default SignUp;
