import { Link, useParams } from "react-router-dom";
import { useGetSingleBlog } from "../../react-query/query/blogs";
import { MAIN_PATHS } from "../../routes/main/index.enum";
import { useTranslation } from "react-i18next";

const SinglePet = () => {
  const { id } = useParams<{ id: string }>();

  const blogId = id ? Number(id) : undefined;
  const { t } = useTranslation();

  const { data: blog } = useGetSingleBlog(blogId as number);

  return (
    <div className="mb-6 tablet:mb-8">
      {blog && (
        <div className="flex gap-3 flex-col tablet:flex-row">
          <img
            src={
              blog.image_url
                ? `${import.meta.env.VITE_SUPABASE_IMAGES_STORAGE_URL}/${blog.image_url}`
                : "https://g-zwkebgiacpe.vusercontent.net/placeholder.svg?height=200&width=400"
            }
            alt="Blog"
            className="rounded-[40px] tablet:w-[50%]  w-full h-[300px] object-cover"
          />
          <div className="w-full tablet:w-[50%] gap-8 flex flex-col justify-between">
            <p className="text-[#555969] dark:text-[#fff] text-xl font-semibold">
              {blog.description_ka}
            </p>
            <div className="flex justify-between w-full">
              <Link to={`/${MAIN_PATHS.EXPLORE}`} className="text-[#555969]">
                {t("go_back")}
              </Link>
              <p className="text-green cursor-pointer">
                {t("match_on_petters")}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SinglePet;
