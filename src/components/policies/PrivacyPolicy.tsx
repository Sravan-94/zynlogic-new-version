import React from 'react';
import Navbar from '../layout/Navbar';
import Footer from '../layout/Footer';

const PrivacyPolicy: React.FC = () => {
  const sections = [
    { id: 'information-we-collect', title: 'Information We Collect' },
    { id: 'how-we-use', title: 'How We Use Your Information' },
    { id: 'sharing-information', title: 'Sharing Your Information' },
    { id: 'data-security', title: 'Data Security' },
    { id: 'your-rights', title: 'Your Rights' },
    { id: 'cookies', title: 'Cookies and Tracking Technologies' },
    { id: 'third-party-links', title: 'Third-Party Links' },
    { id: 'policy-changes', title: 'Changes to This Privacy Policy' },
    { id: 'contact-us', title: 'Contact Us' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      <br />
      <br />
      <div className="flex-grow max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white shadow-xl rounded-xl p-8 md:p-12">
            <div className="mb-8 bg-gradient-to-r from-purple-600 to-purple-600 p-4 rounded-lg" width="100%" height="100%">
          <h1 className="text-4xl font-bold text-gray-900 mb-6 text-center tracking-tight">
            Privacy Policy - Zynlogic Private Limited
          </h1>
          <p className="text-black-500 mb-8 text-center">
            <strong>Effective Date: June 16, 2025</strong>
          </p>
</div>
          <p className="text-gray-600 mb-8 leading-relaxed">
            At Zynlogic Private Limited ("Zynlogic", "we", "us", or "our"), we are dedicated to safeguarding your privacy. This Privacy Policy outlines how we collect, use, store, and disclose personal information when you engage with our website development, mobile app development, and related services. By using our services, you consent to the practices described herein.
          </p>

          {/* Table of Contents */}
          <div className="mb-10 border-b pb-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Table of Contents</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {sections.map((section) => (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    className="text-blue-600 hover:text-blue-800 transition-colors duration-200"
                  >
                    {section.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <section id="information-we-collect" className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">1. Information We Collect</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              We may collect the following types of information:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
              <li>
                <strong>Personal Information</strong>: Name, email address, phone number, and other contact details provided when inquiring about or using our services.
              </li>
              <li>
                <strong>Business Information</strong>: Details about your business or project requirements shared during consultations for website or mobile app development.
              </li>
              <li>
                <strong>Usage Data</strong>: Information about your interaction with our website, including IP address, browser type, pages visited, and time spent.
              </li>
              <li>
                <strong>Technical Data</strong>: Data collected via cookies or similar technologies to enhance your experience on our platforms.
              </li>
            </ul>
          </section>

          <section id="how-we-use" className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">2. How We Use Your Information</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              We use the collected information to:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
              <li>Provide, maintain, and enhance our website and mobile app development services.</li>
              <li>Communicate regarding project updates, service inquiries, or customer support.</li>
              <li>Analyze usage patterns to improve user experience and optimize our platforms.</li>
              <li>Comply with legal obligations or protect our rights and interests.</li>
            </ul>
          </section>

          <section id="sharing-information" className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">3. Sharing Your Information</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              We do not sell or rent your personal information. We may share your information with:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
              <li>
                <strong>Service Providers</strong>: Third-party vendors assisting in service delivery, such as hosting providers or payment processors.
              </li>
              <li>
                <strong>Legal Authorities</strong>: When required by law or to protect our legal rights.
              </li>
              <li>
                <strong>Business Transfers</strong>: In the event of a merger, acquisition, or asset sale, your information may be transferred.
              </li>
            </ul>
          </section>

          <section id="data-security" className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">4. Data Security</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              We implement robust security measures to protect your information from unauthorized access, disclosure, or destruction. However, no internet transmission is entirely secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section id="your-rights" className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">5. Your Rights</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Depending on your jurisdiction, you may have the right to:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
              <li>Access, correct, or delete your personal information.</li>
              <li>Object to or restrict the processing of your data.</li>
              <li>Request data portability.</li>
            </ul>
            <p className="text-gray-600 mb-4 leading-relaxed">
              To exercise these rights, please contact us at{' '}
              <a
                href="mailto:contact@zynlogic.com"
                className="text-blue-600 hover:text-blue-800 transition-colors duration-200"
              >
                contact@zynlogic.com
              </a>.
            </p>
          </section>

          <section id="cookies" className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">6. Cookies and Tracking Technologies</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Our website uses cookies to enhance user experience. You can manage cookie preferences via your browser settings. Disabling cookies may impact site functionality.
            </p>
          </section>

          <section id="third-party-links" className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">7. Third-Party Links</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Our services may include links to third-party sites. We are not responsible for their privacy practices. Please review their policies before sharing personal information.
            </p>
          </section>

          <section id="policy-changes" className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">8. Changes to This Privacy Policy</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              We may update this Privacy Policy periodically. Changes will be posted here with an updated effective date. Please review this policy regularly.
            </p>
          </section>

          <section id="contact-us" className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">9. Contact Us</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              For questions or concerns about this Privacy Policy, please contact us at:
            </p>
            <p className="text-gray-600 leading-relaxed">
              <strong>Zynlogic Private Limited</strong><br />
              kavuri hills
Trendz Aspire,Madhapur,Hitech city
Hyderabad, Telangana<br />
              Email:{' '}
              <a
                href="mailto:contact@zynlogic.com"
                className="text-blue-600 hover:text-blue-800 transition-colors duration-200"
              >
                contact@zynlogic.com
              </a>
              <br />
              Phone: +91-7675953062
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;