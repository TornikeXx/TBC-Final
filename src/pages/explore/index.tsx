import { Controller, useForm } from "react-hook-form";
import { Link, useSearchParams } from "react-router-dom";
import qs from "qs";
import { useEffect } from "react";
import { FilterValue } from "./types";
import { useDebounce } from "@uidotdev/usehooks";
import { useGetBlogs } from "../../react-query/query/blogs";
import CreateBlog from "../../components/CreateBlog";
import Input from "../../components/Input";
import { formatDate } from "../../utils/format-date";
import { useHandleDeleteBlog } from "../../react-query/mutation/blogs";
import { useTranslation } from "react-i18next";

const Explore = () => {
  const { t } = useTranslation();

  const [searchParams, setSearchParams] = useSearchParams();
  const initialSearchText = searchParams.get("searchText") || "";

  const { control, watch } = useForm<FilterValue>({
    defaultValues: { searchText: initialSearchText },
  });

  const searchText = watch("searchText");
  const debouncedSearchText = useDebounce(searchText, 500);

  useEffect(() => {
    const query = qs.stringify({ searchText: debouncedSearchText });
    setSearchParams(query);
  }, [debouncedSearchText]);

  const { data: blogs } = useGetBlogs({ searchText: debouncedSearchText });
  const { mutate: deleteBlog } = useHandleDeleteBlog();

  return (
    <div className="flex flex-col my-7">
      <div className="flex items-center bg-black rounded-4xl p-6 justify-center flex-col gap-4">
        <CreateBlog />
        <div className="flex mx-7 gap-5 w-full">
          <Controller
            name="searchText"
            control={control}
            render={({ field: { onChange, value } }) => (
              <Input
                placeholder={t("search")}
                value={value}
                onChange={onChange}
              />
            )}
          />
        </div>
      </div>

      <div className="flex flex-col gap-5 mt-6">
        {blogs?.length === 0 ? (
          <div className="h-[100px] flex justify-center items-center">
            <p className="text-center font-bold text-[#555969]">
              {t("not_found")}
            </p>
          </div>
        ) : (
          blogs?.map((blog) => {
            return (
              <div
                className="p-6 bg-[#fafafa] rounded-xl border-[1px] border-gray-200 cursor-pointer dark:bg-[#05060C]"
                key={blog.user_id}
              >
                <div className="my-2">
                  <h1 className="text-[#03050c] dark:text-[#fff] text-xl font-semibold">
                    {blog.title_en || t("name")}
                  </h1>
                  <h1 className="text-[#555969] dark:text-[#fff] text-xl font-semibold">
                    {blog.title_ka || t("age")}
                  </h1>
                </div>
                <div>
                  <p className="text-[#555969] dark:text-[#fff] font-thin">
                    {blog.description_en || t("pet_type")}
                  </p>
                  <div className="flex justify-between items-center">
                    <p className="mt-3 text-[#03050c] dark:text-[#fff] font-bold">
                      {formatDate(blog.created_at)}
                    </p>
                    <div className="flex justify-center gap-4">
                      <Link to={`/pet/${blog.id}`} className="text-green">
                        {t("see_more")}
                      </Link>
                      <p
                        onClick={() => deleteBlog(blog.id)}
                        className="text-[#ff0000]"
                      >
                        {t("delete")}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default Explore;
