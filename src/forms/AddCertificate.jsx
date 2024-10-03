import { useFormik } from "formik";
import * as Yup from "yup";
import Button from "../ui/Button";
import CustomInput from "../ui/CustomInput";
import Form from "../ui/Form";
import MiniLoader from "../ui/MiniLoader";
import useAddCertificate from "../features/certificates/useAddCertificate";

function AddCertificate({onCloseModal}) {
  const { addCertificate, isLoading } = useAddCertificate();
  const formik = useFormik({
    initialValues: {
      certificateTitle: "",
      name: "",
      certificateID: "",
      dateAwarded: "",
    },
    validationSchema: Yup.object({
      certificateTitle: Yup.string().required("Certificate title is required"),
      name: Yup.string().required("Name of awardee is required"),
      certificateID: Yup.string().required("Certificate ID is required"),
      dateAwarded: Yup.date().required("Award Date is required").nullable(),
    }),
    onSubmit: (values, { setSubmitting }) => {
      const certificate = {
        title: values?.certificateTitle,
        name: values?.name,
        certificate_id: values?.certificateID,
        date_awarded: values?.dateAwarded,
      };
      addCertificate(certificate, {
        onSettled: () => {
            onCloseModal()
            setSubmitting(false)
        }
      })
    },
  });

  return (
    <div className="flex flex-col gap-3 py-2 px-4">
      <h1 className="text-2xl my-3 font-semibold">Add Certificate</h1>
      <Form onSubmit={formik.handleSubmit}>
        <CustomInput
          placeholder={"Certificate Title"}
          label={"Certificate Title"}
          name={"certificateTitle"}
          type={"text"}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.certificateTitle}
          error={Boolean(
            formik.touched.certificateTitle && formik.errors.certificateTitle
          )}
          errorMessage={formik.errors.certificateTitle}
        />
        <CustomInput
          placeholder={"Name of Awardee"}
          label={"Name of Awardee"}
          name={"name"}
          type={"text"}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
          error={Boolean(formik.touched.name && formik.errors.name)}
          errorMessage={formik.errors.name}
        />
        <CustomInput
          placeholder={"Certificate ID"}
          label={"Certificate ID"}
          name={"certificateID"}
          type={"text"}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.certificateID}
          error={Boolean(
            formik.touched.certificateID && formik.errors.certificateID
          )}
          errorMessage={formik.errors.certificateID}
        />
        <div className="flex gap-2 items-center flex-col w-full">
          <label className="w-[26rem] font-semibold text-base capitalize">
            Date Awarded
          </label>
          <input
            type="date"
            name="dateAwarded"
            className="border w-full border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[#1C5237] focus:border-transparent"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.dateAwarded}
          />
          {formik.touched.dateAwarded && formik.errors.dateAwarded && (
            <div className="text-red-500 text-sm">
              {formik.errors.dateAwarded}
            </div>
          )}
        </div>

        <div className="w-full flex mt-3 justify-start">
          <Button
            size="large"
            type={"accent-black"}
            disabled={formik.isSubmitting}
          >
            {formik.isSubmitting ? <MiniLoader /> : "Add Certificate"}
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default AddCertificate;
