export default function CreateCategoryForm() {
  return (
    <form className="mt-2 w-[350px] rounded-md bg-white p-2">
      <h1 className="font-montserrat mb-4 text-center text-xl font-bold tracking-wide">
        New Category
      </h1>
      <div className="mb-2 flex gap-2">
        <label className="font-medium">Category Name: </label>
        <input
          type="text"
          className="w-[200px] rounded-md bg-[#d6d6d6] px-1 py-0.5 text-sm"
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
