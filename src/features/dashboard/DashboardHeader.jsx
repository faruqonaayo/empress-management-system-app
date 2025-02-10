import { useState } from "react";

import Heading from "../../ui/Heading";

export default function DashboardHeader() {
  const [showNotifications, setShowNotifications] = useState(false);

  const toggleNotifications = () => {
    setShowNotifications(!showNotifications);
  };
  return (
    <div className="mb-6 flex items-center justify-between rounded-lg bg-white p-4 shadow-lg transition-all duration-300 ease-in-out hover:shadow-2xl">
      <Heading level={2} className="font-montserrat text-2xl font-bold text-[#11296B]">
        Empress Dashboard
      </Heading>
      <div className="flex items-center space-x-4">
        <button
          className="relative rounded-lg bg-[#1E96FC] p-2 text-white transition-all duration-300 ease-in-out hover:bg-[#11296B]"
          onClick={toggleNotifications}
        >
          🔔
          {showNotifications && (
            <div className="absolute right-0 z-30 mt-2 w-64 rounded-lg bg-white p-4 shadow-2xl transition-all duration-300 ease-in-out">
              <p className="font-semibold text-[#11296B]">Stock Alerts</p>
              <ul className="space-y-2">
                <li className="text-[#FFDB57]">Gold Jewelry: Low Stock</li>
                <li className="text-[#FFCB05]">
                  Diamond Jewelry: Critical Stock
                </li>
                <li className="text-gray-500">
                  Silver Jewelry: Sufficient Stock
                </li>
              </ul>
            </div>
          )}
        </button>
        <input
          type="text"
          placeholder="Search..."
          className="rounded-lg border p-2 text-sm transition-all duration-300 ease-in-out focus:ring-2 focus:ring-[#1E96FC]"
        />
        <button className="rounded-lg bg-[#fc1e4a] px-4 py-2 text-white transition-all duration-300 ease-in-out hover:bg-[#11296B]">
          Logout
        </button>
      </div>
    </div>
  );
}
