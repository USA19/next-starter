"use client";
import Checkbox from "@/app/{components}/common/checkbox";
import InputField from "@/app/{components}/common/common-controller";
import { FormProvider, useForm } from "react-hook-form";
import { signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginValidationSchema } from "@/app/{validation-schema}";

function SignInDefault() {
  const methods = useForm({
    mode: "all",
    resolver: yupResolver(loginValidationSchema),
    defaultValues: {
      email: "muhamedusama468@gmail.com",
      password: "Super123!",
    },
  });

  const { reset, handleSubmit } = methods;

  const onSubmit = async (data) => {
    const { email, password } = data;
    await signIn("credentials", {
      email,
      password,
      redirect: true,
      callbackUrl: "/",
    });

    reset();
  };

  const handleGoogleSignIn = async () => {
    await signIn("google", { callbackUrl: "/", redirect: true });
  };
  return (
    <div className="mb-16 mt-16 flex h-full w-full items-center justify-center px-2 md:mx-0 md:px-0 lg:mb-10 lg:items-center lg:justify-start">
      {/* Sign in section */}
      <div className="mt-[10vh] w-full max-w-full flex-col items-center md:pl-4 lg:pl-0 xl:max-w-[420px]">
        <h3 className="mb-2.5 text-4xl font-bold text-navy-700 dark:text-white">
          Sign In
        </h3>
        <p className="mb-9 ml-1 text-base text-gray-600">
          Enter your email and password to sign in!
        </p>
        <div
          onClick={handleGoogleSignIn}
          className="mb-6 flex h-[50px] w-full items-center justify-center gap-2 rounded-xl bg-lightPrimary hover:cursor-pointer dark:bg-navy-800 dark:text-white"
        >
          <div className="rounded-full text-xl">
            <FcGoogle />
          </div>
          <p className="text-sm font-medium text-navy-700 dark:text-white">
            Sign In with Google
          </p>
        </div>
        <div className="mb-6 flex items-center  gap-3">
          <div className="h-px w-full bg-gray-200 dark:!bg-navy-700" />
          <p className="text-base text-gray-600"> or </p>
          <div className="h-px w-full bg-gray-200 dark:!bg-navy-700" />
        </div>
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
            {/* Email */}
            <InputField controllerName="email" placeholder="Email" />

            {/* Password */}
            <InputField
              controllerName="password"
              placeholder="Password"
              isPassword={true}
              fieldType="password"
            />

            {/* Checkbox */}
            <div className="mb-4 flex items-center justify-between px-2">
              <div className="mt-2 flex items-center">
                <Checkbox />
                <p className="ml-2 text-sm font-medium text-navy-700 dark:text-white">
                  Keep me logged In
                </p>
              </div>
              <a
                className="text-sm font-medium text-brand-500 hover:text-brand-600 dark:text-white"
                href=" "
              >
                Forgot Password?
              </a>
            </div>
            <button
              type="submit"
              className="linear w-full rounded-xl bg-brand-500 py-3 text-base font-medium text-white transition duration-200 hover:bg-brand-600 active:bg-brand-700 dark:bg-brand-400 dark:text-white dark:hover:bg-brand-300 dark:active:bg-brand-200"
            >
              Sign In
            </button>
          </form>
        </FormProvider>
        <div className="mt-4">
          <span className="text-sm font-medium text-navy-700 dark:text-gray-500">
            Not registered yet?
          </span>
          <a
            href="/auth/sign-up/default"
            className="ml-1 text-sm font-medium text-brand-500 hover:text-brand-600 dark:text-white"
          >
            Create an account
          </a>
        </div>
      </div>
    </div>
  );
}

export default SignInDefault;
