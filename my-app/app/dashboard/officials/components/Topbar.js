"use client";

export default function Topbar() {
  return (
    <div className="flex items-center justify-between px-6 py-4 bg-white border-b">
      {/* SEARCH BAR */}
      <div className="relative w-full max-w-xl">
        {/* MAGNIFYING GLASS ICON */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-4.35-4.35m1.6-5.65a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>

        {/* INPUT */}
        <input
          type="text"
          placeholder="Search"
          className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
        />
      </div>

      {/* RIGHT SIDE */}
      <div className="flex items-center gap-4 ml-6">
        {/* NOTIFICATION ICON */}
        <button className="h-10 w-10 border rounded-md flex items-center justify-center hover:bg-gray-100 transition">
          <img
            src="/Topbar_icons/Notification_icons.png"
            alt="Notifications"
            className="h-5 w-5 opacity-70"
          />
        </button>

        {/* AVATAR */}
        <div className="h-10 w-10 bg-gray-300 rounded-full" />

        {/* USER INFO */}
        <div className="text-sm">
          <div className="font-medium">Email@gmail.com</div>
          <div className="text-gray-500 text-xs">Brgy. Official</div>
        </div>
      </div>
    </div>
  );
}
