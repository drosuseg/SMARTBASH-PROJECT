"use client";

export default function StatusCards() {
  const statuses = [
    {
      title: "Pending",
      count: 12,
      subtitle: "reports awaiting response",
      bg: "bg-orange-50",
      text: "text-orange-600",
      border: "border border-orange-200",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-orange-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9v3m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"
          />
        </svg>
      ),
    },
    {
      title: "In Progress",
      count: 3,
      subtitle: "reports being addressed",
      bg: "bg-blue-50",
      text: "text-blue-600",
      border: "border border-blue-200",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-blue-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.8}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 15l6-6 4 4 5-5m0 0h-4m4 0v4"
          />
        </svg>
      ),
    },
    {
      title: "Resolved",
      count: 5,
      subtitle: "reports completed",
      bg: "bg-green-50",
      text: "text-green-600",
      border: "border border-green-200",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-green-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12l2 2 4-4m5 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
  ];

  return (
    <div className="grid grid-cols-3 gap-5 mt-4">
      {statuses.map((s) => (
        <div
          key={s.title}
          className={`${s.bg} ${s.border} rounded-xl p-4 flex items-start gap-3`}
        >
          {/* ICON */}
          <div className="h-9 w-9 rounded-full bg-white flex items-center justify-center">
            {s.icon}
          </div>

          {/* TEXT */}
          <div>
            <div className={`font-medium ${s.text}`}>{s.title}</div>
            <div className="text-sm text-gray-500">
              <span className={`font-semibold ${s.text}`}>{s.count}</span>{" "}
              {s.subtitle}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
