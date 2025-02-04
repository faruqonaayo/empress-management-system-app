import CategoryTable from "../features/category/CategoryTable";
import Heading from "../ui/Heading";

export default function CategoriesPage() {
  return (
    <div className="p-8 w-full">
      <Heading level={2}>Categories</Heading>
      <div className="w-full flex justify-between mt-10">
        <CategoryTable />
      </div>
    </div>
  );
}
