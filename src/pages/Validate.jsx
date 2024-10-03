import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import Box from "../assets/Boxes.png";
import Form from "../ui/Form";
import CustomInput from "../ui/CustomInput";
import Button from "../ui/Button";

const testId = "12345678";

function Validate() {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const idStatus = searchParams.get("k");
  const formik = useFormik({
    initialValues: {
      certificateID: "",
    },
    validationSchema: Yup.object({
      certificateID: Yup.string()
        .required("Certificate code is required")
        .min(5, "Must be at least 5 characters"),
    }),
    onSubmit: (values) => {
      const { certificateID } = values;
      if (certificateID === testId) {
        navigate(`${certificateID}`);
      } else {
        setSearchParams({ k: "NotFound" });
      }
    },
  });

  if (idStatus === "NotFound")
    return (
      <div className="flex gap-36 flex-col items-center justify-center">
        <header className="w-full z-10 flex items-center justify-between py-3 px-6">
          <Link className="text-black font-semibold" to={-1}>
            Go Back
          </Link>
        </header>

        
      </div>
    );

  return (
    <div className="flex gap-36 flex-col items-center justify-center">
      <header className="w-full z-10 flex items-center justify-between py-3 px-6">
        <Link className="text-black font-semibold" to={-1}>
          Go Back
        </Link>
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
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center space-y-6 p-4 ">
        <h1 className="font-bold text-center text-3xl p-2 border-b-2 md:text-4xl">
          Validate Certificate
        </h1>
        <p>Enter the certificate validation code</p>
        <Form onSubmit={formik.handleSubmit}>
          <CustomInput
            placeholder="Certificate ID"
            type="text"
            name="certificateID"
            error={Boolean(
              formik.touched.certificateID && formik.errors.certificateID
            )}
            errorMessage={formik.errors.certificateID}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.certificateID}
          />

          <div className="mt-4 md:mt-8">
            <Button type="primary" onClick={formik.handleSubmit}>
              Submit
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default Validate;
