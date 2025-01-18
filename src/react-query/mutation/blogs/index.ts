import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addBlog } from "../../../supabase/blogs";

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