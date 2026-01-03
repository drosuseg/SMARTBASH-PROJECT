"use client";
import InputField from "../components/InputField";
import FileUpload from "../components/FileUpload";

export default function ServicesForm({ formData, updateField, onFileChange }) {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <InputField
          label="Name"
          placeholder="Enter your name"
          defaultValue={formData.name}
          onChange={(e) => updateField("name", e.target.value)}
          required
        />
        <InputField
          label="Location"
          placeholder="Enter location"
          defaultValue={formData.location}
          onChange={(e) => updateField("location", e.target.value)}
          required
        />
      </div>

      <InputField
        type="email"
        label="Email"
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

      <InputField
        type="password"
        label="Password"
        placeholder="Enter password"
        defaultValue={formData.password}
        onChange={(e) => updateField("password", e.target.value)}
        required
      />

      <InputField
        type="password"
        label="Confirm Password"
        placeholder="Confirm password"
        defaultValue={formData.confirmPassword}
        onChange={(e) => updateField("confirmPassword", e.target.value)}
        required
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
        onFileChange={onFileChange}
      />
    </div>
  );
}
