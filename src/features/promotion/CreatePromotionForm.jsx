import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

import { addNewCategory, updateCategory } from "../../services/category";
import Heading from "../../ui/Heading";
import { addNewPromotion, updatePromotion } from "../../services/promotion";

export default function CreatePromotionForm({ update = null }) {
  const queryClient = useQueryClient();

  const { register, reset, handleSubmit } = useForm();

  console.log(update);

  const addMutation = useMutation({
    mutationFn: addNewPromotion,
    onSuccess: (res) => {
      if (res.statusCode === 201) {
        toast.success(res.message);
        reset();
        queryClient.invalidateQueries(["promotions"]);
      } else {
        toast.error(res.message);
      }
    },
  });

  const updateMutation = useMutation({
    mutationFn: updatePromotion,
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
    toast.error("Promotion not added");
  }

  return (
    <form
      className="mt-2 w-[350px] rounded-md bg-white p-2"
      onSubmit={handleSubmit(submitAction, errorAction)}
    >
      <Heading level={4} className="mb-2 text-center">
        {update ? "Update Promotion" : "New Promotion"}
      </Heading>
      <div className="mb-2 flex flex-col gap-2">
        <label className="font-medium">Promotion Name: </label>
        <input
          type="text"
          className="w-full rounded-md bg-[#d6d6d6] px-1 py-0.5 text-sm"
          {...register("promotionName", {
            required: "Promotion name field is required",
          })}
          defaultValue={update ? update.promotionName : ""}
        />
      </div>
      <div className="mb-2 flex flex-col gap-2">
        <label className="font-medium">Promotion Discount: </label>
        <input
          type="number"
          className="w-full rounded-md bg-[#d6d6d6] px-1 py-0.5 text-sm"
          {...register("discount", {
            required: "Promotion discount field is required",
          })}
          defaultValue={update ? update.discount : ""}
        />
      </div>
      <div className="mb-2 flex flex-col gap-2">
        <label className="font-medium">Promotion Expiry: </label>
        <input
          type="date"
          className="w-full rounded-md bg-[#d6d6d6] px-1 py-0.5 text-sm"
          {...register("expiry", {
            required: "Promotion expiry field is required",
          })}
          defaultValue={update ? update.expiry.split("T")[0] : ""}
        />
      </div>
      <div className="mb-2 flex flex-col gap-2">
        <label className="font-medium">Cover Image: </label>
        <input
          type="file"
          className="w-full rounded-md bg-[#d6d6d6] px-1 py-0.5 text-sm"
          {...register("promotionImage", {
            required: update ? false : "Promotion image field is required",
          })}
          accept="image/*"
        />
      </div>
      <div className="mt-4 flex w-full justify-end">
        <button className="cursor-pointer rounded-md bg-[#333533] px-2 py-1 font-medium text-white transition-all hover:bg-black">
          Add Promotion
        </button>
      </div>
    </form>
  );
}
