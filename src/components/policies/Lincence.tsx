import React from 'react';
import Footer from '../layout/Footer';
import Navbar from '../layout/Navbar';

const LicensePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      <br />
      <br />
      <br />
      <br />
      <main className="flex-grow py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
            <div className="mb-8 bg-gradient-to-r from-purple-600 to-purple-600 p-4 rounded-lg">
                <h1 className="text-4xl font-bold text-white text-center tracking-tight">
                Zynlogic Private Limited License Agreement
                </h1>
                <p className="text-white text-center mt-2">
                Effective Date: June 16, 2025
                </p>
            </div>
          <h1 className="text-4xl font-bold text-gray-900 text-center mb-10">
            Zynlogic Private Limited License Agreement
          </h1>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Introduction</h2>
            <p className="text-gray-600 leading-relaxed">
              This License Agreement ("Agreement") governs the use of software products and services provided by Zynlogic Private Limited ("Zynlogic"), a company specializing in the development of web applications, mobile applications, and related services. By accessing or using our applications or services, you agree to be bound by the terms of this Agreement.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. License Grant</h2>
            <p className="text-gray-600 leading-relaxed">
              Zynlogic grants you a non-exclusive, non-transferable, revocable license to use our web and mobile applications ("Applications") and related services, subject to the terms of this Agreement. This license is for personal or business use as intended by the functionality of the Applications and services provided.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Scope of Services</h2>
            <p className="text-gray-600 leading-relaxed">
              Zynlogic Private Limited develops and provides:
            </p>
            <ul className="list-disc list-inside text-gray-600 ml-4 mt-2 space-y-1">
              <li>Custom web applications tailored to client needs.</li>
              <li>Mobile applications for iOS and Android platforms.</li>
              <li>Maintenance and support services for Zynlogic-developed applications.</li>
              <li>Support and enhancement services for third-party applications.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Restrictions</h2>
            <p className="text-gray-600 leading-relaxed">
              You may not:
            </p>
            <ul className="list-disc list-inside text-gray-600 ml-4 mt-2 space-y-1">
              <li>Copy, modify, or distribute the Applications without prior written consent from Zynlogic.</li>
              <li>Reverse engineer, decompile, or disassemble the Applications.</li>
              <li>Use the Applications for any unlawful purpose or in violation of this Agreement.</li>
              <li>Remove or alter any copyright, trademark, or other proprietary notices contained in the Applications.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Intellectual Property</h2>
            <p className="text-gray-600 leading-relaxed">
              All intellectual property rights in the Applications and services, including but not limited to code, design, and documentation, are owned by Zynlogic Private Limited or its licensors. This Agreement does not transfer any ownership rights to you.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Support and Maintenance</h2>
            <p className="text-gray-600 leading-relaxed">
              Zynlogic provides support and maintenance services for its Applications and may offer support for third-party applications as per separate agreements. Service availability and terms are subject to Zynlogic's service policies.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Termination</h2>
            <p className="text-gray-600 leading-relaxed">
              Zynlogic may terminate this Agreement and your access to the Applications and services if you breach any terms of this Agreement. Upon termination, you must cease all use of the Applications and services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Contact Information</h2>
            <p className="text-gray-600 leading-relaxed">
              For any questions regarding this Agreement or our services, please contact us at:
            </p>
            <p className="text-gray-600 mt-2 leading-relaxed">
              Zynlogic Private Limited<br />
              Email: <a href="mailto:contact@zynlogic.com" className="text-blue-600 hover:underline">contact@zynlogic.com</a><br />
              Website: <a href="http://www.zynlogic.com" className="text-blue-600 hover:underline">www.zynlogic.com</a>
            </p>
          </section>

          <p className="text-sm text-gray-500 text-center mt-12">
            Last updated: June 16, 2025
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default LicensePage;