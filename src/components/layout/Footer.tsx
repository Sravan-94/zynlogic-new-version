
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100 py-16 px-6 md:px-10 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="text-2xl font-semibold tracking-tight">
              Lander<span className="text-primary">.</span>Studio
            </Link>
            <p className="mt-4 text-gray-600 max-w-md">
              We build brands through code & creativity. Premium tech & branding agency creating exceptional digital experiences.
            </p>
            <div className="mt-6 flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-primary">Twitter</a>
              <a href="#" className="text-gray-500 hover:text-primary">LinkedIn</a>
              <a href="#" className="text-gray-500 hover:text-primary">Instagram</a>
              <a href="#" className="text-gray-500 hover:text-primary">Dribbble</a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-4 text-primary">Services</h3>
            <ul className="space-y-3">
              <li><Link to="/services" className="text-gray-500 hover:text-primary">Web Design</Link></li>
              <li><Link to="/services" className="text-gray-500 hover:text-primary">Mobile Apps</Link></li>
              <li><Link to="/services" className="text-gray-500 hover:text-primary">Brand Identity</Link></li>
              <li><Link to="/services" className="text-gray-500 hover:text-primary">UX Strategy</Link></li>
              <li><Link to="/services" className="text-gray-500 hover:text-primary">Creative Tech</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-4 text-primary">Contact</h3>
            <ul className="space-y-3">
              <li className="text-gray-500">hello@lander.studio</li>
              <li className="text-gray-500">+1 (555) 123-4567</li>
              <li className="text-gray-500">
                123 Design Avenue<br />
                San Francisco, CA 94103
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500">© 2025 Lander.Studio. All rights reserved.</p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <Link to="/privacy-policy" className="text-sm text-gray-500 hover:text-primary">Privacy Policy</Link>
            <Link to="/terms" className="text-sm text-gray-500 hover:text-primary">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
