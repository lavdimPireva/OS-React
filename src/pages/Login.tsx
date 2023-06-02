import { LoginForm } from "@components/LoginForm/LoginForm";
import { UserImage } from "@components/LoginForm/UserImage";

export const Login = () => {
  return (
    <div className="w-full h-full flex items-center justify-center flex-col">
      <UserImage />
      <LoginForm />
    </div>
  );
};
