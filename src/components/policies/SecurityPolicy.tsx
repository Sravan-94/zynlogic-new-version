// import React from 'react';

// const SecurityPolicy: React.FC = () => {
//   return (
//     <div className="min-h-screen bg-gray-100">
//       {/* Navigation Bar */}
//       <nav className="sticky top-0 bg-white shadow-md z-10">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
//           <div className="flex items-center space-x-2">
//              <img 
//         src="/zynlogic-logo.svg" 
//         alt="Zynlogic" 
//         className="h-8 mr-2" 
//       />
//             <span className="text-xl font-bold text-gray-800">Zynlogic</span>
//           </div>
//           <div className="hidden md:flex space-x-6 items-center">
//             <a href="#" className="text-gray-600 hover:text-gray-800">Home</a>
//             <a href="#" className="text-gray-600 hover:text-gray-800">About Us</a>
//             <a href="#" className="text-gray-600 hover:text-gray-800">Services</a>
//             <a href="#" className="text-gray-600 hover:text-gray-800">Clients</a>
//             <a
//               href="#"
//               className="bg-orange-600 text-white px-4 py-2 rounded-full hover:bg-orange-700 transition-colors duration-200"
//             >
//               Contact Us
//             </a>
//           </div>
//         </div>
//       </nav>

//       {/* Hero Section */}
//       <div
//         className="relative bg-cover bg-center h-[70vh] flex items-center justify-center"
//         style={{
//           backgroundImage: 'url("https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80")',
//         }}
//       >
//         <div className="absolute inset-0 bg-black opacity-50"></div>
//         <div className="relative text-center text-white z-10">
//           <h1 className="text-5xl md:text-6xl font-bold mb-6">
//             Secure & Reliable <br /> Solutions by Zynlogic
//           </h1>
//           <p className="text-lg md:text-xl max-w-2xl mx-auto">
//             With expertise in website and mobile app development, Zynlogic delivers secure, professional services to clients worldwide.
//           </p>
//         </div>
//       </div>

//       {/* Security Policy Content */}
//       <div className="max-w-5xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
//         <h2 className="text-4xl font-bold text-gray-800 text-center mb-12">Our Security Policy</h2>

//         <div className="space-y-8">
//           <div className="bg-white p-6 rounded-lg shadow-md">
//             <h3 className="text-2xl font-semibold text-gray-800 mb-4">1. Introduction</h3>
//             <p className="text-gray-600 leading-relaxed">
//               At Zynlogic Private Limited, we are committed to safeguarding the confidentiality, integrity, and availability of our clients' data and our systems. As a provider of website development, mobile app development, and related services, we prioritize security in all our operations. This policy outlines our approach to ensuring a secure environment for our employees, clients, and partners.
//             </p>
//           </div>

//           <div className="bg-white p-6 rounded-lg shadow-md">
//             <h3 className="text-2xl font-semibold text-gray-800 mb-4">2. Scope</h3>
//             <p className="text-gray-600 leading-relaxed">
//               This security policy applies to all Zynlogic employees, contractors, vendors, and third parties who interact with our systems, applications, or data. It covers all aspects of our services, including website and mobile app development, service delivery, and data handling.
//             </p>
//           </div>

//           <div className="bg-white p-6 rounded-lg shadow-md">
//             <h3 className="text-2xl font-semibold text-gray-800 mb-4">3. Data Protection</h3>
//             <ul className="list-disc pl-6 text-gray-600 leading-relaxed space-y-2">
//               <li><strong>Encryption:</strong> All sensitive data, including client information, is encrypted both in transit (using TLS 1.3) and at rest (using AES-256 encryption).</li>
//               <li><strong>Data Minimization:</strong> We collect and process only the data necessary for the intended purpose.</li>
//               <li><strong>Access Control:</strong> Access to sensitive data is restricted to authorized personnel through role-based access control (RBAC) and multi-factor authentication (MFA).</li>
//               <li><strong>Secure Storage:</strong> Data is stored in secure cloud environments compliant with industry standards such as ISO 27001.</li>
//             </ul>
//           </div>

//           <div className="bg-white p-6 rounded-lg shadow-md">
//             <h3 className="text-2xl font-semibold text-gray-800 mb-4">4. Secure Development Practices</h3>
//             <ul className="list-disc pl-6 text-gray-600 leading-relaxed space-y-2">
//               <li><strong>Secure Coding Standards:</strong> All websites and mobile apps are developed following OWASP guidelines and best practices to mitigate vulnerabilities such as SQL injection, XSS, and CSRF.</li>
//               <li><strong>Code Reviews:</strong> All code undergoes peer reviews and static code analysis to identify and address security issues.</li>
//               <li><strong>Penetration Testing:</strong> Regular penetration testing is conducted on our applications to identify and remediate vulnerabilities.</li>
//               <li><strong>Dependency Management:</strong> We use tools to monitor and update third-party libraries to prevent known vulnerabilities.</li>
//             </ul>
//           </div>

//           <div className="bg-white p-6 rounded-lg shadow-md">
//             <h3 className="text-2xl font-semibold text-gray-800 mb-4">5. Incident Response</h3>
//             <ul className="list-disc pl-6 text-gray-600 leading-relaxed space-y-2">
//               <li><strong>Incident Reporting:</strong> Employees and clients are encouraged to report any security incidents immediately to our security team at security@zynlogic.com.</li>
//               <li><strong>Response Plan:</strong> We maintain a documented incident response plan to quickly address and mitigate security breaches.</li>
//               <li><strong>Notification:</strong> In the event of a data breach, affected clients will be notified within 72 hours, in compliance with applicable regulations.</li>
//             </ul>
//           </div>

//           <div className="bg-white p-6 rounded-lg shadow-md">
//             <h3 className="text-2xl font-semibold text-gray-800 mb-4">6. Employee Training</h3>
//             <p className="text-gray-600 leading-relaxed">
//               All employees undergo regular security awareness training to recognize phishing attempts, handle sensitive data appropriately, and follow secure development practices.
//             </p>
//           </div>

//           <div className="bg-white p-6 rounded-lg shadow-md">
//             <h3 className="text-2xl font-semibold text-gray-800 mb-4">7. Third-Party Management</h3>
//             <p className="text-gray-600 leading-relaxed">
//               Third-party vendors and partners are required to comply with our security standards. Contracts include clauses for data protection, confidentiality, and regular security audits.
//             </p>
//           </div>

//           <div className="bg-white p-6 rounded-lg shadow-md">
//             <h3 className="text-2xl font-semibold text-gray-800 mb-4">8. Compliance</h3>
//             <p className="text-gray-600 leading-relaxed">
//               Zynlogic Private Limited complies with applicable laws and regulations, including GDPR, CCPA, and India’s IT Act, 2000. We conduct regular audits to ensure adherence to these standards.
//             </p>
//           </div>

//           <div className="bg-white p-6 rounded-lg shadow-md">
//             <h3 className="text-2xl font-semibold text-gray-800 mb-4">9. Policy Updates</h3>
//             <p className="text-gray-600 leading-relaxed">
//               This security policy is reviewed and updated annually or as needed to address emerging threats and regulatory changes. The latest version is available on our website.
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* Client Testimonial Section */}
//       <div className="bg-gray-200 py-12">
//         <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between">
//           <div className="mb-6 md:mb-0">
//             <p className="text-lg text-gray-700">
//               With years of experience in secure development, Zynlogic delivers reliable, professional services across the globe.
//             </p>
//           </div>
//           <div className="flex items-center space-x-4">
//             <div className="flex -space-x-4">
//               <div className="w-12 h-12 bg-gray-300 rounded-full border-2 border-white"></div>
//               <div className="w-12 h-12 bg-gray-300 rounded-full border-2 border-white"></div>
//               <div className="w-12 h-12 bg-gray-300 rounded-full border-2 border-white"></div>
//             </div>
//             <div>
//               <p className="text-2xl font-bold text-gray-800">120+</p>
//               <p className="text-gray-600">Happy Clients</p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Call-to-Action Button */}
//       <div className="text-center py-12">
//         <a
//           href="#"
//           className="bg-orange-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-orange-700 transition-colors duration-200"
//         >
//           Explore More
//         </a>
//       </div>

//       {/* Contact Section */}
//       <div className="text-center py-8 bg-white">
//         <p className="text-gray-600">
//           For any questions or concerns regarding our security practices, please contact us at{' '}
//           <a href="mailto:security@zynlogic.com" className="text-orange-600 hover:underline">
//             security@zynlogic.com
//           </a>.
//         </p>
//       </div>
//     </div>
//   );
// };

// export default SecurityPolicy;


import React, { useState } from 'react';
import Navbar from '../layout/Navbar';
import Footer from '../layout/Footer';
const SecurityPolicy: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const policySections = [
    {
      title: 'Introduction',
      content: 'At Zynlogic Private Limited, we are committed to safeguarding the confidentiality, integrity, and availability of our clients\' data and our systems. As a provider of website development, mobile app development, and related services, we prioritize security in all our operations. This policy outlines our approach to ensuring a secure environment for our employees, clients, and partners.',
    },
    {
      title: 'Scope',
      content: 'This security policy applies to all Zynlogic employees, contractors, vendors, and third parties who interact with our systems, applications, or data. It covers all aspects of our services, including website and mobile app development, service delivery, and data handling.',
    },
    {
      title: 'Data Protection',
      content: (
        <ul className="list-disc pl-6 text-gray-600 leading-relaxed space-y-2">
          <li><strong>Encryption:</strong> All sensitive data, including client information, is encrypted both in transit (using TLS 1.3) and at rest (using AES-256 encryption).</li>
          <li><strong>Data Minimization:</strong> We collect and process only the data necessary for the intended purpose.</li>
          <li><strong>Access Control:</strong> Access to sensitive data is restricted to authorized personnel through role-based access control (RBAC) and multi-factor authentication (MFA).</li>
          <li><strong>Secure Storage:</strong> Data is stored in secure cloud environments compliant with industry standards such as ISO 27001.</li>
        </ul>
      ),
    },
    {
      title: 'Secure Development Practices',
      content: (
        <ul className="list-disc pl-6 text-gray-600 leading-relaxed space-y-2">
          <li><strong>Secure Coding Standards:</strong> All websites and mobile apps are developed following OWASP guidelines and best practices to mitigate vulnerabilities such as SQL injection, XSS, and CSRF.</li>
          <li><strong>Code Reviews:</strong> All code undergoes peer reviews and static code analysis to identify and address security issues.</li>
          <li><strong>Penetration Testing:</strong> Regular penetration testing is conducted on our applications to identify and remediate vulnerabilities.</li>
          <li><strong>Dependency Management:</strong> We use tools to monitor and update third-party libraries to prevent known vulnerabilities.</li>
        </ul>
      ),
    },
    {
      title: 'Incident Response',
      content: (
        <ul className="list-disc pl-6 text-gray-600 leading-relaxed space-y-2">
          <li><strong>Incident Reporting:</strong> Employees and clients are encouraged to report any security incidents immediately to our security team at security@zynlogic.com.</li>
          <li><strong>Response Plan:</strong> We maintain a documented incident response plan to quickly address and mitigate security breaches.</li>
          <li><strong>Notification:</strong> In the event of a data breach, affected clients will be notified within 72 hours, in compliance with applicable regulations.</li>
        </ul>
      ),
    },
    {
      title: 'Employee Training',
      content: 'All employees undergo regular security awareness training to recognize phishing attempts, handle sensitive data appropriately, and follow secure development practices.',
    },
    {
      title: 'Third-Party Management',
      content: 'Third-party vendors and partners are required to comply with our security standards. Contracts include clauses for data protection, confidentiality, and regular security audits.',
    },
    {
      title: 'Compliance',
      content: 'Zynlogic Private Limited complies with applicable laws and regulations, including GDPR, CCPA, and India’s IT Act, 2000. We conduct regular audits to ensure adherence to these standards.',
    },
    {
      title: 'Policy Updates',
      content: 'This security policy is reviewed and updated annually or as needed to address emerging threats and regulatory changes. The latest version is available on our website.',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Imported Navbar */}
      <Navbar />
<br /><br /><br /><br />
      {/* Hero Section */}
      <div
        className="relative bg-cover bg-center h-[80vh] flex items-center justify-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40"></div>
        <div className="relative text-center text-white z-10 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight">
            Secure & Reliable <br /> Solutions by Zynlogic
          </h1>
          <p className="text-lg md:text-2xl max-w-3xl mx-auto leading-relaxed">
            With expertise in website and mobile app development, Zynlogic delivers secure, professional services to clients worldwide.
          </p>
        </div>
      </div>

      {/* Security Policy Content - Tabbed Layout */}
      <div className="max-w-6xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-extrabold text-gray-900 text-center mb-12">Our Security Policy</h2>

        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {policySections.map((section, index) => (
            <button
              key={index}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeTab === index
                  ? 'bg-orange-500 text-white shadow-lg'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
              onClick={() => setActiveTab(index)}
              aria-selected={activeTab === index}
              role="tab"
            >
              {section.title}
            </button>
          ))}
        </div>

        <div className="bg-white p-8 rounded-xl shadow-lg transition-all duration-300">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">{policySections[activeTab].title}</h3>
          <div className="text-gray-600 leading-relaxed">{policySections[activeTab].content}</div>
        </div>
      </div>

      {/* Client Testimonial Section */}
      <div className="bg-gray-100 py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between">
          <div className="mb-6 md:mb-0 max-w-md">
            <p className="text-lg text-gray-700 leading-relaxed">
              With years of experience in secure development, Zynlogic delivers reliable, professional services across the globe.
            </p>
          </div>
          <div className="flex items-center space-x-4 transform hover:scale-105 transition-transform duration-300">
            <div className="flex -space-x-4">
              <div className="w-12 h-12 bg-gray-300 rounded-full border-2 border-white"></div>
              <div className="w-12 h-12 bg-gray-300 rounded-full border-2 border-white"></div>
              <div className="w-12 h-12 bg-gray-300 rounded-full border-2 border-white"></div>
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900">120+</p>
              <p className="text-gray-600">Happy Clients</p>
            </div>
          </div>
        </div>
      </div>

      {/* Call-to-Action Button */}
      <div className="text-center py-12">
        <a
          href="#"
          className="bg-orange-500 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-orange-600 transform hover:scale-105 transition-all duration-200"
          aria-label="Explore More"
        >
          Explore More
        </a>
      </div>

      {/* Contact Section */}
      <div className="text-center py-8 bg-white shadow-inner">
        <p className="text-gray-600">
          For any questions or concerns regarding our security practices, please contact us at{' '}
          <a href="mailto:security@zynlogic.com" className="text-orange-500 hover:text-orange-600 font-medium">
            security@zynlogic.com
          </a>.
        </p>
      </div>
        {/* Imported Footer */}
        <Footer />
    </div>
  );
};

export default SecurityPolicy;