"use client";

export default function StatCards() {
  const stats = [
    {
      title: "Total Reports",
      value: "162",
      highlight: true,
    },
    {
      title: "Fire Reports",
      value: "54",
    },
    {
      title: "Flood Reports",
      value: "54",
    },
  ];

  const handleClick = (title) => {
    console.log("Clicked:", title);
    // later you can add routing here
  };

  return (
    <div className="grid grid-cols-3 gap-5 mb-6">
      {stats.map((s) => (
        <div
          key={s.title}
          onClick={() => handleClick(s.title)}
          className={`group cursor-pointer ${
            s.highlight
              ? "bg-green-700 text-white shadow-lg shadow-green-900/30"
              : "bg-white shadow-md"
          } rounded-2xl p-5 transition hover:shadow-xl`}
        >
          {/* TOP ROW */}
          <div className="flex items-center justify-between">
            <span
              className={
                s.highlight
                  ? "text-white font-medium"
                  : "font-medium text-gray-800"
              }
            >
              {s.title}
            </span>

            {/* ICON + TOOLTIP */}
            <div className="relative">
              {/* CIRCLE */}
              <div
                className={
                  s.highlight
                    ? "h-10 w-10 rounded-full flex items-center justify-center border border-white/40"
                    : "h-9 w-9 rounded-full flex items-center justify-center border border-gray-300"
                }
              >
                {/* ARROW */}
                <img
                  src="/StatCard_icons/arrow right up_icons.png"
                  alt="View"
                  className={`transition-transform duration-300 ${
                    s.highlight ? "h-7 w-7" : "h-6 w-6"
                  } group-hover:rotate-45`}
                />
              </div>

              {/* TOOLTIP */}
              <div className="absolute -top-9 right-1/2 translate-x-1/2 whitespace-nowrap opacity-0 group-hover:opacity-100 transition text-xs bg-gray-900 text-white px-2 py-1 rounded">
                View details
              </div>
            </div>
          </div>

          {/* VALUE */}
          <h2
            className={
              s.highlight
                ? "text-3xl font-bold mt-6 text-white"
                : "text-3xl font-bold mt-6 text-gray-900"
            }
          >
            {s.value}
          </h2>
        </div>
      ))}
    </div>
  );
}
