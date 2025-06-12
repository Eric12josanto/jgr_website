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
                  className={`w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-md shadow-sm text-white font-medium ${
                    isSubmitting || !formData.arrivalDate ? 'bg-gray-400' : 'bg-[#075E54] hover:bg-[#128C7E]'
                  }`}
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
                      <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                      </svg>
                      <svg className="h-4 w-4 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="22" y1="2" x2="11" y2="13"></line>
                        <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                      </svg>
                      Send WhatsApp Enquiry
                    </span>
                  )}
                </button>

                {submitSuccess && (
                  <div className="bg-green-100 border-l-4 border-green-500 p-4 mt-4">
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <svg className="h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
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