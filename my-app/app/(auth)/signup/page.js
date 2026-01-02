"use client";
import Link from "next/link";
import { useState } from "react";
import InputField from "../../components/InputField";
import FileUpload from "../../components/FileUpload";
import RoleSelector from "../../components/RoleSelector";
import Header from "../../components/Header";

export default function SignUpPage() {
  const [role, setRole] = useState("Resident");
  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [formData, setFormData] = useState({
    // Resident fields
    firstName: "",
    middleName: "",
    lastName: "",
    email: "",
    contactNo: "",
    password: "••••••••••••••••••••",
    confirmPassword: "••••••••••••••••••••",
    age: "",
    gender: "",
    
    // Services fields
    name: "",
    location: "",
    
    // BrgyOfficials fields
    barangayName: "",
    contact: "",
  });
  const [files, setFiles] = useState(null);

  // Update form data when inputs change
  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  // Handle file upload
  const handleFileChange = (file) => {
    setFiles(file);
  };

  // Form validation
  const validateForm = () => {
    if (role === "Resident") {
      if (!formData.firstName.trim()) return "First name is required";
      if (!formData.lastName.trim()) return "Last name is required";
      if (!formData.email.trim()) return "Email is required";
      if (!formData.password.trim()) return "Password is required";
      if (formData.password !== formData.confirmPassword) return "Passwords do not match";
    }
    
    if (role === "Services") {
      if (!formData.name.trim()) return "Name is required";
      if (!formData.location.trim()) return "Location is required";
      if (!formData.email.trim()) return "Email is required";
      if (!formData.password.trim()) return "Password is required";
      if (formData.password !== formData.confirmPassword) return "Passwords do not match";
    }
    
    if (role === "BrgyOfficials") {
      if (!formData.barangayName.trim()) return "Barangay name is required";
      if (!formData.contact.trim()) return "Contact is required";
      if (!formData.location.trim()) return "Location is required";
      if (!formData.email.trim()) return "Email is required";
      if (!formData.password.trim()) return "Password is required";
      if (formData.password !== formData.confirmPassword) return "Passwords do not match";
    }
    
    return null;
  };

  // Handle form submission to backend
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Clear previous messages
    setErrorMessage("");
    setSuccessMessage("");
    
    // Validate form
    const validationError = validateForm();
    if (validationError) {
      setErrorMessage(validationError);
      return;
    }
    
    setIsLoading(true);
    
    try {
      // Prepare data for backend
      const userData = {
        role: role,
        ...formData,
        files: files ? files.name : null,
        registeredAt: new Date().toISOString()
      };
      
      // Remove confirmPassword from submission data
      delete userData.confirmPassword;
      
      console.log("Submitting user data:", userData);
      
      // Send POST request to backend API
      const response = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });
      
      const result = await response.json();
      
      if (response.ok) {
        // Success - show success message
        setSuccessMessage(`Registration successful! Welcome ${userData.firstName || userData.name || userData.barangayName}`);
        
        // Optionally redirect after 2 seconds
        setTimeout(() => {
          window.location.href = '/signin';
        }, 2000);
      } else {
        // Error from backend
        setErrorMessage(result.message || 'Registration failed. Please try again.');
      }
    } catch (error) {
      console.error('Error during registration:', error);
      setErrorMessage('Network error. Please check your connection and try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />

      <div className="flex items-center justify-center radius-5px p-8">
        <div className="bg-white rounded-lg shadow-lg max-w-4xl w-full p-12 border border-gray-200">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-1">Sign Up</h1>
            <p className="text-sm text-gray-600">
              Have an account?{" "}
              <Link href="/signin" className="text-blue-600 hover:underline">
                Login Now
              </Link>
            </p>
          </div>

          {/* Success and Error Messages */}
          {successMessage && (
            <div className="mb-4 p-4 bg-green-50 border border-green-200 rounded-lg">
              <div className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-green-700">{successMessage}</span>
              </div>
            </div>
          )}
          
          {errorMessage && (
            <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-lg">
              <div className="flex items-center">
                <svg className="w-5 h-5 text-red-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
                <span className="text-red-700">{errorMessage}</span>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit}>
            {role === "Resident" && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <InputField
                    label="First Name"
                    placeholder="Enter first name"
                    defaultValue={formData.firstName}
                    onChange={(e) => handleInputChange('firstName', e.target.value)}
                    required
                  />
                  <InputField
                    label="Middle Name"
                    placeholder="Enter middle name"
                    defaultValue={formData.middleName}
                    onChange={(e) => handleInputChange('middleName', e.target.value)}
                  />
                  <InputField
                    label="Last Name"
                    placeholder="Enter last name"
                    defaultValue={formData.lastName}
                    onChange={(e) => handleInputChange('lastName', e.target.value)}
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <InputField
                    type="email"
                    label="Email Address"
                    placeholder="Enter email"
                    defaultValue={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    required
                  />
                  <InputField
                    label="Contact No."
                    placeholder="Enter contact number"
                    defaultValue={formData.contactNo}
                    onChange={(e) => handleInputChange('contactNo', e.target.value)}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <InputField
                    type="password"
                    label="Password"
                    placeholder="Enter password"
                    defaultValue={formData.password}
                    onChange={(e) => handleInputChange('password', e.target.value)}
                    required
                  />
                  <div className="grid grid-cols-2 gap-4">
                    <InputField 
                      type="number" 
                      label="Age" 
                      placeholder="Age" 
                      defaultValue={formData.age}
                      onChange={(e) => handleInputChange('age', e.target.value)}
                    />
                    <InputField 
                      label="Gender" 
                      placeholder="Gender" 
                      defaultValue={formData.gender}
                      onChange={(e) => handleInputChange('gender', e.target.value)}
                    />
                  </div>
                </div>

                <InputField
                  type="password"
                  label="Confirm Password"
                  placeholder="Confirm password"
                  defaultValue={formData.confirmPassword}
                  onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
                  required
                />

                <RoleSelector
                  role={role}
                  onChange={(e) => {
                    setRole(e.target.value);
                    // Clear form data when role changes
                    setFormData({
                      firstName: "",
                      middleName: "",
                      lastName: "",
                      email: "",
                      contactNo: "",
                      password: "",
                      confirmPassword: "",
                      age: "",
                      gender: "",
                      name: "",
                      location: "",
                      barangayName: "",
                      contact: "",
                    });
                    setFiles(null);
                  }}
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
                  onFileChange={handleFileChange}
                />
              </div>
            )}

            {role === "Services" && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <InputField
                    label="Name"
                    placeholder="Enter your name"
                    defaultValue={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    required
                  />
                  <InputField
                    label="Location"
                    placeholder="Enter location"
                    defaultValue={formData.location}
                    onChange={(e) => handleInputChange('location', e.target.value)}
                    required
                  />
                </div>
                <InputField
                  type="email"
                  label="Email"
                  placeholder="Enter email"
                  defaultValue={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  required
                />
                <InputField
                  label="Contact No."
                  placeholder="Enter contact number"
                  defaultValue={formData.contactNo}
                  onChange={(e) => handleInputChange('contactNo', e.target.value)}
                />
                <InputField
                  type="password"
                  label="Password"
                  placeholder="Enter password"
                  defaultValue={formData.password}
                  onChange={(e) => handleInputChange('password', e.target.value)}
                  required
                />
                <InputField
                  type="password"
                  label="Confirm Password"
                  placeholder="Confirm password"
                  defaultValue={formData.confirmPassword}
                  onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
                  required
                />

                <RoleSelector
                  role={role}
                  onChange={(e) => {
                    setRole(e.target.value);
                    // Clear form data when role changes
                    setFormData({
                      firstName: "",
                      middleName: "",
                      lastName: "",
                      email: "",
                      contactNo: "",
                      password: "",
                      confirmPassword: "",
                      age: "",
                      gender: "",
                      name: "",
                      location: "",
                      barangayName: "",
                      contact: "",
                    });
                    setFiles(null);
                  }}
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
                  onFileChange={handleFileChange}
                />
              </div>
            )}

            {role === "BrgyOfficials" && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <InputField
                    label="Barangay Name"
                    placeholder="Enter barangay name"
                    defaultValue={formData.barangayName}
                    onChange={(e) => handleInputChange('barangayName', e.target.value)}
                    required
                  />
                  <InputField
                    label="Contact"
                    placeholder="Enter contact"
                    defaultValue={formData.contact}
                    onChange={(e) => handleInputChange('contact', e.target.value)}
                    required
                  />
                </div>
                <InputField
                  label="Location"
                  placeholder="Enter location"
                  defaultValue={formData.location}
                  onChange={(e) => handleInputChange('location', e.target.value)}
                  required
                />
                <InputField
                  type="email"
                  label="Email"
                  placeholder="Enter email"
                  defaultValue={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  required
                />
                <InputField
                  type="password"
                  label="Password"
                  placeholder="Enter password"
                  defaultValue={formData.password}
                  onChange={(e) => handleInputChange('password', e.target.value)}
                  required
                />
                <InputField
                  type="password"
                  label="Confirm Password"
                  placeholder="Confirm password"
                  defaultValue={formData.confirmPassword}
                  onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
                  required
                />

                <RoleSelector
                  role={role}
                  onChange={(e) => {
                    setRole(e.target.value);
                    // Clear form data when role changes
                    setFormData({
                      firstName: "",
                      middleName: "",
                      lastName: "",
                      email: "",
                      contactNo: "",
                      password: "",
                      confirmPassword: "",
                      age: "",
                      gender: "",
                      name: "",
                      location: "",
                      barangayName: "",
                      contact: "",
                    });
                    setFiles(null);
                  }}
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
                  onFileChange={handleFileChange}
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
                onClick={() => {
                  setErrorMessage("Google login coming soon!");
                  console.log("Google login clicked");
                }}
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
                type="submit"
                  disabled={isLoading}
                  className={`w-full font-semibold py-3 rounded-full shadow-md transition-colors duration-200 ${
                    isLoading 
                      ? 'bg-green-400 cursor-not-allowed' 
                      : 'bg-green-500 hover:bg-green-600'
                  } text-white`}
                >
                  {isLoading ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin h-5 w-5 mr-3 text-white" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Registering...
                    </span>
                  ) : (
                    'Register'
                  )}
                </button>

              <p className="text-center text-sm text-gray-600 mt-4">
                Have an account?{" "}
                <Link href="/signin" className="text-green-600 hover:underline font-medium">
                  Login
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}