import { Box } from "@mui/material";
import { useTranslation } from "react-i18next";
import emailjs from "@emailjs/browser";
import Input from "../Input";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ContactFormFields, contactSchema } from "../../schemas/contactSchema";
import { EMAILJS_CONFIG } from "../../config/emailjsConfig";

const Contact = () => {
  const { t, i18n } = useTranslation();

  const { handleSubmit, control, reset } = useForm<ContactFormFields>({
    defaultValues: {
      email: "",
      name: "",
      message: "",
    },
    resolver: zodResolver(contactSchema),
  });
  const onSubmit = (data: ContactFormFields) => {
    emailjs
      .send(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.templateId,
        {
          from_name: data.name,
          to_name: "tornike",
          from_email: data.email,
          to_email: "toko.tabatadze2@gmail.com",
          message: data.message,
        },
        EMAILJS_CONFIG.publicKey,
      )
      .then(() => {
        alert("Thank you. We will get back to you as soon as possible.");
      });
    reset();
  };

  return (
    <Box
      className="w-full flex xsm:gap-[24px] tablet:gap-[40px] dark:border-[2px] dark:border-[#fff]  dark:bg-[#1E1F24] xl:gap-[90px] bg-[#FAF8F0]
                 rounded-[20px] tablet:rounded-[40px]  xsm:py-[30px] xl:py-[50px] 
                 xsm:px-[30px] xl:px-[40px] mb-[30px]"
      sx={{
        "@media (max-width: 900px)": {
          flexDirection: "column",
          padding: "30px 0 !important",

          "& .texts": {
            padding: "0 24px !important",
          },
        },

        "@media (max-width: 600px)": {
          padding: "16px 0 !important",

          "& .texts": {
            padding: "0 16px !important",
          },
        },
      }}
    >
      <div className="tablet:w-[400px] lg:w-auto lg:max-w-[320px] texts">
        <div className="hidden tablet:block">
          {i18n?.language !== "ge" && (
            <p
              className="text-[22px] dark:text-[#FAF8F0] tablet:text-[30px] lg:text-[35px] xl:text-[40px] 
          text-[#1E1F24] font-extrabold"
            >
              {t("get_in_touch")}:
            </p>
          )}
          <p
            className="text-[22px] tablet:text-[30px] dark:text-[#FAF8F0] lg:text-[35px] xl:text-[40px] 
                     text-[#1E1F24] font-extrabold"
          >
            {t("contact_petters")}
          </p>
        </div>

        <p
          className="block tablet:hidden text-[22px] dark:text-[#FAF8F0CC] tablet:text-[30px] lg:text-[35px] xl:text-[40px] 
                     text-[#1E1F24] font-extrabold"
        >
          {i18n?.language !== "ge" && t("get_in_touch") + ":"}{" "}
          {t("contact_petters")}
        </p>

        <p
          className="text-[14px] sm:text-[18px] dark:text-[#FAF8F0CC] text-[#1E1F24] font-semibold mt-[16px] xsm:mt-[24px] mb-[18px] 
                     whitespace-pre-line"
        >
          {t("have_question_feedback")}
        </p>

        {i18n?.language !== "ge" && (
          <p className="text-[14px] dark:text-[#FAF8F0CC] sm:text-[18px] text-[#1E1F24] font-semibold">
            {t("we_love_hear")}
          </p>
        )}
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="rounded-[20px] tablet:rounded-[30px] w-full sm:h-[320px] bg-[#1E1F24]
                  px-[16px] tablet:px-[30px] py-[24px] tablet:py-[30px]"
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
        </div>

        <div className="mt-[16px]">
          <Controller
            name="message"
            control={control}
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <>
                <Input
                  placeholder={t("message")}
                  rows={4}
                  multiline
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

        <div className="flex items-center justify-center mt-[20px]">
          <div className="w-full sm:w-[380px]   ">
            <button
              type="submit"
              className="bg-[#5BBA66] w-full h-[56px]  text-[18px] !normal-case
                hover:text-[#1E1F24] hover:bg-[#FAF8F0] font-bold !leading-[0]   !rounded-[40px]  text-white 
                       hover:!transition-colors !duration-300"
            >
              {t("send")}
            </button>
          </div>
        </div>
      </form>
    </Box>
  );
};

export default Contact;
