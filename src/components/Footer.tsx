import React from 'react';
import { MapPin, Phone, Mail, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-green-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-4">John's Green Rocks</h3>
            <p className="text-green-100 mb-4">
              A peaceful farmstay retreat in the beautiful mountains of Munnar, 
              perfect for escaping the city and reconnecting with nature.
            </p>
            <div className="flex space-x-4">
              {/* Airbnb Icon */}
              <a
                href="https://www.airbnb.co.in/rooms/36663727?source_impression_id=p3_1748893558_P3apv_Iva6pa6SH2"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-green-300 transition-colors"
                aria-label="Airbnb"
              >
                {/* Airbnb SVG */}
                <svg className="h-5 w-5" viewBox="0 0 32 32" fill="currentColor">
                  <path d="M16.002 6.7c-1.2 0-2.3.7-2.8 1.8l-7.1 14.2c-.5 1-.5 2.2 0 3.2.6 1.1 1.7 1.8 2.9 1.8h14c1.2 0 2.3-.7 2.9-1.8.5-1 .5-2.2 0-3.2l-7.1-14.2c-.5-1.1-1.6-1.8-2.8-1.8zm0 2c.4 0 .8.2 1 .6l7.1 14.2c.2.4.2.8 0 1.2-.2.4-.6.6-1 .6h-14c-.4 0-.8-.2-1-.6-.2-.4-.2-.8 0-1.2l7.1-14.2c.2-.4.6-.6 1-.6zm0 4.3c-1.7 0-3.1 1.4-3.1 3.1 0 1.2.7 2.3 1.8 2.8l-1.7 3.4c-.2.4 0 .8.4 1 .4.2.8 0 1-.4l1.7-3.4c.2-.4 0-.8-.4-1-.4-.2-.8 0-1 .4l-1.7 3.4c-.2.4 0 .8.4 1 .4.2.8 0 1-.4l1.7-3.4c.2-.4 0-.8-.4-1-.4-.2-.8 0-1 .4l-1.7 3.4c-.2.4 0 .8.4 1 .4.2.8 0 1-.4l1.7-3.4c.2-.4 0-.8-.4-1-.4-.2-.8 0-1 .4l-1.7 3.4c-.2.4 0 .8.4 1 .4.2.8 0 1-.4l1.7-3.4c.2-.4 0-.8-.4-1-.4-.2-.8 0-1 .4l-1.7 3.4c-.2.4 0 .8.4 1 .4.2.8 0 1-.4l1.7-3.4c.2-.4 0-.8-.4-1-.4-.2-.8 0-1 .4l-1.7 3.4c-.2.4 0 .8.4 1 .4.2.8 0 1-.4l1.7-3.4c.2-.4 0-.8-.4-1-.4-.2-.8 0-1 .4z"/>
                </svg>
              </a>
              {/* Instagram Icon */}
              <a
                href="https://www.instagram.com/reel/ChO5gIOpOUn/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-green-300 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              {/* WhatsApp Icon */}
              <a
                href="https://wa.me/919446936644"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-green-300 transition-colors"
                aria-label="WhatsApp"
              >
                {/* WhatsApp SVG */}
                <svg className="h-5 w-5" viewBox="0 0 32 32" fill="currentColor">
                  <path d="M16 3C9.373 3 4 8.373 4 15c0 2.65.87 5.1 2.36 7.13L4 29l7.13-2.36C10.9 27.13 13.35 28 16 28c6.627 0 12-5.373 12-12S22.627 3 16 3zm0 22c-2.21 0-4.26-.72-5.93-1.94l-.42-.3-4.23 1.4 1.4-4.23-.3-.42C6.72 19.26 6 17.21 6 15c0-5.52 4.48-10 10-10s10 4.48 10 10-4.48 10-10 10zm5.07-7.75c-.28-.14-1.65-.81-1.9-.9-.25-.09-.43-.14-.61.14-.18.28-.7.9-.86 1.08-.16.18-.32.2-.6.07-.28-.14-1.18-.44-2.25-1.4-.83-.74-1.39-1.65-1.55-1.93-.16-.28-.02-.43.12-.57.13-.13.28-.32.42-.48.14-.16.18-.28.28-.46.09-.18.05-.34-.02-.48-.07-.14-.61-1.47-.84-2.01-.22-.53-.45-.46-.61-.47-.16-.01-.34-.01-.52-.01-.18 0-.48.07-.73.34-.25.27-.97.95-.97 2.3 0 1.35.99 2.65 1.13 2.83.14.18 1.95 2.98 4.74 4.06.66.28 1.18.45 1.58.58.66.21 1.26.18 1.73.11.53-.08 1.65-.67 1.88-1.32.23-.65.23-1.2.16-1.32-.07-.12-.25-.18-.53-.32z"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-2" />
                <a href="tel:+919446936644" className="text-green-100 hover:text-white">
                  +91 94470 36644
                </a>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-2" />
                <a href="mailto:info@johnsgreenrocks.com" className="text-green-100 hover:text-white">
                  www.johnsgreenrocks.com
                </a>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'Accommodations', 'Experiences', 'Gallery', 'Book Now'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase().replace(' ', '-')}`}
                    className="text-green-100 hover:text-white transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Address</h3>
            <a
              href="https://www.google.com/maps/dir//C.o+Josanto,Pottenkadu,+PO,+Bison+Valley,+Kerala+685569/@10.0131781,77.0035941,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3b07999a927992d1:0xf775f5003dd7674!2m2!1d77.085996!2d10.0131882?entry=ttu&g_ep=EgoyMDI1MDUyOC4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-100 hover:text-white transition-colors underline"
            >
              C.o Josanto, Pottenkadu, PO, Bison Valley, Kerala 685569
            </a>
            {/* Removed the line about directions after booking confirmation */}
            <p className="text-green-100 mt-2">
              <strong>Nearest Transport:</strong><br />
              Cochin International Airport (110 km)<br />
              Ernakulam railway station (120 km)<br />
              Munnar Bustand (20km)
            </p>
          </div>
        </div>
        
        <div className="pt-8 border-t border-green-800 text-center text-green-300">
          <p>&copy; {new Date().getFullYear()} John's Green Rocks Farmstay. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;