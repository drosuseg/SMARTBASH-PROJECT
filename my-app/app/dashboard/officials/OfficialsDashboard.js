"use client";

import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import StatCards from "./components/StatCards";
import StatusCards from "./components/StatusCards";
import RecentReports from "./components/RecentReports";

export default function OfficialsDashboard() {
  return (
    <div className="h-screen w-screen flex overflow-hidden">
      {/* SIDEBAR */}
      <Sidebar />

      {/* MAIN AREA */}
      <div className="flex-1 flex flex-col bg-gray-50 overflow-hidden">
        {/* TOPBAR (FIXED HEIGHT) */}
        <Topbar />

        {/* CONTENT (FITS REMAINING SPACE) */}
        <div className="flex-1 px-6 py-4 overflow-hidden">
          {/* TITLE */}
          <div className="mb-3">
            <h1 className="text-xl font-semibold text-gray-800">
              Dashboard Overview
            </h1>
            <p className="text-sm text-gray-500">
              Real-time environmental monitoring statistics
            </p>
          </div>

          {/* CONTENT BLOCKS */}
          <div className="space-y-4">
            <StatCards />
            <StatusCards />
            <RecentReports />
          </div>
        </div>
      </div>
    </div>
  );
}
