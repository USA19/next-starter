import { FC, useState } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

import { PASSWORD, TEXT } from "../../{constants}";

export interface CustomControlProps {
  controllerLabel: string;
  fieldType?: string;
  error?: string;
  isPassword?: boolean;
  disabled?: boolean;
  controllerName: string;
  isMultiLine?: boolean;
  maxLength?: number;
  placeholder?: string;
}
const CustomController: FC<CustomControlProps> = ({
  controllerName,
  fieldType,
  isPassword,
  placeholder,
  disabled,
}) => {
  const { control } = useFormContext();
  const [passwordType, setPasswordType] = useState(PASSWORD);

  const handleClickShowPassword = () => {
    setPasswordType((prevType) => (prevType === PASSWORD ? TEXT : PASSWORD));
  };

  return (
    <div className="mb-4">
      <Controller
        name={controllerName}
        control={control}
        render={({
          field,
          fieldState: { invalid, error: { message } = {} },
        }) => (
          <div className="relative">
            <input
              disabled={disabled}
              type={isPassword ? passwordType : fieldType}
              placeholder={placeholder}
              {...field}
              className={`mt-2 flex h-12 w-full items-center justify-center rounded-xl border bg-white/0 p-3 text-sm outline-none ${
                disabled
                  ? "!border-none !bg-gray-100 dark:!bg-white/5 dark:placeholder:!text-[rgba(255,255,255,0.15)]"
                  : invalid
                  ? "border-red-500 text-red-500 placeholder:text-red-500 dark:!border-red-400 dark:!text-red-400 dark:placeholder:!text-red-400"
                  : "border-gray-200 dark:!border-white/10 dark:text-white"
              }`}
            />
            {isPassword && (
              <div
                className="absolute inset-y-0 right-2 pl-3 flex items-center  
                    "
                onClick={handleClickShowPassword}
              >
                {passwordType === PASSWORD ? (
                  <AiFillEye className="h-6 w-6 text-gray-400 cursor-pointer" />
                ) : (
                  <AiFillEyeInvisible className="h-6 w-6 text-gray-400 cursor-pointer" />
                )}
              </div>
            )}
            {invalid && message && (
              <p className="text-red-500 text-xs mt-1">{message}</p>
            )}
          </div>
        )}
      />
    </div>
  );
};

export default CustomController;
