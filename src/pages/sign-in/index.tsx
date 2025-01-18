import { Controller, useForm } from "react-hook-form";
import Input from "../../components/Input";
import { useTranslation } from "react-i18next";
import { zodResolver } from "@hookform/resolvers/zod";
import { SignInFormValues, signInSchema } from "../../schemas/authSchema";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useHandleLogIn } from "../../react-query/mutation/auth";
import { Link } from "react-router-dom";

const SignIn = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const { t } = useTranslation();

  const { mutate: handleLogIn } = useHandleLogIn();

  const { handleSubmit, control, reset } = useForm<SignInFormValues>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(signInSchema),
  });

  const onSubmit = (data: SignInFormValues) => {
    handleLogIn({ email: data.email, password: data.password });
    reset();
  };

  return (
    <div className="tablet:flex tablet:justify-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full tablet:w-[70%] rounded-[20px] tablet:rounded-[30px] sm:h-[320px] bg-[#1E1F24] 
                  px-[16px] tablet:px-[30px] py-[24px] tablet:mb-[40px] my-[40px] tablet:py-[30px]"
      >
        <div className="flex flex-col sm:flex-row sm:items-center gap-[16px] sm:gap-[20px]">
          <div className="flex-1">
            <Controller
              name="email"
              control={control}
              render={({
                field: { onChange, value },
                fieldState: { error },
              }) => (
                <>
                  <Input
                    placeholder={t("email")}
                    value={value}
                    onChange={onChange}
                  />
                  {error?.message && (
                    <p className="text-[#FF0000] pt-1">{t(error.message)}</p>
                  )}
                </>
              )}
            />
          </div>
          <div className="flex-1 relative space-y-1">
            <Controller
              name="password"
              control={control}
              render={({
                field: { onChange, value },
                fieldState: { error },
              }) => (
                <>
                  <div className="relative">
                    <Input
                      placeholder={t("password")}
                      type={isPasswordVisible ? "text" : "password"}
                      value={value}
                      onChange={onChange}
                    />
                    <span
                      className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer"
                      onClick={togglePasswordVisibility}
                    >
                      {isPasswordVisible ? <FaEyeSlash /> : <FaEye />}
                    </span>
                  </div>
                  {error?.message && (
                    <p className="text-[#FF0000] pt-1">{t(error.message)}</p>
                  )}
                </>
              )}
            />
          </div>
        </div>

        <div className="flex items-center justify-center mt-[20px]">
          <div className="w-full sm:w-[380px]">
            <button
              type="submit"
              className="bg-[#5BBA66] w-full h-[56px] text-[18px] !normal-case
                        hover:text-[#1E1F24] hover:bg-[#FAF8F0] font-bold !leading-[0] !rounded-[40px] text-white 
                        hover:!transition-colors !duration-300"
            >
              {t("log_in")}
            </button>
            <div className="flex justify-center pt-[16px] tablet:pt-[24px]">
              <span className="text-[14px] font-thin">
                {t("dont_have_account")}{" "}
                <Link to="/register" className="text-green">
                  {t("register")}{" "}
                </Link>
              </span>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
