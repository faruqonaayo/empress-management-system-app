import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

import { addNewCategory, updateCategory } from "../../services/category";
import Heading from "../../ui/Heading";

export default function CreateCategoryForm({ update = null }) {
  const queryClient = useQueryClient();

  const { register, reset, handleSubmit } = useForm();

  const addMutation = useMutation({
    mutationFn: addNewCategory,
    onSuccess: (res) => {
      if (res.statusCode === 201) {
        toast.success(res.message);
        reset();
        queryClient.invalidateQueries(["categories"]);
      } else {
        toast.error(res.message);
      }
    },
  });

  const updateMutation = useMutation({
    mutationFn: updateCategory,
    onSuccess: (res) => {
      if (res.statusCode === 200) {
        toast.success(res.message);
        reset();
        queryClient.invalidateQueries(["categories"]);
      } else {
        toast.error(res.message);
      }
    },
  });

  async function submitAction(data) {
    if (update) {
      updateMutation.mutate({ id: update._id, ...data });
    } else {
      addMutation.mutate(data);
    }
  }

  function errorAction(error) {
    toast.error("Category not added");
  }

  return (
    <form
      className="mt-2 w-[350px] rounded-md bg-white p-2"
      onSubmit={handleSubmit(submitAction, errorAction)}
    >
      <Heading level={4} className="mb-2 text-center">
        {update ? "Update Category" : "New Category"}
      </Heading>
      <div className="mb-2 flex gap-2">
        <label className="font-medium">Category Name: </label>
        <input
          type="text"
          className="w-[200px] rounded-md bg-[#d6d6d6] px-1 py-0.5 text-sm"
          {...register("categoryName", {
            required: "Category name field is required",
          })}
          defaultValue={update ? update.categoryName : ""}
        />
      </div>
      <div className="mb-2 flex gap-2">
        <label className="font-medium">Category Image: </label>
        <input
          type="file"
          className="w-[200px] rounded-md bg-[#d6d6d6] px-1 py-0.5 text-sm"
          {...register("categoryImage", {
            required: update ? false : "Category image field is required",
          })}
          accept="image/*"
        />
      </div>
      <div className="mt-1 flex w-full justify-end">
        <button className="cursor-pointer rounded-md bg-[#333533] px-2 py-1 font-medium text-white transition-all hover:bg-black">
          Add Category
        </button>
      </div>
    </form>
  );
}
