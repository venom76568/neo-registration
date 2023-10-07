// components/RegistrationForm.js
"use client"
import { useState } from 'react';

export default function RegistrationForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    className: '',
    schoolName: '',
    city: '',
    email: '',
    phoneNumber: '',
    whatsappNumber: '',
  });

  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);

    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.status === 201) {
        const data = await response.json();
        // Handle successful registration, e.g., show a success message or redirect the user.
        console.log('User registered:', data.user);
        setIsSubmitted(true);
      } else {
        // Handle registration errors, e.g., display error messages to the user.
        console.error('Registration failed:', response.statusText);
      }
    } catch (error) {
      console.error('Error during registration:', error);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div>
      {isSubmitted ? (
        <p>Submitted</p>
      ) : (
    <form onSubmit={handleSubmit}>
      <label>
        Full Name:
        <input
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          required
        />
      </label>
      <br />
      <label>
        Class (Number):
        <input
          type="text"
          name="className"
          value={formData.className}
          onChange={handleChange}
          required
        />
      </label>
      <br />
      <label>
        School Name:
        <input
          type="text"
          name="schoolName"
          value={formData.schoolName}
          onChange={handleChange}
          required
        />
      </label>
      <br />
      <label>
        City:
        <input
          type="text"
          name="city"
          value={formData.city}
          onChange={handleChange}
          required
        />
      </label>
      <br />
      <label>
        Email Address:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </label>
      <br />
      <label>
        Phone Number:
        <input
          type="number"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
          required
        />
      </label>
      <br />
      <label>
        WhatsApp Number:
        <input
          type="number"
          name="whatsappNumber"
          value={formData.whatsappNumber}
          onChange={handleChange}
          required
        />
      </label>
      <br />
      <button type="submit" disabled={isLoading}>
            {isLoading ? 'Loading...' : 'Registered'}
          </button>
    </form>
 )}
 </div>
);
}
