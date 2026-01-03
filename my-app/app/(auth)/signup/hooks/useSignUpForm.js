"use client";
import { useState } from "react";
import { validateForm } from "../utils/validation";

export function useSignUpForm() {
  const [role, setRole] = useState("Resident");
  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [files, setFiles] = useState(null);

  const [formData, setFormData] = useState({
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

  const updateField = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const resetForm = (newRole) => {
    setRole(newRole);
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
  };

  const submit = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    setSuccessMessage("");

    const error = validateForm(role, formData);
    if (error) return setErrorMessage(error);

    setIsLoading(true);

    try {
      const payload = { role, ...formData, files: files?.name };
      delete payload.confirmPassword;

      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.message);

      setSuccessMessage("Registration successful!");
      setTimeout(() => (window.location.href = "/signin"), 2000);
    } catch (err) {
      setErrorMessage(err.message || "Registration failed");
    } finally {
      setIsLoading(false);
    }
  };

  return {
    role,
    formData,
    isLoading,
    errorMessage,
    successMessage,
    files,
    setFiles,
    updateField,
    resetForm,
    submit,
  };
}
