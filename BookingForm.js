import React, { useState } from 'react';

export default function BookingForm() {
  const [form, setForm] = useState({ name: '', email: '', date: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send data to backend API here
    alert('Booking submitted!');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" placeholder="Your Name" onChange={handleChange} required />
      <input name="email" type="email" placeholder="Email" onChange={handleChange} required />
      <input name="date" type="date" onChange={handleChange} required />
      <button type="submit">Book Appointment</button>
    </form>
  );
}