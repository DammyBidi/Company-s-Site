import { ref } from "vue";

export function useFormValidation() {
  // Reactive object to hold validation errors
  const errors = ref({
    name: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  // Validation methods
  const validateName = (name: string) => {
    errors.value.name = name.trim() === "" ? "Name is required." : "";
  };

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    errors.value.email = emailRegex.test(email)
      ? ""
      : "Please enter a valid email address.";
  };

  const validatePhoneNumber = (phoneNumber: string) => {
    const phoneRegex = /^\+?\d{10,15}$/;
    errors.value.phoneNumber = phoneRegex.test(phoneNumber)
      ? ""
      : "Enter a valid phone number with country code.";
  };

  const validateMessage = (message: string) => {
    errors.value.message = message.trim() === "" ? "Message cannot be empty." : "";
  };

  // Method to check if there are any validation errors
  const hasErrors = () => {
    return Object.values(errors.value).some((error) => error !== "");
  };

  // Method to validate all fields at once
  const validateForm = (form: { name: string; email: string; phoneNumber: string; message: string }) => {
    validateName(form.name);
    validateEmail(form.email);
    validatePhoneNumber(form.phoneNumber);
    validateMessage(form.message);
  };

  return {
    errors,
    validateName,
    validateEmail,
    validatePhoneNumber,
    validateMessage,
    validateForm,
    hasErrors,
  };
}
