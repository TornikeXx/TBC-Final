import { useAtomValue } from "jotai";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { userAtom } from "../../store/auth";
import Input from "../Input";
import { FormValues } from "../../pages/explore/types";
import { useHandleAddingBlog } from "../../react-query/mutation/blogs";
import { useTranslation } from "react-i18next";

const CreateBlog: React.FC = () => {
  const user = useAtomValue(userAtom);
  const { t } = useTranslation();

  const { control, handleSubmit,reset } = useForm<FormValues>({
    defaultValues: {
      title_en: "",
      title_ka: "",
      description_en: "",
      description_ka: "",
      image: null,
    },
  });

  const onSubmit = (formValues: FormValues) => {
    addBlogToList({
      title_en: formValues.title_en,
      title_ka: formValues.title_ka,
      description_en: formValues.description_en,
      description_ka: formValues.description_ka,
      image_url: formValues.image,
      user_id: user?.user?.id,
    });
    reset()
  };

  const { mutate: addBlogToList } = useHandleAddingBlog();

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex  flex-col gap-4 bg-black"
    >
      <div className="flex flex-col  gap-2">
        <Controller
          name="title_en"
          control={control}
          render={({ field: { onChange, value } }) => (
            <Input placeholder={t("name")} value={value} onChange={onChange} />
          )}
        />

        <Controller
          name="title_ka"
          control={control}
          render={({ field: { onChange, value } }) => (
            <Input placeholder={t("age")} value={value} onChange={onChange} />
          )}
        />
      </div>

      <div className="flex flex-col gap-2">
        <Controller
          name="description_en"
          control={control}
          render={({ field: { onChange, value } }) => (
            <Input
              placeholder={t("pet_type")}
              value={value}
              onChange={onChange}
            />
          )}
        />

        <Controller
          name="description_ka"
          control={control}
          render={({ field: { onChange, value } }) => (
            <Input
              placeholder={t("description")}
              value={value}
              rows={4}
              multiline
              onChange={onChange}
            />
          )}
        />
      </div>

      <Controller
        name="image"
        control={control}
        render={({ field: { onChange } }) => (
          <input
            type="file"
            onChange={(e) => {
              const file = e.target.files?.[0];
              onChange(file);
            }}
          />
        )}
      />

      <button
        type="submit"
        className="bg-[#5BBA66] w-full h-[56px]  text-[18px] !normal-case
        hover:text-[#1E1F24] hover:bg-[#FAF8F0] font-bold !leading-[0]   !rounded-[40px]  text-white 
               hover:!transition-colors !duration-300"
      >
        Submit
      </button>
    </form>
  );
};

export default CreateBlog;
