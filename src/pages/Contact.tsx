import { useState } from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaWhatsapp } from 'react-icons/fa';
import {ContactInfos} from "../data/about"

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const whatsAppLink:string ="https://wa.me/"+ContactInfos.phone;
  const mapUrl :string = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.11976397304603!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1645564749296!5m2!1sen!2s";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <div className="bg-gray-100 py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Get in Touch</h1>
          <p className="text-gray-600">We're here to help with your endmill manufacturing needs</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">Full Name *</label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  required
                  value={formData.fullName}
                  onChange={handleChange}
                  className="input-style"
                />
              </div>

              <div>
                <label htmlFor="companyName" className="block text-sm font-medium text-gray-700">Company Name</label>
                <input
                  type="text"
                  id="companyName"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  className="input-style"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="input-style"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="input-style"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject</label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="input-style"
                >
                  <option value="">Select a subject</option>
                  <option value="quote">Request Quote</option>
                  <option value="support">Technical Support</option>
                  <option value="sales">Sales Inquiry</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="input-style"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-primary text-white px-6 py-3 rounded-md hover:bg-blue-700 transition"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <FaMapMarkerAlt className="text-primary text-xl" />
                <h3 className="font-semibold">Address</h3>
              </div>
              <p className="text-gray-600">
                {ContactInfos.address }
              </p>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-2">
                <FaPhone className="text-primary text-xl" />
                <h3 className="font-semibold">Phone</h3>
              </div>
              <p className="text-gray-600">
                {ContactInfos.phone}
              </p>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-2">
                <FaEnvelope className="text-primary text-xl" />
                <h3 className="font-semibold">Email</h3>
              </div>
              <p className="text-gray-600">
                {ContactInfos.email}
              </p>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-2">
                <FaClock className="text-primary text-xl" />
                <h3 className="font-semibold">Business Hours</h3>
              </div>
              <p className="text-gray-600">
                Monday - Friday: 8:00 AM - 6:00 PM<br />
                Saturday: 9:00 AM - 1:00 PM<br />
                Sunday: Closed
              </p>
            </div>

            <div className="bg-green-500 text-white p-6 rounded-lg">
              <div className="flex items-center gap-3 mb-4">
                <FaWhatsapp className="text-2xl" />
                <h3 className="font-semibold">Chat with us on WhatsApp</h3>
              </div>
              <p className="mb-4">Get instant support through WhatsApp</p>
              <a
                href={whatsAppLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-green-500 px-6 py-2 rounded-full hover:bg-gray-100 transition"
              >
                Start Chat →
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="h-96 w-full bg-gray-200 relative">
        <iframe
          src={mapUrl}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}