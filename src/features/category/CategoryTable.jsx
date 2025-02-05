import { useMutation, useQueryClient } from "@tanstack/react-query";
import Table from "../../ui/Table";
import { deleteCategory } from "../../services/category";
import URL from "../../services/backendUrl";
import toast from "react-hot-toast";
import useCategories from "../../hooks/useCategories";
import Modal from "../../ui/Modal";
import CreateCategoryForm from "./CreateCategoryForm";

export default function CategoryTable() {
  const queryClient = useQueryClient();
  const { data, isLoading } = useCategories();

  const deleteMutation = useMutation({
    mutationFn: deleteCategory,
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

  const categories = data.data;

  console.log(categories);

  return (
    <Table>
      <Table.TableHead className="cursor-pointer rounded-t-lg bg-[#d6d6d6] px-2 py-4">
        <Table.TableHeading>
          <h3 className="font-montserrat w-40 text-center font-bold">Image</h3>
        </Table.TableHeading>
        <Table.TableHeading>
          <h3 className="font-montserrat w-40 text-center font-bold">
            Category Name
          </h3>
        </Table.TableHeading>
        <Table.TableHeading>
          <h3 className="font-montserrat w-32 text-center font-bold">Action</h3>
        </Table.TableHeading>
      </Table.TableHead>
      <Table.TableBody>
        {categories.map((category) => (
          <Table.TableRow
            key={category._id}
            className="cursor-pointer border-b border-[#d6d6d6] py-1 transition-all hover:bg-[#efefef]"
          >
            <div className="flex w-40 items-center justify-center">
              <img
                src={`${URL}/${category.categoryImage}`}
                alt={category.categoryName}
                className="h-14 w-20 rounded-md"
              />
            </div>
            <div className="flex w-40 items-center justify-center">
              <p className="font-medium">{category.categoryName}</p>
            </div>

            <div className="flex w-32 items-center justify-end gap-2">
              <Modal>
                <Modal.Window />
                <Modal.Open content={<CreateCategoryForm update={category} />}>
                  <button className="cursor-pointer rounded-full bg-[#d6d6d6] p-0.5 shadow transition-all hover:bg-[#c1c0c0]">
                    <img src="./icons/pencil.svg" alt="" className="w-6" />
                  </button>
                </Modal.Open>
              </Modal>

              <button
                className="cursor-pointer rounded-full bg-[#d6d6d6] p-0.5 shadow transition-all hover:bg-[#c1c0c0]"
                onClick={() => deleteMutation.mutate(category._id)}
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
