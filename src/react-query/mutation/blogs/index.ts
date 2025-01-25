import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addBlog, deleteBlog } from "../../../supabase/blogs";

export const useHandleAddingBlog = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["add-blog"],
    mutationFn: addBlog,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["blogs"],
      });
    },
  });
};
export const useHandleDeleteBlog = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["delete-blog"],
    mutationFn: deleteBlog,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["blogs"],
      });
    },
  });
};
