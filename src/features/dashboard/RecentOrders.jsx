import Heading from "../../ui/Heading";

export default function RecentOrders() {
  return (
    <div className="my-6 rounded-lg bg-white p-6 shadow-lg transition-all duration-300 ease-in-out hover:shadow-2xl">
      <Heading level={3} className="mb-4 text-lg font-semibold text-[#11296B]">
        Recent Orders
      </Heading>
      <table className="w-full text-left">
        <thead>
          <tr className="border-b bg-[#EDEDED]">
            <th className="font-montserrat py-2 text-[#11296B]">Customer</th>
            <th className="font-montserrat py-2 text-[#11296B]">Amount</th>
            <th className="font-montserrat py-2 text-[#11296B]">Date</th>
            <th className="font-montserrat py-2 text-[#11296B]">View Order</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b transition-all duration-300 ease-in-out hover:bg-gray-50">
            <td className="py-2 text-[#11296B]">John Doe</td>
            <td className="py-2 text-[#11296B]">$1,200</td>
            <td className="py-2">Feb 9, 2025</td>
            <td className="py-2">
              <a href="#" className="text-[#1E96FC] hover:underline">
                View Order
              </a>
            </td>
          </tr>
          <tr className="border-b transition-all duration-300 ease-in-out hover:bg-gray-50">
            <td className="py-2 text-[#11296B]">Jane Smith</td>
            <td className="py-2 text-[#11296B]">$2,500</td>
            <td className="py-2">Feb 8, 2025</td>
            <td className="py-2">
              <a href="#" className="text-[#1E96FC] hover:underline">
                View Order
              </a>
            </td>
          </tr>
        </tbody>
      </table>
      <div className="mt-4 text-right">
        <a href="#" className="text-[#1E96FC] hover:underline">
          View All Orders
        </a>
      </div>
    </div>
  );
}
