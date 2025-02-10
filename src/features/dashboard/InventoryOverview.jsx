import Heading from "../../ui/Heading";

export default function InventoryOverview() {
  return (
    <div className="rounded-lg bg-white p-6 shadow-lg transition-all duration-300 ease-in-out hover:shadow-2xl">
      <Heading level={3} className="mb-4 text-lg font-semibold text-[#11296B]">
        Inventory Overview
      </Heading>
      <ul className="space-y-2">
        <li className="border-b py-2 text-[#11296B] transition-all duration-300 ease-in-out hover:bg-gray-50">
          Gold Jewelry:{" "}
          <span className="font-bold text-[#FFDB57]">450 Items</span>
        </li>
        <li className="border-b py-2 text-[#11296B] transition-all duration-300 ease-in-out hover:bg-gray-50">
          Diamond Jewelry:{" "}
          <span className="font-bold text-[#11296B]">300 Items</span>
        </li>
        <li className="border-b py-2 text-[#11296B] transition-all duration-300 ease-in-out hover:bg-gray-50">
          Silver Jewelry:{" "}
          <span className="font-bold text-[#FFCB05]">500 Items</span>
        </li>
      </ul>
      <div className="mt-4 text-right">
        <a href="#" className="text-[#1E96FC] hover:underline">
          Go to Categories
        </a>
      </div>
    </div>
  );
}
