import React, { useState } from 'react';
import { Calendar, Users } from 'lucide-react';

const BookingForm: React.FC = () => {
  const [formData, setFormData] = useState({
    arrivalDate: '',
    nights: 1,
    guests: 4,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const parsedValue = name === 'nights' || name === 'guests'
      ? parseInt(value) || 0
      : value;

    setFormData({
      ...formData,
      [name]: parsedValue,
    });
  };

  const formatDate = (dateString: string): string => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const calculateDepartureDate = (): string => {
    if (!formData.arrivalDate) return '';
    const arrival = new Date(formData.arrivalDate);
    const departure = new Date(arrival);
    departure.setDate(arrival.getDate() + formData.nights);
    return formatDate(departure.toISOString());
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Format the WhatsApp message
    const message = encodeURIComponent(
      `Enquiry for John's Green Rocks:\nArrival: ${formatDate(formData.arrivalDate)}\n` +
      `Departure: ${calculateDepartureDate()}\nGuests: ${formData.guests}`
    );

    // WhatsApp URL with the phone number in international format (+919446936644)
    const whatsappNumber = '+919446936644';
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${message}`;

    // Simulate a delay for UX, then redirect to WhatsApp
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);

      // Redirect to WhatsApp in a new tab
      window.open(whatsappURL, '_blank');

      setTimeout(() => {
        setSubmitSuccess(false);
      }, 3000);
    }, 1000);
  };

  return (
    <section id="book-now" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">Check Availability</h2>
            <p className="text-gray-600">
              Want to book directly? Ping me with details on WhatsApp, and we'll get back to you as soon as possible.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-xl overflow-hidden">
            <div className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="arrivalDate" className="block text-sm font-medium text-gray-700 mb-1">
                    Arrival Date
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Calendar className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="date"
                      id="arrivalDate"
                      name="arrivalDate"
                      required
                      className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
                      value={formData.arrivalDate}
                      onChange={handleChange}
                      min={new Date().toISOString().split('T')[0]}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="nights" className="block text-sm font-medium text-gray-700 mb-1">
                    Number of Nights
                  </label>
                  <input
                    type="number"
                    id="nights"
                    name="nights"
                    min="1"
                    max="14"
                    required
                    className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
                    value={formData.nights}
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <label htmlFor="guests" className="block text-sm font-medium text-gray-700 mb-1">
                    Number of Guests
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Users className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="number"
                      id="guests"
                      name="guests"
                      min="1"
                      max="8"
                      required
                      className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
                      value={formData.guests}
                      onChange={handleChange}
                    />
                  </div>
                  <p className="text-xs text-gray-500 mt-1">
                    For groups larger than 8, please mention in your enquiry.
                  </p>
                </div>

                {formData.arrivalDate && (
                  <div className="bg-green-50 p-3 rounded-md">
                    <p className="text-sm text-green-800">
                      <strong>Summary:</strong> {formData.guests} guests, arriving on{' '}
                      <strong>{formatDate(formData.arrivalDate)}</strong>, departing on{' '}
                      <strong>{calculateDepartureDate()}</strong> ({formData.nights} nights)
                    </p>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting || !formData.arrivalDate}
                  className={`w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-md shadow-sm text-white font-medium
                    ${isSubmitting || !formData.arrivalDate 
                      ? 'cursor-not-allowed opacity-60' 
                      : ''
                    }`}
                  style={{
                    backgroundColor: isSubmitting || !formData.arrivalDate ? '#bdbdbd' : '#075E54',
                  }}
                >
                  {isSubmitting ? (
                    <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Processing...
                    </span>
                  ) : (
                    <span className="flex items-center">
                      {/* WhatsApp SVG Icon */}
                      <svg className="h-5 w-5 mr-2" viewBox="0 0 32 32" fill="currentColor">
                        <path d="M16 3C9.373 3 4 8.373 4 15c0 2.65.87 5.1 2.36 7.13L4 29l7.13-2.36C10.9 2713 13.35 28 16 28c6.627 0 12-5.373 12-12S22.627 3 16 3zm0 22c-2.21 0-4.26-.72-5.93-1.94l-.42-.3-4.23 1.4 1.4-4.23-.3-.42C6.72 19.26 6 17.21 6 15c0-5.52 4.48-10 10-10s10 4.48 10 10-4.48 10-10 10zm5.07-7.75c-.28-.14-1.65-.81-1.9-.9-.25-.09-.43-.14-.61.14-.18.28-.7.9-.86 1.08-.16.18-.32.2-.6.07-.28-.14-1.18-.44-2.25-1.4-.83-.74-1.39-1.65-1.55-1.93-.16-.28-.02-.43.12-.57.13-.13.28-.32.42-.48.14-.16.18-.28.28-.46.09-.18.05-.34-.02-.48-.07-.14-.61-1.47-.84-2.01-.22-.53-.45-.46-.61-.47-.16-.01-.34-.01-.52-.01-.18 0-.48.07-.73.34-.25.27-.97.95-.97 2.3 0 1.35.99 2.65 1.13 2.83.14.18 1.95 2.98 4.74 4.06.66.28 1.18.45 1.58.58.66.21 1.26.18 1.73.11.53-.08 1.65-.67 1.88-1.32.23-.65.23-1.2.16-1.32-.07-.12-.25-.18-.53-.32z"/>
                      </svg>
                      Send WhatsApp
                    </span>
                  )}
                </button>

                {submitSuccess && (
                  <div className="bg-green-100 border-l-4 border-green-500 p-4 mt-4">
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <svg className="h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div className="ml-3">
                        <p className="text-sm text-green-700">
                          Your enquiry has been sent successfully! We'll contact you soon.
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingForm;