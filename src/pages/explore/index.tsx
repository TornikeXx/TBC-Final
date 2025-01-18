import { Controller, useForm } from "react-hook-form";
import { useSearchParams } from "react-router-dom";
import qs from "qs";
import { useEffect } from "react";
import { FilterValue } from "./types";
import {useDebounce} from '@uidotdev/usehooks'
import { useGetBlogs } from "../../react-query/query/blogs";
import CreateBlog from "../../components/CreateBlog";
import Input from "../../components/Input";
import { formatDate } from "../../utils/format-date";

const Explore = () => {
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

  return (
    <div className="flex flex-col items-center justify-center my-7 bg-black">
      <div className="w-[500px] flex flex-col gap-4">
        <CreateBlog />
        <div className="flex gap-5">
          <Controller
            name="searchText"
            control={control}
            render={({ field: { onChange, value } }) => (
              <Input
                placeholder="Search With Tittle"
                value={value}
                onChange={onChange}
              />
            )}
          />
        </div>
      </div>
      <div className="flex flex-col gap-5 mt-3 min-h-[50vh]">
        {blogs?.map((blog) => {
          const imgUrl = blog?.image_url
            ? `${import.meta.env.VITE_SUPABASE_IMAGES_STORAGE_URL}/${blog?.image_url}`
            : "";
          return (
            <div className="p-6 bg-[#fafafa] rounded-xl border-[1px] border-gray-200 cursor-pointer dark:bg-[#05060C]" key={blog.user_id}>
              <img
                src={
                  imgUrl ||
                  "https://g-zwkebgiacpe.vusercontent.net/placeholder.svg?height=200&width=400"
                }
                className="rounded-lg object-cover w-full h-[200px]"
              />
              <div className="my-2">
                <h1 className="text-[#03050c] text-xl font-semibold">
                  {blog.title_en || "Title"}
                </h1>
                <h1 className="text-[#555969] text-xl font-semibold">
                  {blog.title_ka || "სათაური"}
                </h1>
              </div>
              <div>
                <p className="text-[#555969] font-thin">
                  {blog.description_en || "Description"}
                </p>
                <p className="text-[#555969] font-thin">
                  {blog.description_ka || "აღწერა"}
                </p>
                <p className="mt-3 font-bold">{formatDate(blog.created_at)}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Explore;