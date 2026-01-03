"use client";

import { useState } from "react";

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);

  const menu = [
    { name: "Dashboard", icon: "/Sidebars_icons/dashboard_logo.png" },
    { name: "Incident Map", icon: "/Sidebars_icons/incidentmap_logo.png" },
    { name: "All Reports", icon: "/Sidebars_icons/All Reports_logo.png" },
    { name: "AI Assistant", icon: "/Sidebars_icons/Ai Assistant_logo.png" },
    { name: "Services", icon: "/Sidebars_icons/Service_logo.png" },
    { name: "Residents Approval", icon: "/Sidebars_icons/Residents Approval_logo.png" },
  ];

  return (
    <aside
      className={`${
        collapsed ? "w-20" : "w-64"
      } h-screen bg-white border-r px-4 py-6 flex flex-col transition-all duration-300`}
    >
      {/* TOP LOGO + TOGGLE */}
      <div className="mb-16 flex items-center justify-between">
        {!collapsed && (
          <img
            src="/logo.png"
            alt="Logo"
            className="h-12 w-auto object-contain"
          />
        )}

        <button
          onClick={() => setCollapsed(!collapsed)}
          className="h-8 w-8 border rounded-lg flex items-center justify-center hover:bg-gray-100 transition"
        >
          <img
            src="/Sidebars_icons/sidebar_toggle.png"
            alt="Toggle Sidebar"
            className={`h-4 w-4 transition-transform ${
              collapsed ? "rotate-180" : ""
            }`}
          />
        </button>
      </div>

      {/* MENU (FLEX-1 TAKES SPACE) */}
      <nav className="space-y-6 text-sm text-gray-700 flex-1">
        {menu.map((item) => (
          <div
            key={item.name}
            className="group flex items-center gap-4 cursor-pointer px-3 py-2 rounded-lg hover:bg-green-50 transition"
          >
            <img
              src={item.icon}
              alt={item.name}
              className="h-5 w-5 object-contain opacity-70 transition group-hover:opacity-10 group-hover:sepia group-hover:saturate-200group-hover:hue-rotate-[90deg]"
            />

            {!collapsed && (
              <span className="transition group-hover:text-green-700">
                {item.name}
              </span>
            )}
          </div>
        ))}
      </nav>

      {/* LOGOUT — ALWAYS BOTTOM */}
      <button className="border rounded-lg py-2 text-sm text-gray-600 hover:bg-gray-100 transition">
        {!collapsed ? "Logout" : "⎋"}
      </button>
    </aside>
  );
}
