import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-100 px-8 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-12 h-12 bg-green-700 rounded-full flex items-center justify-center">
          </div>
          <nav className="flex items-center gap-8">
            <button className="text-gray-700 hover:text-gray-900 font-medium">
              <Link href="/" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                  Home
                </Link>
            </button>
            <span className="text-gray-400">•</span>
            <button className="text-gray-700 hover:text-gray-900">About</button>
            <span className="text-gray-400">•</span>
            <button className="text-gray-700 hover:text-gray-900">
              Features
            </button>
            <span className="text-gray-400">•</span>
            <button className="text-gray-700 hover:text-gray-900">
              Contact Us
            </button>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <button className="px-6 py-2 text-gray-700 hover:text-gray-900">
           <Link href="/signin" className="text-blue-600 hover:underline font-medium">
                Login
              </Link>
          </button>
          <button className="px-6 py-2 bg-white border border-gray-300 rounded-md hover:bg-gray-50 flex items-center gap-2">
             <Link href="/signup" className="text-blue-600 hover:underline font-medium">
                Register
              </Link>
            <span>↗</span>
          </button>
        </div>
      </div>
    </header>
  );
}