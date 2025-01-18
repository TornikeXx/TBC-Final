import { useQuery } from "@tanstack/react-query";
import { FilterValue } from "../../../pages/explore/types";
import { getBlogs } from "../../../supabase/blogs";

export const useGetBlogs = (searchText: FilterValue) => {
  return useQuery({
    queryKey: ["blogs", searchText],
    queryFn: () => getBlogs(searchText),
  });
};