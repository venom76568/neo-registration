"use client";

import { useState } from "react";
import Nav from "./Nav";
import Success from "./Success";
import Dialogbox from "./Dialogbox";

export default function RegistrationForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    className: "",
    schoolName: "",
    city: "",
    country: "",
    email: "",
    phoneNumber: "",
    whatsappNumber: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [responseMessage, setResponseMessage] = useState("");
  const [responseType, setResponseType] = useState(""); // "success" or "error"

  const [validationErrors, setValidationErrors] = useState({
    fullName: "",
    className: "",
    schoolName: "",
    city: "",
    country: "",
    email: "",
    phoneNumber: "",
    whatsappNumber: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.fullName) errors.fullName = "Full Name is required";
    if (!formData.className) errors.className = "Class is required";
    if (!formData.schoolName) errors.schoolName = "School Name is required";
    if (!formData.city) errors.city = "City is required";
    if (!formData.country) errors.country = "Country is required";
    if (!formData.email) errors.email = "Email is required";
    if (!formData.phoneNumber) errors.phoneNumber = "Phone Number is required";
    if (!formData.whatsappNumber)
      errors.whatsappNumber = "WhatsApp Number is required";
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setValidationErrors({}); // Clear previous validation errors

    // Validate form data
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setValidationErrors(errors);
      setIsLoading(false);
      return; // Prevent form submission if validation fails
    }

    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      let data;

      if (response.headers.get("Content-Type")?.includes("application/json")) {
        data = await response.json();
      } else {
        const text = await response.text();
        throw new Error(`Unexpected response: ${text}`);
      }

      if (response.ok) {
        setResponseMessage(data.message || "Registration successful! 🎉");
        setResponseType("success");
        setIsSubmitted(true);
      } else {
        setResponseMessage(
          data.message || "An error occurred during registration."
        );
        setResponseType("error");
      }
    } catch (error) {
      console.error("Error during registration:", error);
      setResponseMessage(error.message || "An unexpected error occurred.");
      setResponseType("error");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <Dialogbox
        message={responseMessage}
        type={responseType}
        onClose={() => setResponseMessage("")}
      />
      {isSubmitted ? (
        <Success />
      ) : (
        <>
          <Nav />
          <div className="m-[auto] max-w-xs">
            <form
              onSubmit={handleSubmit}
              className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
            >
              {/* Full Name */}
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Full Name:
                  <input
                    className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                      validationErrors.fullName ? "border-red-500" : ""
                    }`}
                    type="text"
                    name="fullName"
                    placeholder="Full Name"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                  />
                </label>
                {validationErrors.fullName && (
                  <p className="text-red-500 text-xs italic">
                    {validationErrors.fullName}
                  </p>
                )}
              </div>

              {/* Class */}
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Class:
                  <input
                    className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                      validationErrors.className ? "border-red-500" : ""
                    }`}
                    type="text"
                    name="className"
                    placeholder="Class"
                    value={formData.className}
                    onChange={handleChange}
                    required
                  />
                </label>
                {validationErrors.className && (
                  <p className="text-red-500 text-xs italic">
                    {validationErrors.className}
                  </p>
                )}
              </div>

              {/* School Name */}
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  School Name:
                  <input
                    className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                      validationErrors.schoolName ? "border-red-500" : ""
                    }`}
                    type="text"
                    name="schoolName"
                    placeholder="School Name"
                    value={formData.schoolName}
                    onChange={handleChange}
                    required
                  />
                </label>
                {validationErrors.schoolName && (
                  <p className="text-red-500 text-xs italic">
                    {validationErrors.schoolName}
                  </p>
                )}
              </div>

              {/* City */}
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  City:
                  <input
                    className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                      validationErrors.city ? "border-red-500" : ""
                    }`}
                    type="text"
                    name="city"
                    placeholder="City Name"
                    value={formData.city}
                    onChange={handleChange}
                    required
                  />
                </label>
                {validationErrors.city && (
                  <p className="text-red-500 text-xs italic">
                    {validationErrors.city}
                  </p>
                )}
              </div>

              {/* Country */}
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Country:
                  <input
                    className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                      validationErrors.city ? "border-red-500" : ""
                    }`}
                    type="text"
                    name="country"
                    placeholder="Country Name"
                    value={formData.country}
                    onChange={handleChange}
                    required
                  />
                </label>
                {validationErrors.city && (
                  <p className="text-red-500 text-xs italic">
                    {validationErrors.country}
                  </p>
                )}
              </div>

              {/* Email Address */}
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Email Address:
                  <input
                    className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                      validationErrors.email ? "border-red-500" : ""
                    }`}
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </label>
                {validationErrors.email && (
                  <p className="text-red-500 text-xs italic">
                    {validationErrors.email}
                  </p>
                )}
              </div>

              {/* Phone Number */}
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Phone Number:
                  <input
                    className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                      validationErrors.phoneNumber ? "border-red-500" : ""
                    }`}
                    type="number"
                    name="phoneNumber"
                    placeholder="Phone Number"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    required
                  />
                </label>
                {validationErrors.phoneNumber && (
                  <p className="text-red-500 text-xs italic">
                    {validationErrors.phoneNumber}
                  </p>
                )}
              </div>

              {/* WhatsApp Number */}
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  WhatsApp Number:
                  <br />
                  (if same as phone number, enter the same in WhatsApp number)
                  <input
                    className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                      validationErrors.whatsappNumber ? "border-red-500" : ""
                    }`}
                    type="number"
                    name="whatsappNumber"
                    placeholder="Whatsapp Number"
                    value={formData.whatsappNumber}
                    onChange={handleChange}
                    required
                  />
                </label>
                {validationErrors.whatsappNumber && (
                  <p className="text-red-500 text-xs italic">
                    {validationErrors.whatsappNumber}
                  </p>
                )}
              </div>

              <button
                className={`shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded ${
                  isLoading ? "opacity-50 cursor-not-allowed" : ""
                }`}
                type="submit"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <svg
                      className="animate-spin inline-block h-4 w-4 mr-2"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        d="M12 2a10 10 0 100 20 10 10 0 000-20zm1 10V4a8 8 0 110 16v-8z"
                        fill="currentColor"
                      />
                    </svg>
                    Processing...
                  </>
                ) : (
                  "Register"
                )}
              </button>
            </form>
          </div>
        </>
      )}
    </div>
  );
}
