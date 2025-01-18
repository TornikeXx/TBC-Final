import { Controller, useForm } from "react-hook-form";
import Input from "../../components/Input";
import { useTranslation } from "react-i18next";
import { zodResolver } from "@hookform/resolvers/zod";
import { RegisterFormValues, registerSchema } from "../../schemas/authSchema";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useHandleRegister } from "../../react-query/mutation/auth";
import { Link } from "react-router-dom";

const Register = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const { t } = useTranslation();

  const { mutate: handleRegister } = useHandleRegister();

  const { handleSubmit, control, reset } = useForm<RegisterFormValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      password1: "",
    },
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = (data: RegisterFormValues) => {
    const passwordsAreNotSame = data.password.trim() !== data.password1.trim();
    if (passwordsAreNotSame) {
      alert("passwords must match!");
      return;
    }
    handleRegister({ email: data.email, password: data.password });
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
              name="name"
              control={control}
              render={({
                field: { onChange, value },
                fieldState: { error },
              }) => (
                <>
                  <Input
                    placeholder={t("name")}
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
          <div className="flex-1 relative space-y-1">
            <Controller
              name="password1"
              control={control}
              render={({
                field: { onChange, value },
                fieldState: { error },
              }) => (
                <>
                  <div className="relative">
                    <Input
                      placeholder={t("confirm_password")}
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
              {t("register")}
            </button>
            <div className="flex justify-center pt-[16px] tablet:pt-[24px]">
              <span className="text-[14px] font-thin">
                {t("already_have_account")}{" "}
                <Link to="/sign-in" className="text-green">
                  {t("log_in")}
                </Link>
              </span>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Register;
