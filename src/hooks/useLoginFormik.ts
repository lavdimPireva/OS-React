import { useFormik, FormikHelpers } from "formik";
import * as Yup from "yup";

const LoginSchema = Yup.object().shape({
  password: Yup.string()
    .required("Don't forget to put the password first!")
    .matches(/(?:^|\W)admin123(?:$|\W)/, "Not quite the corrent one!"),
});

export interface LoginFields {
  password: string;
}

interface UseLoginFormOptions {
  onSubmit: (
    values: LoginFields,
    formikHelpers: FormikHelpers<LoginFields>
  ) => void;
}

export const useLoginFormik = (props: UseLoginFormOptions) => {
  return useFormik({
    initialValues: {
      password: "",
    },
    validateOnBlur: false,
    validateOnChange: true,
    validationSchema: LoginSchema,
    onSubmit: props.onSubmit,
  });
};

export type LoginFormik = ReturnType<typeof useLoginFormik>;
