export default function DashboardStats () {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      <div className="transform rounded-lg bg-white p-6 shadow-lg transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl">
        <h2 className="text-lg font-semibold text-[#11296B]">
          Total Inventory
        </h2>
        <p className="mt-2 text-2xl font-bold text-[#1E96FC]">1,250 Items</p>
      </div>
      <div className="transform rounded-lg bg-white p-6 shadow-lg transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl">
        <h2 className="text-lg font-semibold text-[#11296B]">Total Sales</h2>
        <p className="mt-2 text-2xl font-bold text-[#11296B]">$25,000</p>
      </div>
      <div className="transform rounded-lg bg-white p-6 shadow-lg transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl">
        <h2 className="text-lg font-semibold text-[#11296B]">Pending Orders</h2>
        <p className="mt-2 text-2xl font-bold text-[#FFDB57]">15 Orders</p>
      </div>
    </div>
  );
}
