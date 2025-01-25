import { useQuery } from "@tanstack/react-query";
import { FilterValue } from "../../../pages/explore/types";
import { getBlogById, getBlogs } from "../../../supabase/blogs";

export const useGetBlogs = (searchText: FilterValue) => {
  return useQuery({
    queryKey: ["blogs", searchText],
    queryFn: () => getBlogs(searchText),
  });
};

export const useGetSingleBlog = (id: number) => {
  return useQuery({
    queryKey: ["blog", id],
    queryFn: () => getBlogById(id),
    enabled: !!id,
  });
};
