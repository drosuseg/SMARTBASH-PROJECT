"use client";
import InputField from "../components/InputField";
import FileUpload from "../components/FileUpload";

export default function ResidentForm({ formData, updateField, onFileChange }) {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <InputField
          label="First Name"
          placeholder="Enter first name"
          defaultValue={formData.firstName}
          onChange={(e) => updateField("firstName", e.target.value)}
          required
        />
        <InputField
          label="Middle Name"
          placeholder="Enter middle name"
          defaultValue={formData.middleName}
          onChange={(e) => updateField("middleName", e.target.value)}
        />
        <InputField
          label="Last Name"
          placeholder="Enter last name"
          defaultValue={formData.lastName}
          onChange={(e) => updateField("lastName", e.target.value)}
          required
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <InputField
          type="email"
          label="Email Address"
          placeholder="Enter email"
          defaultValue={formData.email}
          onChange={(e) => updateField("email", e.target.value)}
          required
        />
        <InputField
          label="Contact No."
          placeholder="Enter contact number"
          defaultValue={formData.contactNo}
          onChange={(e) => updateField("contactNo", e.target.value)}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <InputField
          type="password"
          label="Password"
          placeholder="Enter password"
          defaultValue={formData.password}
          onChange={(e) => updateField("password", e.target.value)}
          required
        />
        <div className="grid grid-cols-2 gap-4">
          <InputField
            type="number"
            label="Age"
            placeholder="Age"
            defaultValue={formData.age}
            onChange={(e) => updateField("age", e.target.value)}
          />
          <InputField
            label="Gender"
            placeholder="Gender"
            defaultValue={formData.gender}
            onChange={(e) => updateField("gender", e.target.value)}
          />
        </div>
      </div>

      <InputField
        type="password"
        label="Confirm Password"
        placeholder="Confirm password"
        defaultValue={formData.confirmPassword}
        onChange={(e) => updateField("confirmPassword", e.target.value)}
        required
      />

      <FileUpload
        label="Proof of Authority"
        instructions={[
          "For Residents 18 and above:",
          "Please upload a valid government-issued ID to verify your identity.",
          "For Residents under 18:",
          "Please upload a valid document of a parent or legal guardian.",
        ]}
        onFileChange={onFileChange}
      />
    </div>
  );
}
