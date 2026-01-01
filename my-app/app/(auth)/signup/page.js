"use client";
import Link from "next/link";

import { useState } from "react";
import InputField from "../../components/InputField";
import FileUpload from "../../components/FileUpload";
import RoleSelector from "../../components/RoleSelector";
import Header from "../../components/Header";

export default function SignUpPage() {
  const [role, setRole] = useState("Resident");

  const handleSubmit = () => {
    console.log("Form submitted");
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />

      <div className="flex items-center justify-center p-8">
        <div className="bg-white rounded-lg shadow-lg max-w-5xl w-full p-12 border border-gray-200">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-1">Sign Up</h1>
            <p className="text-sm text-gray-600">
              Have an account?{" "}
              <button className="text-blue-600 hover:underline">
                Login Now
              </button>
            </p>
          </div>

          {role === "Resident" && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <InputField
                  label="First Name"
                  placeholder="Enter first name"
                  defaultValue="Donita Rose"
                  required
                />
                <InputField
                  label="Middle Name"
                  placeholder="Enter middle name"
                />
                <InputField
                  label="Last Name"
                  placeholder="Enter last name"
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <InputField
                  type="email"
                  label="Email Address"
                  placeholder="Enter email"
                  defaultValue="Braybasakpardo@gmail.com"
                  required
                />
                <InputField
                  label="Contact No."
                  placeholder="Enter contact number"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <InputField
                  type="password"
                  label="Password"
                  placeholder="Enter password"
                  defaultValue="••••••••••••••••••••"
                  required
                />
                <div className="grid grid-cols-2 gap-4">
                  <InputField type="number" label="Age" placeholder="Age" />
                  <InputField label="Gender" placeholder="Gender" />
                </div>
              </div>

              <InputField
                type="password"
                label="Confirm Password"
                placeholder="Confirm password"
                defaultValue="••••••••••••••••••••"
                required
              />

              <RoleSelector
                role={role}
                onChange={(e) => setRole(e.target.value)}
              />

              <FileUpload
                label="Proof of Authority"
                instructions={[
                  "For Residents 18 and above:",
                  "Please upload a valid government-issued ID to verify your identity.",
                  "For Residents under 18:",
                  "Please upload a valid document of a parent or legal guardian. Accepted documents include:",
                  "• Parent/Guardian government-issued ID",
                  "• Birth Certificate showing parent/guardian",
                  "• Barangay or LGU certification of guardianship",
                ]}
              />
            </div>
          )}

          {role === "Services" && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <InputField
                  label="Name"
                  placeholder="Enter your name"
                  required
                />
                <InputField
                  label="Location"
                  placeholder="Enter location"
                  required
                />
              </div>
              <InputField
                type="email"
                label="Email"
                placeholder="Enter email"
                required
              />
              <InputField
                label="Contact No."
                placeholder="Enter contact number"
              />
              <InputField
                type="password"
                label="Password"
                placeholder="Enter password"
                required
              />
              <InputField
                type="password"
                label="Confirm Password"
                placeholder="Confirm password"
                required
              />

              <RoleSelector
                role={role}
                onChange={(e) => setRole(e.target.value)}
              />

              <FileUpload
                label="Upload Files"
                instructions={[
                  "• Appointment Letter",
                  "• Oath of Office",
                  "• Barangay Resolution",
                  "• Certificate of Incumbency",
                  "• LGU Endorsement",
                ]}
              />
            </div>
          )}

          {role === "BrgyOfficials" && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <InputField
                  label="Barangay Name"
                  placeholder="Enter barangay name"
                  required
                />
                <InputField
                  label="Contact"
                  placeholder="Enter contact"
                  required
                />
              </div>
              <InputField
                label="Location"
                placeholder="Enter location"
                required
              />
              <InputField
                type="email"
                label="Email"
                placeholder="Enter email"
                required
              />
              <InputField
                type="password"
                label="Password"
                placeholder="Enter password"
                required
              />
              <InputField
                type="password"
                label="Confirm Password"
                placeholder="Confirm password"
                required
              />

              <RoleSelector
                role={role}
                onChange={(e) => setRole(e.target.value)}
              />

              <FileUpload
                label="Upload Files"
                instructions={[
                  "• Appointment Letter",
                  "• Oath of Office",
                  "• Barangay Resolution",
                  "• Certificate of Incumbency",
                  "• LGU Endorsement",
                ]}
              />
            </div>
          )}

          <div className="mt-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="flex-1 border-t border-gray-300"></div>
              <span className="text-gray-500 text-sm">or</span>
              <div className="flex-1 border-t border-gray-300"></div>
            </div>

            <button
              type="button"
              className="w-full bg-white border border-gray-300 text-gray-700 py-3 rounded-md hover:bg-gray-50 transition flex items-center justify-center gap-3 mb-4"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
              Login with Google
            </button>

            <button
              onClick={handleSubmit}
              className="w-full bg-green-500 text-white py-3 rounded-md hover:bg-green-600 transition font-medium"
            >
              Register
            </button>

          <p className="text-center text-sm text-gray-600 mt-4">
              Have an account?{" "}
              <Link href="/signin" className="text-blue-600 hover:underline font-medium">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}