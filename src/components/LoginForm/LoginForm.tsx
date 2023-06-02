import { Icon } from "@components/shared/Icon/Icon";
import { Input } from "@components/shared/input/Input";
import { useAuthContext } from "@context/AuthContext/AuthContext";
import { useLoginFormik } from "hooks/useLoginFormik";

export const LoginForm = () => {
  const { onLogin } = useAuthContext();

  const formik = useLoginFormik({
    onSubmit(values) {
      onLogin();
    },
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="flex flex-col items-center mt-5"
    >
      <h4 className="font-bold text-xl text-slate-600 mb-3">
        Welcome Borgoth!
      </h4>
      <Input
        type="password"
        name="password"
        placeholder="Password"
        value={formik.values.password}
        onChange={formik.handleChange}
        error={formik.errors.password}
        hasError={formik.touched.password && !!formik.errors.password}
      />
      <button className="mt-2 flex items-center gap-2" type="submit">
        <span>Unlock</span>
        <Icon icon="arrow-right" className="w-[15px]" />
      </button>
    </form>
  );
};
