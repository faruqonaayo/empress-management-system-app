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
    return <p>Loading...</p>;
  }

  if (!data) {
    return <p>Failed to fetch</p>;
  }

  const categories = data.data;

  return (
    <Table>
      <Table.TableHead className="cursor-pointer rounded-t-lg bg-[#11296B] px-2 py-4 shadow transition-all duration-300 ease-in-out hover:shadow-lg">
        <Table.TableHeading>
          <h3 className="font-montserrat w-40 text-center font-bold text-white">
            Image
          </h3>
        </Table.TableHeading>
        <Table.TableHeading>
          <h3 className="font-montserrat w-40 text-center font-bold text-white">
            Category Name
          </h3>
        </Table.TableHeading>
        <Table.TableHeading>
          <h3 className="font-montserrat w-32 text-center font-bold text-white">
            Action
          </h3>
        </Table.TableHeading>
      </Table.TableHead>
      <Table.TableBody>
        {categories.map((category) => (
          <Table.TableRow
            key={category._id}
            className="cursor-pointer border-b border-[#EDEDED] py-2 transition-all duration-300 ease-in-out hover:bg-[#F5F5F5] hover:shadow-md"
          >
            <div className="flex w-40 items-center justify-center">
              <img
                src={`${URL}/${category.categoryImage}`}
                alt={category.categoryName}
                className="h-14 w-20 rounded-md transition-all duration-300 ease-in-out hover:scale-110"
              />
            </div>
            <div className="flex w-40 items-center justify-center">
              <p className="font-medium text-[#11296B]">
                {category.categoryName}
              </p>
            </div>

            <div className="flex w-32 items-center justify-end gap-2">
              <Modal>
                <Modal.Window />
                <Modal.Open content={<CreateCategoryForm update={category} />}>
                  <button className="cursor-pointer rounded-full bg-[#e4f2ff] p-1 shadow transition-all duration-300 ease-in-out hover:scale-110 hover:bg-[#11296B]">
                    <img src="./icons/pencil.svg" alt="Edit" className="w-5" />
                  </button>
                </Modal.Open>
              </Modal>

              <button
                className="cursor-pointer rounded-full bg-[#FFDB57] p-1 shadow transition-all duration-300 ease-in-out hover:scale-110 hover:bg-[#FFCB05]"
                onClick={() => deleteMutation.mutate(category._id)}
              >
                <img src="./icons/trash.svg" alt="Delete" className="w-5" />
              </button>
            </div>
          </Table.TableRow>
        ))}
      </Table.TableBody>
    </Table>
  );
}
