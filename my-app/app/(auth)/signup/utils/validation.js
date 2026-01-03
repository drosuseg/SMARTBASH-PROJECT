export function validateForm(role, data) {
  const baseChecks = () => {
    if (!data.email) return "Email is required";
    if (!data.password) return "Password is required";
    if (data.password !== data.confirmPassword)
      return "Passwords do not match";
    return null;
  };

  if (role === "Resident") {
    if (!data.firstName) return "First name is required";
    if (!data.lastName) return "Last name is required";
    return baseChecks();
  }

  if (role === "Services") {
    if (!data.name) return "Name is required";
    if (!data.location) return "Location is required";
    return baseChecks();
  }

  if (role === "BrgyOfficials") {
    if (!data.barangayName) return "Barangay name is required";
    if (!data.contact) return "Contact is required";
    if (!data.location) return "Location is required";
    return baseChecks();
  }

  return null;
}
