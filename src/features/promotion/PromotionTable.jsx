import { useMutation, useQueryClient } from "@tanstack/react-query";
import Table from "../../ui/Table";
import URL from "../../services/backendUrl";
import toast from "react-hot-toast";
import Modal from "../../ui/Modal";
import usePromotions from "../../hooks/usePromotions";
import CreatePromotionForm from "./CreatePromotionForm";
import { deletePromotion } from "../../services/promotion";

export default function PromotionTable() {
  const queryClient = useQueryClient();
  const { data, isLoading } = usePromotions();

  const deleteMutation = useMutation({
    mutationFn: deletePromotion,
    onSuccess: (res) => {
      if (res.statusCode === 200) {
        toast.success(res.message);
        queryClient.invalidateQueries(["categories"]);
      } else {
        toast.error(res.message);
      }
    },
  });

  if (isLoading) {
    return <p>loading...</p>;
  }

  if (!data) {
    return <p>Failed to fetch</p>;
  }

  const promotions = data.data;

  console.log(promotions);

  return (
    <Table>
      <Table.TableHead className="cursor-pointer rounded-t-lg bg-[#d6d6d6] px-2 py-4">
        <Table.TableHeading>
          <h3 className="font-montserrat w-40 text-center font-bold">Image</h3>
        </Table.TableHeading>
        <Table.TableHeading>
          <h3 className="font-montserrat w-40 text-center font-bold">
            Promotion Name
          </h3>
        </Table.TableHeading>
        <Table.TableHeading>
          <h3 className="font-montserrat w-40 text-center font-bold">
            Discount
          </h3>
        </Table.TableHeading>
        <Table.TableHeading>
          <h3 className="font-montserrat w-40 text-center font-bold">Expiry</h3>
        </Table.TableHeading>
        <Table.TableHeading>
          <h3 className="font-montserrat w-32 text-center font-bold">Action</h3>
        </Table.TableHeading>
      </Table.TableHead>
      <Table.TableBody>
        {promotions.map((promotion) => (
          <Table.TableRow
            key={promotion._id}
            className="cursor-pointer border-b border-[#d6d6d6] py-1 transition-all hover:bg-[#efefef]"
          >
            <div className="flex w-40 items-center justify-center">
              <img
                src={`${URL}/${promotion.promotionImage}`}
                alt={promotion.categoryName}
                className="h-14 w-20 rounded-md"
              />
            </div>
            <div className="flex w-40 items-center justify-center">
              <p className="font-medium">{promotion.promotionName}</p>
            </div>
            <div className="flex w-40 items-center justify-center">
              <p className="font-medium">{promotion.discount}</p>
            </div>
            <div className="flex w-40 items-center justify-center">
              <p className="font-medium">{promotion.expiry.split("T")[0]}</p>
            </div>

            <div className="flex w-32 items-center justify-end gap-2">
              <Modal>
                <Modal.Window />
                <Modal.Open
                  content={<CreatePromotionForm update={promotion} />}
                >
                  <button className="cursor-pointer rounded-full bg-[#d6d6d6] p-0.5 shadow transition-all hover:bg-[#c1c0c0]">
                    <img src="./icons/pencil.svg" alt="" className="w-6" />
                  </button>
                </Modal.Open>
              </Modal>

              <button
                className="cursor-pointer rounded-full bg-[#d6d6d6] p-0.5 shadow transition-all hover:bg-[#c1c0c0]"
                onClick={() => deleteMutation.mutate(promotion._id)}
              >
                <img src="./icons/trash.svg" alt="" className="w-6" />
              </button>
            </div>
          </Table.TableRow>
        ))}
      </Table.TableBody>
    </Table>
  );
}
