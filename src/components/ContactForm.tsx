import React, { useState } from 'react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

interface ContactFormProps {
  onSubmit?: (data: FormData) => void;
  className?: string;
}

export function ContactForm({ onSubmit, className = '' }: ContactFormProps) {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [phoneError, setPhoneError] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

  const validateAustralianPhone = (phone: string) => {
    // Remove all non-digit characters
    const cleanPhone = phone.replace(/\D/g, '');
    
    // Australian phone number patterns:
    // Mobile: 04XX XXX XXX or +614XX XXX XXX
    // Landline: 02|03|07|08 XXXX XXXX
    const mobilePattern = /^(?:0|61)?4\d{8}$/;
    const landlinePattern = /^(?:0|61)?[2378]\d{8}$/;

    if (!cleanPhone) {
      return 'Phone number is required';
    }

    if (!mobilePattern.test(cleanPhone) && !landlinePattern.test(cleanPhone)) {
      return 'Please enter a valid Australian phone number';
    }

    return '';
  };

  const formatPhoneNumber = (phone: string) => {
    // Remove all non-digit characters
    const cleanPhone = phone.replace(/\D/g, '');
    return cleanPhone;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const phoneError = validateAustralianPhone(formData.phone);
    if (phoneError) {
      setPhoneError(phoneError);
      return;
    }

    setSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: 'a2b4f9ac-6e94-47b6-91a2-96099b689c9f',
          ...formData,
          subject: `New LinkedNet Contact Form Submission from ${formData.name}`,
        })
      });

      const data = await response.json();
      
      if (data.success) {
        setSubmitStatus('success');
        onSubmit?.(formData);
        // Reset form after successful submission
        setFormData({ name: '', email: '', phone: '', message: '' });
        setPhoneError('');
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    if (name === 'phone') {
      const formattedPhone = formatPhoneNumber(value);
      setFormData(prev => ({
        ...prev,
        [name]: formattedPhone
      }));
      setPhoneError('');
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  return (
    <form onSubmit={handleSubmit} className={`space-y-6 ${className}`}>
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
      </div>
      
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
          Phone Number
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
          placeholder="04XX XXX XXX or 02 XXXX XXXX"
          className={`mt-1 block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-50 ${
            phoneError 
              ? 'border-red-300 focus:border-red-300 focus:ring-red-200' 
              : 'border-gray-300 focus:border-indigo-300 focus:ring-indigo-200'
          }`}
        />
        {phoneError && (
          <p className="mt-1 text-sm text-red-600">{phoneError}</p>
        )}
      </div>
      
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        ></textarea>
      </div>
      
      <div>
        <button
          type="submit"
          disabled={submitting}
          className={`w-full bg-indigo-600 text-white px-4 py-2 rounded-md font-semibold transition-colors ${
            submitting 
              ? 'opacity-75 cursor-not-allowed' 
              : 'hover:bg-indigo-700'
          }`}
        >
          {submitting ? 'Sending...' : 'Send Message'}
        </button>
      </div>

      {submitStatus === 'success' && (
        <div className="p-4 bg-green-50 border border-green-200 rounded-md">
          <p className="text-green-800">Thank you for your message! We'll get back to you soon.</p>
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="p-4 bg-red-50 border border-red-200 rounded-md">
          <p className="text-red-800">Sorry, there was an error sending your message. Please try again later.</p>
        </div>
      )}
    </form>
  );
}