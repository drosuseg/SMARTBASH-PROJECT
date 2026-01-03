"use client";

export default function FormContainer({ children }) {
  return (
    <div className="bg-white rounded-lg shadow-lg max-w-lg w-full p-8 border border-gray-200">
      {children}
    </div>
  );
}
