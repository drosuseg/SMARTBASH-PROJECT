import Link from "next/link";

export default function Home() {
  return (
    <div className="text-center mt-20">
      <h1 className="text-3xl font-bold mb-8">Welcome to My App</h1>
      <div className="space-x-4">
        <Link href="/signin" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Sign In
        </Link>
        <Link href="/signup" className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
          Sign Up
        </Link>
      </div>
    </div>
  );
}
