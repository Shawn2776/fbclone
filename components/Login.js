import Image from "next/image";
import { signIn } from "next-auth/react";
("next-auth/client");

const Login = () => {
  return (
    <div className="flex flex-col items-center mx-auto mt-20">
      <Image src="fblogo.svg" height={240} width={240} alt="fbclone logo" />
      <a
        onClick={signIn}
        className="px-20 py-4 z-10 text-2xl cursor-pointer mt-16 bg-blue-500 rounded-md text-white"
      >
        Login
      </a>
    </div>
  );
};

export default Login;
