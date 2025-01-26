import { supabase } from "..";
import { FilterValue, uploadPayload } from "../../pages/explore/types";

export const getBlogs = async (searchValue: FilterValue) => {
  const res = await supabase
    .from("blogs")
    .select("*")
    .or(
      `title_en.ilike.%${searchValue.searchText}%,description_en.ilike.%${searchValue.searchText}%`,
    );
  return res.data;
};

export const addBlog = async (payload: uploadPayload) => {
  try {
    let imageUrl: string | null = null;

    if (payload.image_url) {
      const file = payload.image_url as File;
      const { data: uploadData, error: uploadError } = await supabase.storage
        .from("blog_images")
        .upload(file.name, file);

      if (uploadError) {
        throw new Error(`Image upload failed: ${uploadError.message}`);
      }

      imageUrl = uploadData?.path ? `blog_images/${uploadData.path}` : null;
    }

    const { data, error } = await supabase.from("blogs").insert({
      title_en: payload.title_en,
      title_ka: payload.title_ka,
      description_en: payload.description_en,
      description_ka: payload.description_ka,
      image_url: imageUrl,
      user_id: payload.user_id,
    });

    if (error) {
      throw new Error(error.message);
    }

    return data;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const deleteBlog = async (blogId: number) => {
  try {
    const { data: blog, error: fetchError } = await supabase
      .from("blogs")
      .select("image_url")
      .eq("id", blogId)
      .single();

    if (fetchError) {
      throw new Error(`Failed to fetch blog: ${fetchError.message}`);
    }

    if (blog?.image_url) {
      const imagePath = blog.image_url.replace("blog_images/", "");
      const { error: storageError } = await supabase.storage
        .from("blog_images")
        .remove([imagePath]);

      if (storageError) {
        throw new Error(`Image deletion failed: ${storageError.message}`);
      }
    }

    const { error: deleteError } = await supabase
      .from("blogs")
      .delete()
      .eq("id", blogId);

    if (deleteError) {
      throw new Error(`Blog deletion failed: ${deleteError.message}`);
    }

    return { message: "Blog deleted successfully!" };
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const getBlogById = async (id: number) => {
  try {
    const { data, error } = await supabase
      .from("blogs")
      .select("*")
      .eq("id", id)
      .single();

    if (error) {
      throw new Error(error.message);
    }

    return data;
  } catch (error: any) {
    console.error("Error fetching blog by ID:", error.message);
    throw error;
  }
};
