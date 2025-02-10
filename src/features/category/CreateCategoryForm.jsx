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
      className="mt-2 w-[350px] rounded-md bg-white p-4 shadow-lg transition-all duration-300 ease-in-out hover:shadow-xl"
      onSubmit={handleSubmit(submitAction, errorAction)}
    >
      <Heading level={4} className="mb-4 text-center text-[#11296B]">
        {update ? "Update Category" : "New Category"}
      </Heading>
      <div className="mb-4 flex flex-col gap-2">
        <label className="font-medium text-[#11296B]">Category Name:</label>
        <input
          type="text"
          className="w-full rounded-md bg-[#EDEDED] px-2 py-1 text-sm text-[#11296B] focus:ring-2 focus:ring-[#1E96FC] focus:outline-none"
          {...register("categoryName", {
            required: "Category name field is required",
          })}
          defaultValue={update ? update.categoryName : ""}
        />
      </div>
      <div className="mb-4 flex flex-col gap-2">
        <label className="font-medium text-[#11296B]">Category Image:</label>
        <input
          type="file"
          className="w-full rounded-md bg-[#EDEDED] px-2 py-1 text-sm text-[#11296B] focus:ring-2 focus:ring-[#1E96FC] focus:outline-none"
          {...register("categoryImage", {
            required: update ? false : "Category image field is required",
          })}
          accept="image/*"
        />
      </div>
      <div className="mt-4 flex w-full justify-end">
        <button className="cursor-pointer rounded-md bg-[#1E96FC] px-4 py-2 font-medium text-white transition-all duration-300 ease-in-out hover:bg-[#11296B]">
          {update ? "Update Category" : "Add Category"}
        </button>
      </div>
    </form>
  );
}
