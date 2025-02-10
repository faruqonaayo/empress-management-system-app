import DashboardHeader from "../features/dashboard/DashboardHeader";
import DashboardStats from "../features/dashboard/DashboardStats";
import InventoryOverview from "../features/dashboard/InventoryOverview";
import RecentOrders from "../features/dashboard/RecentOrders";

export default function HomePage() {
  return (
    <div className="min-h-screen w-full overflow-y-auto bg-[#EDEDED]">
      <div className="container mx-auto px-4 py-6">
        <DashboardHeader />
        <DashboardStats />

        {/* <!-- Recent Orders --> */}
        <RecentOrders />
        <InventoryOverview />
      </div>
    </div>
  );
}
