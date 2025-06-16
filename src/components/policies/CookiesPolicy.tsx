// import React from 'react';
// import Navbar from '../layout/Navbar';

// const CookiesPolicy: React.FC = () => {
//   return (
//     <div className="min-h-screen">
//       {/* Header */}
//       <header className="bg-white shadow-sm p-4 flex justify-between items-center">
//         <div className="flex items-center">
//           <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center mr-2">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="white"
//               className="w-5 h-5"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M12 4v16m8-8H4"
//               />
//             </svg>
//           </div>
//           <span className="text-lg font-bold">Zynlogic</span>
//         </div>
//         <Navbar />
//         <button className="bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600">
//           Contact Us
//         </button>
//       </header>

//       {/* Cookies Policy Content */}
//       <div
//         className="relative min-h-screen bg-cover bg-center"
//         style={{
//           backgroundImage:
//             'url(https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80)',
//         }}
//       >
//         {/* Overlay */}
//         <div className="absolute inset-0 bg-black bg-opacity-60"></div>

//         {/* Content */}
//         <div className="relative z-10 max-w-4xl mx-auto p-6 text-white">
//           <h1 className="text-4xl font-bold mb-6">
//             Cookies Policy for Zynlogic Private Limited
//           </h1>
//           <p className="text-sm mb-4">
//             <strong>Last Updated:</strong> June 16, 2025
//           </p>
//           <p className="mb-4">
//             Zynlogic Private Limited ("Zynlogic," "we," "us," or "our") is
//             committed to protecting your privacy. This Cookies Policy explains
//             how we use cookies and similar technologies in our mobile
//             applications, web applications, and services provided for developing
//             and supporting applications for our clients. This policy applies to
//             all users of our apps, websites, and services, including those
//             developed on behalf of third-party clients.
//           </p>

//           <h2 className="text-2xl font-semibold mt-6 mb-3">
//             What Are Cookies and Similar Technologies?
//           </h2>
//           <p className="mb-4">
//             Cookies are small text files stored on your device (e.g., computer,
//             smartphone, or tablet) when you visit a website or use an app. They
//             help remember information about your visit, such as preferences or
//             login details, to enhance your experience. Similar technologies,
//             such as device identifiers (e.g., Apple’s IDFA or Android’s GAID),
//             local storage, or pixel tags, serve comparable functions in mobile
//             apps and web applications.
//           </p>

//           <h2 className="text-2xl font-semibold mt-6 mb-3">
//             Types of Cookies We Use
//           </h2>
//           <p className="mb-4">
//             We use the following categories of cookies and similar technologies
//             across our services:
//           </p>
//           <ul className="list-disc list-inside mb-4">
//             <li>
//               <strong>Strictly Necessary Cookies:</strong> Essential for the
//               operation of our websites and apps, enabling core functions like
//               navigation, account authentication, and security. These cannot be
//               disabled as they are critical to providing our services.
//             </li>
//             <li>
//               <strong>Functionality/Preference Cookies:</strong> Allow us to
//               remember your choices (e.g., language, region, or login details)
//               to provide a personalized experience. These may be set by us or
//               third-party providers integrated into our services.
//             </li>
//             <li>
//               <strong>Performance/Analytics Cookies:</strong> Collect
//               anonymized data on how you interact with our apps and websites,
//               helping us improve performance, content, and user experience. For
//               example, we may use Google Analytics, which uses cookies like{' '}
//               <code>_ga</code> to track user engagement without identifying
//               individuals.
//             </li>
//             <li>
//               <strong>Advertising/Tracking Cookies:</strong> Used to deliver
//               personalized ads or measure ad effectiveness. These may be set by
//               third-party advertising partners (e.g., Google Ads) and may track
//               your activity across devices or apps to provide relevant content.
//             </li>
//           </ul>

//           <h2 className="text-2xl font-semibold mt-6 mb-3">
//             How We Use Cookies
//           </h2>
//           <p className="mb-4">
//             We use cookies and similar technologies for the following purposes:
//           </p>
//           <ul className="list-disc list-inside mb-4">
//             <li>
//               <strong>Service Delivery:</strong> To enable essential features,
//               such as maintaining user sessions, remembering items in a shopping
//               cart, or securing your account.
//             </li>
//             <li>
//               <strong>Personalization:</strong> To save your preferences, such
//               as language or display settings, for a tailored experience.
//             </li>
//             <li>
//               <strong>Performance Improvement:</strong> To analyze usage
//               patterns and optimize the functionality and design of our apps and
//               websites.
//             </li>
//             <li>
//               <strong>Advertising:</strong> To serve relevant ads or limit the
//               frequency of ads you see, often through third-party services like
//               Google Ads or social media platforms.
//             </li>
//             <li>
//               <strong>Client Services:</strong> For apps and websites developed
//               for our clients, we may implement cookies as per their
//               requirements, ensuring compliance with applicable laws.
//             </li>
//           </ul>

//           <h2 className="text-2xl font-semibold mt-6 mb-3">
//             Third-Party Cookies
//           </h2>
//           <p className="mb-4">
//             Some cookies are set by third-party services integrated into our apps
//             and websites, such as:
//           </p>
//           <ul className="list-disc list-inside mb-4">
//             <li>
//               <strong>Analytics Providers:</strong> Tools like Google Analytics
//               use cookies to collect usage statistics.
//             </li>
//             <li>
//               <strong>Advertising Networks:</strong> Partners like Google Ads
//               may set cookies to deliver targeted ads or measure campaign
//               performance.
//             </li>
//             <li>
//               <strong>Social Media Features:</strong> Features like the Facebook
//               Like button or Share widgets may set cookies to enable
//               functionality.
//             </li>
//           </ul>
//           <p className="mb-4">
//             These third parties may collect data such as your IP address or
//             pages visited. Their cookie usage is governed by their respective
//             privacy policies, which we encourage you to review. Zynlogic does
//             not allow third-party tracking companies to set cookies unless
//             necessary for service delivery or with your consent.
//           </p>

//           <h2 className="text-2xl font-semibold mt-6 mb-3">
//             Cookies in Mobile Apps
//           </h2>
//           <p className="mb-4">
//             In our mobile apps, we may use device identifiers or similar
//             technologies instead of traditional cookies. These technologies
//             serve similar purposes, such as remembering your preferences or
//             tracking app usage for analytics. For apps developed for clients, we
//             ensure that any use of cookies or identifiers complies with their
//             instructions and applicable regulations, including GDPR, PECR, and
//             CCPA.
//           </p>
//           <p className="mb-4">
//             When you first install or use our apps, we may display a consent
//             notice during the onboarding process, informing you about data
//             collection and requesting your permission for non-essential cookies
//             or trackers. You can manage these preferences in the app’s settings.
//           </p>

//           <h2 className="text-2xl font-semibold mt-6 mb-3">
//             Legal Basis for Using Cookies
//           </h2>
//           <p className="mb-4">
//             We use cookies and similar technologies based on the following legal
//             grounds:
//           </p>
//           <ul className="list-disc list-inside mb-4">
//             <li>
//               <strong>Consent:</strong> For non-essential cookies (e.g.,
//               analytics, advertising), we obtain your explicit consent via a
//               cookie banner or app consent notice, as required by GDPR and PECR.
//             </li>
//             <li>
//               <strong>Legitimate Interests:</strong> For strictly necessary
//               cookies, we rely on our legitimate interest to provide functional
//               and secure services.
//             </li>
//             <li>
//               <strong>Contractual Necessity:</strong> For cookies required to
//               deliver services you’ve requested (e.g., maintaining a session in
//               an app), we process data to fulfill our contractual obligations.
//             </li>
//           </ul>
//           <p className="mb-4">
//             For users in California, we comply with CCPA by providing options to
//             opt out of the sale or sharing of personal data via cookies.
//           </p>

//           <h2 className="text-2xl font-semibold mt-6 mb-3">
//             How to Manage Cookies
//           </h2>
//           <p className="mb-4">
//             You can control cookies and similar technologies through the
//             following methods:
//           </p>
//           <ul className="list-disc list-inside mb-4">
//             <li>
//               <strong>Browser Settings:</strong> Most browsers allow you to
//               block or delete cookies. Visit the help pages for your browser
//               (e.g., Firefox, Chrome, Safari, Edge) to learn how to manage
//               cookie settings. Note that disabling cookies may limit some
//               features of our websites.
//             </li>
//             <li>
//               <strong>Device Settings:</strong> For mobile apps, you can manage
//               device identifiers (e.g., IDFA or GAID) in your device’s settings.
//               For example, enable “Limit Ad Tracking” on iOS or “Opt out of Ads
//               Personalization” on Android.
//             </li>
//             <li>
//               <strong>Cookie Consent Banner:</strong> Our websites and apps may
//               display a cookie banner allowing you to accept, reject, or
//               customize cookie preferences. You can revisit these settings via
//               the “Manage Cookie Preferences” link or icon on our websites.
//             </li>
//             <li>
//               <strong>Opt-Out Tools:</strong> For advertising cookies, you can
//               opt out via tools like the Digital Advertising Alliance (DAA) at{' '}
//               <a href="http://optout.aboutads.info/" className="underline">
//                 http://optout.aboutads.info/
//               </a>{' '}
//               (U.S.), the European Interactive Digital Advertising Alliance
//               (EDAA) at{' '}
//               <a href="http://youronlinechoices.eu" className="underline">
//                 http://youronlinechoices.eu
//               </a>{' '}
//               (Europe), or the Network Advertising Initiative (NAI) at{' '}
//               <a
//                 href="http://optout.networkadvertising.org/"
//                 className="underline"
//               >
//                 http://optout.networkadvertising.org/
//               </a>
//               .
//             </li>
//           </ul>
//           <p className="mb-4">
//             Please note that you must update your preferences on each device and
//             browser you use. Clearing cookies or resetting device identifiers
//             may require you to renew your preferences.
//           </p>

//           <h2 className="text-2xl font-semibold mt-6 mb-3">
//             Cookies in Client-Developed Applications
//           </h2>
//           <p className="mb-4">
//             For applications we develop or support for clients, we implement
//             cookies and similar technologies as per their specifications. We
//             ensure compliance with applicable laws by:
//           </p>
//           <ul className="list-disc list-inside mb-4">
//             <li>
//               Conducting cookie audits to identify and document cookie usage.
//             </li>
//             <li>
//               Providing clear information to users about cookie purposes and
//               obtaining consent where required.
//             </li>
//             <li>
//               Offering mechanisms for users to manage cookie preferences, such
//               as opt-out options.
//             </li>
//           </ul>
//           <p className="mb-4">
//             Clients are responsible for ensuring their cookie policies align
//             with legal requirements, but we assist by integrating compliant
//             consent mechanisms and transparent disclosures.
//           </p>

//           <h2 className="text-2xl font-semibold mt-6 mb-3">
//             Data Protection and Your Rights
//           </h2>
//           <p className="mb-4">
//             Cookies and similar technologies may collect personal data, which we
//             process in accordance with our Privacy Policy and applicable laws
//             like GDPR and CCPA. You have rights over your personal data,
//             including:
//           </p>
//           <ul className="list-disc list-inside mb-4">
//             <li>
//               <strong>Access:</strong> Request details of the personal data we
//               hold about you.
//             </li>
//             <li>
//               <strong>Deletion:</strong> Request the deletion of your personal
//               data collected via cookies.
//             </li>
//             <li>
//               <strong>Opt-Out:</strong> Opt out of the sale or sharing of your
//               personal data (e.g., for CCPA compliance).
//             </li>
//             <li>
//               <strong>Consent Withdrawal:</strong> Withdraw consent for
//               non-essential cookies at any time.
//             </li>
//           </ul>
//           <p className="mb-4">
//             To exercise these rights or for questions about our cookie
//             practices, contact us at [insert Zynlogic contact email or address].
//           </p>

//           <h2 className="text-2xl font-semibold mt-6 mb-3">
//             Changes to This Cookies Policy
//           </h2>
//           <p className="mb-4">
//             We may update this Cookies Policy to reflect changes in our
//             practices or legal requirements. We will notify you of significant
//             changes by posting the updated policy on our website or within our
//             apps, with the “Last Updated” date at the top.
//           </p>

//           <h2 className="text-2xl font-semibold mt-6 mb-3">Contact Us</h2>
//           <p className="mb-4">
//             If you have questions about this Cookies Policy or our use of
//             cookies, please contact us at:
//           </p>
//           <p className="mb-2">
//             <strong>Zynlogic Private Limited</strong>
//           </p>
//           <p className="mb-2">[Insert registered office address]</p>
//           <p className="mb-2">Email: [Insert contact email]</p>
//           <p className="mb-4">Phone: [Insert contact phone number]</p>
//           <p>
//             For more information about how we handle your personal data, please
//             review our{' '}
//             <a href="/privacy-policy" className="underline">
//               Privacy Policy
//             </a>
//             .
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CookiesPolicy;


// import React from 'react';
// import Navbar from '../layout/Navbar'; // Using your provided Navbar component

// const CookiesPolicy: React.FC = () => {
//   return (
//     <div className="min-h-screen flex flex-col">
//       {/* Header */}
//       <header>
//         <Navbar /> {/* Your Navbar component */}
//       </header>

//       {/* Cookies Policy Content */}
//       <main
//         className="relative flex-grow bg-cover bg-center"
//         style={{
//           backgroundImage:
//             'url(https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80)',
//         }}
//       >
//         {/* Overlay */}
//         <div className="absolute inset-0 bg-black bg-opacity-70"></div>

//         {/* Content */}
//         <div className="relative z-10 max-w-4xl mx-auto p-6 md:p-10">
//           <div className="bg-white bg-opacity-90 rounded-lg shadow-lg p-6 md:p-8">
//             <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
//               Cookies Policy for Zynlogic Private Limited
//             </h1>
//             <p className="text-sm text-gray-600 mb-6">
//               <strong>Last Updated:</strong> June 16, 2025
//             </p>
//             <p className="text-gray-700 leading-relaxed mb-6">
//               Zynlogic Private Limited ("Zynlogic," "we," "us," or "our") is
//               committed to protecting your privacy. This Cookies Policy explains
//               how we use cookies and similar technologies in our mobile
//               applications, web applications, and services provided for developing
//               and supporting applications for our clients. This policy applies to
//               all users of our apps, websites, and services, including those
//               developed on behalf of third-party clients.
//             </p>

//             <section className="border-t border-gray-200 pt-6">
//               <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">
//                 What Are Cookies and Similar Technologies?
//               </h2>
//               <p className="text-gray-700 leading-relaxed mb-6">
//                 Cookies are small text files stored on your device (e.g., computer,
//                 smartphone, or tablet) when you visit a website or use an app. They
//                 help remember information about your visit, such as preferences or
//                 login details, to enhance your experience. Similar technologies,
//                 such as device identifiers (e.g., Apple’s IDFA or Android’s GAID),
//                 local storage, or pixel tags, serve comparable functions in mobile
//                 apps and web applications.
//               </p>
//             </section>

//             <section className="border-t border-gray-200 pt-6">
//               <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">
//                 Types of Cookies We Use
//               </h2>
//               <p className="text-gray-700 leading-relaxed mb-4">
//                 We use the following categories of cookies and similar technologies
//                 across our services:
//               </p>
//               <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
//                 <li>
//                   <strong>Strictly Necessary Cookies:</strong> Essential for the
//                   operation of our websites and apps, enabling core functions like
//                   navigation, account authentication, and security. These cannot be
//                   disabled as they are critical to providing our services.
//                 </li>
//                 <li>
//                   <strong>Functionality/Preference Cookies:</strong> Allow us to
//                   remember your choices (e.g., language, region, or login details)
//                   to provide a personalized experience. These may be set by us or
//                   third-party providers integrated into our services.
//                 </li>
//                 <li>
//                   <strong>Performance/Analytics Cookies:</strong> Collect
//                   anonymized data on how you interact with our apps and websites,
//                   helping us improve performance, content, and user experience. For
//                   example, we may use Google Analytics, which uses cookies like{' '}
//                   <code className="bg-gray-100 px-1 rounded">_ga</code> to track
//                   user engagement without identifying individuals.
//                 </li>
//                 <li>
//                   <strong>Advertising/Tracking Cookies:</strong> Used to deliver
//                   personalized ads or measure ad effectiveness. These may be set by
//                   third-party advertising partners (e.g., Google Ads) and may track
//                   your activity across devices or apps to provide relevant content.
//                 </li>
//               </ul>
//             </section>

//             <section className="border-t border-gray-200 pt-6">
//               <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">
//                 How We Use Cookies
//               </h2>
//               <p className="text-gray-700 leading-relaxed mb-4">
//                 We use cookies and similar technologies for the following purposes:
//               </p>
//               <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
//                 <li>
//                   <strong>Service Delivery:</strong> To enable essential features,
//                   such as maintaining user sessions, remembering items in a shopping
//                   cart, or securing your account.
//                 </li>
//                 <li>
//                   <strong>Personalization:</strong> To save your preferences, such
//                   as language or display settings, for a tailored experience.
//                 </li>
//                 <li>
//                   <strong>Performance Improvement:</strong> To analyze usage
//                   patterns and optimize the functionality and design of our apps and
//                   websites.
//                 </li>
//                 <li>
//                   <strong>Advertising:</strong> To serve relevant ads or limit the
//                   frequency of ads you see, often through third-party services like
//                   Google Ads or social media platforms.
//                 </li>
//                 <li>
//                   <strong>Client Services:</strong> For apps and websites developed
//                   for our clients, we may implement cookies as per their
//                   requirements, ensuring compliance with applicable laws.
//                 </li>
//               </ul>
//             </section>

//             <section className="border-t border-gray-200 pt-6">
//               <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">
//                 Third-Party Cookies
//               </h2>
//               <p className="text-gray-700 leading-relaxed mb-4">
//                 Some cookies are set by third-party services integrated into our apps
//                 and websites, such as:
//               </p>
//               <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
//                 <li>
//                   <strong>Analytics Providers:</strong> Tools like Google Analytics
//                   use cookies to collect usage statistics.
//                 </li>
//                 <li>
//                   <strong>Advertising Networks:</strong> Partners like Google Ads
//                   may set cookies to deliver targeted ads or measure campaign
//                   performance.
//                 </li>
//                 <li>
//                   <strong>Social Media Features:</strong> Features like the Facebook
//                   Like button or Share widgets may set cookies to enable
//                   functionality.
//                 </li>
//               </ul>
//               <p className="text-gray-700 leading-relaxed mb-6">
//                 These third parties may collect data such as your IP address or
//                 pages visited. Their cookie usage is governed by their respective
//                 privacy policies, which we encourage you to review. Zynlogic does
//                 not allow third-party tracking companies to set cookies unless
//                 necessary for service delivery or with your consent.
//               </p>
//             </section>

//             <section className="border-t border-gray-200 pt-6">
//               <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">
//                 Cookies in Mobile Apps
//               </h2>
//               <p className="text-gray-700 leading-relaxed mb-4">
//                 In our mobile apps, we may use device identifiers or similar
//                 technologies instead of traditional cookies. These technologies
//                 serve similar purposes, such as remembering your preferences or
//                 tracking app usage for analytics. For apps developed for clients, we
//                 ensure that any use of cookies or identifiers complies with their
//                 instructions and applicable regulations, including GDPR, PECR, and
//                 CCPA.
//               </p>
//               <p className="text-gray-700 leading-relaxed mb-6">
//                 When you first install or use our apps, we may display a consent
//                 notice during the onboarding process, informing you about data
//                 collection and requesting your permission for non-essential cookies
//                 or trackers. You can manage these preferences in the app’s settings.
//               </p>
//             </section>

//             <section className="border-t border-gray-200 pt-6">
//               <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">
//                 Legal Basis for Using Cookies
//               </h2>
//               <p className="text-gray-700 leading-relaxed mb-4">
//                 We use cookies and similar technologies based on the following legal
//                 grounds:
//               </p>
//               <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
//                 <li>
//                   <strong>Consent:</strong> For non-essential cookies (e.g.,
//                   analytics, advertising), we obtain your explicit consent via a
//                   cookie banner or app consent notice, as required by GDPR and PECR.
//                 </li>
//                 <li>
//                   <strong>Legitimate Interests:</strong> For strictly necessary
//                   cookies, we rely on our legitimate interest to provide functional
//                   and secure services.
//                 </li>
//                 <li>
//                   <strong>Contractual Necessity:</strong> For cookies required to
//                   deliver services you’ve requested (e.g., maintaining a session in
//                   an app), we process data to fulfill our contractual obligations.
//                 </li>
//               </ul>
//               <p className="text-gray-700 leading-relaxed mb-6">
//                 For users in California, we comply with CCPA by providing options to
//                 opt out of the sale or sharing of personal data via cookies.
//               </p>
//             </section>

//             <section className="border-t border-gray-200 pt-6">
//               <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">
//                 How to Manage Cookies
//               </h2>
//               <p className="text-gray-700 leading-relaxed mb-4">
//                 You can control cookies and similar technologies through the
//                 following methods:
//               </p>
//               <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
//                 <li>
//                   <strong>Browser Settings:</strong> Most browsers allow you to
//                   block or delete cookies. Visit the help pages for your browser
//                   (e.g., Firefox, Chrome, Safari, Edge) to learn how to manage
//                   cookie settings. Note that disabling cookies may limit some
//                   features of our websites.
//                 </li>
//                 <li>
//                   <strong>Device Settings:</strong> For mobile apps, you can manage
//                   device identifiers (e.g., IDFA or GAID) in your device’s settings.
//                   For example, enable “Limit Ad Tracking” on iOS or “Opt out of Ads
//                   Personalization” on Android.
//                 </li>
//                 <li>
//                   <strong>Cookie Consent Banner:</strong> Our websites and apps may
//                   display a cookie banner allowing you to accept, reject, or
//                   customize cookie preferences. You can revisit these settings via
//                   the “Manage Cookie Preferences” link or icon on our websites.
//                 </li>
//                 <li>
//                   <strong>Opt-Out Tools:</strong> For advertising cookies, you can
//                   opt out via tools like the Digital Advertising Alliance (DAA) at{' '}
//                   <a
//                     href="http://optout.aboutads.info/"
//                     className="text-red-500 hover:underline"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                   >
//                     http://optout.aboutads.info/
//                   </a>{' '}
//                   (U.S.), the European Interactive Digital Advertising Alliance
//                   (EDAA) at{' '}
//                   <a
//                     href="http://youronlinechoices.eu"
//                     className="text-red-500 hover:underline"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                   >
//                     http://youronlinechoices.eu
//                   </a>{' '}
//                   (Europe), or the Network Advertising Initiative (NAI) at{' '}
//                   <a
//                     href="http://optout.networkadvertising.org/"
//                     className="text-red-500 hover:underline"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                   >
//                     http://optout.networkadvertising.org/
//                   </a>
//                   .
//                 </li>
//               </ul>
//               <p className="text-gray-700 leading-relaxed mb-6">
//                 Please note that you must update your preferences on each device and
//                 browser you use. Clearing cookies or resetting device identifiers
//                 may require you to renew your preferences.
//               </p>
//             </section>

//             <section className="border-t border-gray-200 pt-6">
//               <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">
//                 Cookies in Client-Developed Applications
//               </h2>
//               <p className="text-gray-700 leading-relaxed mb-4">
//                 For applications we develop or support for clients, we implement
//                 cookies and similar technologies as per their specifications. We
//                 ensure compliance with applicable laws by:
//               </p>
//               <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
//                 <li>
//                   Conducting cookie audits to identify and document cookie usage.
//                 </li>
//                 <li>
//                   Providing clear information to users about cookie purposes and
//                   obtaining consent where required.
//                 </li>
//                 <li>
//                   Offering mechanisms for users to manage cookie preferences, such
//                   as opt-out options.
//                 </li>
//               </ul>
//               <p className="text-gray-700 leading-relaxed mb-6">
//                 Clients are responsible for ensuring their cookie policies align
//                 with legal requirements, but we assist by integrating compliant
//                 consent mechanisms and transparent disclosures.
//               </p>
//             </section>

//             <section className="border-t border-gray-200 pt-6">
//               <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">
//                 Data Protection and Your Rights
//               </h2>
//               <p className="text-gray-700 leading-relaxed mb-4">
//                 Cookies and similar technologies may collect personal data, which we
//                 process in accordance with our Privacy Policy and applicable laws
//                 like GDPR and CCPA. You have rights over your personal data,
//                 including:
//               </p>
//               <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
//                 <li>
//                   <strong>Access:</strong> Request details of the personal data we
//                   hold about you.
//                 </li>
//                 <li>
//                   <strong>Deletion:</strong> Request the deletion of your personal
//                   data collected via cookies.
//                 </li>
//                 <li>
//                   <strong>Opt-Out:</strong> Opt out of the sale or sharing of your
//                   personal data (e.g., for CCPA compliance).
//                 </li>
//                 <li>
//                   <strong>Consent Withdrawal:</strong> Withdraw consent for
//                   non-essential cookies at any time.
//                 </li>
//               </ul>
//               <p className="text-gray-700 leading-relaxed mb-6">
//                 To exercise these rights or for questions about our cookie
//                 practices, contact us at [insert Zynlogic contact email or address].
//               </p>
//             </section>

//             <section className="border-t border-gray-200 pt-6">
//               <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">
//                 Changes to This Cookies Policy
//               </h2>
//               <p className="text-gray-700 leading-relaxed mb-6">
//                 We may update this Cookies Policy to reflect changes in our
//                 practices or legal requirements. We will notify you of significant
//                 changes by posting the updated policy on our website or within our
//                 apps, with the “Last Updated” date at the top.
//               </p>
//             </section>

//             <section className="border-t border-gray-200 pt-6">
//               <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">
//                 Contact Us
//               </h2>
//               <p className="text-gray-700 leading-relaxed mb-4">
//                 If you have questions about this Cookies Policy or our use of
//                 cookies, please contact us at:
//               </p>
//               <p className="text-gray-700 mb-2">
//                 <strong>Zynlogic Private Limited</strong>
//               </p>
//               <p className="text-gray-700 mb-2">[Insert registered office address]</p>
//               <p className="text-gray-700 mb-2">
//                 Email: [Insert contact email]
//               </p>
//               <p className="text-gray-700 mb-4">
//                 Phone: [Insert contact phone number]
//               </p>
//               <p className="text-gray-700 leading-relaxed">
//                 For more information about how we handle your personal data, please
//                 review our{' '}
//                 <a
//                   href="/privacy-policy"
//                   className="text-red-500 hover:underline"
//                 >
//                   Privacy Policy
//                 </a>
//                 .
//               </p>
//             </section>
//           </div>
//         </div>
//       </main>

//       {/* Footer */}
//       <footer className="bg-gray-800 text-white py-6">
//         <div className="max-w-4xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
//           <div className="mb-4 md:mb-0">
//             <p>© 2025 Zynlogic Private Limited. All rights reserved.</p>
//           </div>
//           <div className="flex space-x-4">
//             <a
//               href="/"
//               className="text-gray-400 hover:text-white transition-colors duration-300"
//             >
//               Home
//             </a>
//             <a
//               href="/about"
//               className="text-gray-400 hover:text-white transition-colors duration-300"
//             >
//               About Us
//             </a>
//             <a
//               href="/services"
//               className="text-gray-400 hover:text-white transition-colors duration-300"
//             >
//               Services
//             </a>
//             <a
//               href="/contact"
//               className="text-gray-400 hover:text-white transition-colors duration-300"
//             >
//               Contact
//             </a>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default CookiesPolicy;




// import React, { useState } from 'react';
// import Navbar from '../layout/Navbar'; // Assuming provided Navbar component

// const CookiesPolicy: React.FC = () => {
//   const [isTocOpen, setIsTocOpen] = useState(false);

//   const sections = [
//     { id: 'what-are-cookies', title: 'What Are Cookies and Similar Technologies?' },
//     { id: 'types-of-cookies', title: 'Types of Cookies We Use' },
//     { id: 'how-we-use-cookies', title: 'How We Use Cookies' },
//     { id: 'third-party-cookies', title: 'Third-Party Cookies' },
//     { id: 'cookies-in-mobile-apps', title: 'Cookies in Mobile Apps' },
//     { id: 'legal-basis', title: 'Legal Basis for Using Cookies' },
//     { id: 'manage-cookies', title: 'How to Manage Cookies' },
//     { id: 'client-apps', title: 'Cookies in Client-Developed Applications' },
//     { id: 'data-protection', title: 'Data Protection and Your Rights' },
//     { id: 'changes', title: 'Changes to This Cookies Policy' },
//     { id: 'contact', title: 'Contact Us' },
//   ];

//   return (
//     <div className="min-h-screen flex flex-col bg-gray-50">
//       {/* Header */}
//       <header className="sticky top-0 z-50">
//         <Navbar />
//       </header>
// <br></br><br></br><br></br><br></br><br></br>
//       {/* Main Content */}
//       <main className="flex-grow">
//         <div className="relative bg-gradient-to-br from-gray-800 to-gray-600">
//           {/* Hero Section */}
//           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
//             <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
//               Cookies Policy
//             </h1>
//             <p className="text-sm sm:text-base text-gray-300 max-w-2xl mx-auto">
//               <strong>Last Updated:</strong> June 16, 2025
//             </p>
//           </div>
//         </div>

//         {/* Content Section */}
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col lg:flex-row gap-8">
//           {/* Table of Contents (Sticky on Desktop, Collapsible on Mobile) */}
//           <aside className="lg:w-1/4">
//             <div className="lg:sticky lg:top-24">
//               <button
//                 className="lg:hidden w-full bg-gray-200 text-gray-800 font-semibold py-3 px-4 rounded-lg mb-4 flex justify-between items-center"
//                 onClick={() => setIsTocOpen(!isTocOpen)}
//                 aria-expanded={isTocOpen}
//                 aria-controls="toc-content"
//               >
//                 <span>Table of Contents</span>
//                 <svg
//                   className={`w-5 h-5 transform transition-transform ${isTocOpen ? 'rotate-180' : ''}`}
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                 >
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
//                 </svg>
//               </button>
//               <nav
//                 id="toc-content"
//                 className={`${
//                   isTocOpen ? 'block' : 'hidden'
//                 } lg:block bg-white rounded-lg shadow-md p-6 mb-8`}
//                 aria-label="Table of Contents"
//               >
//                 <h2 className="text-lg font-semibold text-gray-800 mb-4">Sections</h2>
//                 <ul className="space-y-2">
//                   {sections.map((section) => (
//                     <li key={section.id}>
//                       <a
//                         href={`#${section.id}`}
//                         className="text-gray-600 hover:text-red-600 transition-colors duration-200 text-sm"
//                         onClick={() => setIsTocOpen(false)}
//                       >
//                         {section.title}
//                       </a>
//                     </li>
//                   ))}
//                 </ul>
//               </nav>
//             </div>
//           </aside>

//           {/* Policy Content */}
//           <article className="lg:w-3/4 bg-white rounded-lg shadow-lg p-6 sm:p-8">
//             <section id="intro" className="mb-8">
//               <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
//                 Zynlogic Private Limited ("Zynlogic," "we," "us," or "our") is committed to protecting your privacy. This Cookies Policy explains how we use cookies and similar technologies in our mobile applications, web applications, and services provided for developing and supporting applications for our clients. This policy applies to all users of our apps, websites, and services, including those developed on behalf of third-party clients.
//               </p>
//             </section>

//             <section id="what-are-cookies" className="border-t border-gray-200 pt-6 mb-8">
//               <h2 className="text-2xl font-semibold text-gray-800 mb-4">What Are Cookies and Similar Technologies?</h2>
//               <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
//                 Cookies are small text files stored on your device (e.g., computer, smartphone, or tablet) when you visit a website or use an app. They help remember information about your visit, such as preferences or login details, to enhance your experience. Similar technologies, such as device identifiers (e.g., Apple’s IDFA or Android’s GAID), local storage, or pixel tags, serve comparable functions in mobile apps and web applications.
//               </p>
//             </section>

//             <section id="types-of-cookies" className="border-t border-gray-200 pt-6 mb-8">
//               <h2 className="text-2xl font-semibold text-gray-800 mb-4">Types of Cookies We Use</h2>
//               <p className="text-gray-700 leading-relaxed text-base sm:text-lg mb-4">
//                 We use the following categories of cookies and similar technologies across our services:
//               </p>
//               <ul className="list-disc list-inside text-gray-700 space-y-3 text-base sm:text-lg">
//                 <li>
//                   <strong>Strictly Necessary Cookies:</strong> Essential for the operation of our websites and apps, enabling core functions like navigation, account authentication, and security. These cannot be disabled as they are critical to providing our services.
//                 </li>
//                 <li>
//                   <strong>Functionality/Preference Cookies:</strong> Allow us to remember your choices (e.g., language, region, or login details) to provide a personalized experience. These may be set by us or third-party providers integrated into our services.
//                 </li>
//                 <li>
//                   <strong>Performance/Analytics Cookies:</strong> Collect anonymized data on how you interact with our apps and websites, helping us improve performance, content, and user experience. For example, we may use Google Analytics, which uses cookies like <code className="bg-gray-100 px-1 rounded">_ga</code> to track user engagement without identifying individuals.
//                 </li>
//                 <li>
//                   <strong>Advertising/Tracking Cookies:</strong> Used to deliver personalized ads or measure ad effectiveness. These may be set by third-party advertising partners (e.g., Google Ads) and may track your activity across devices or apps to provide relevant content.
//                 </li>
//               </ul>
//             </section>

//             <section id="how-we-use-cookies" className="border-t border-gray-200 pt-6 mb-8">
//               <h2 className="text-2xl font-semibold text-gray-800 mb-4">How We Use Cookies</h2>
//               <p className="text-gray-700 leading-relaxed text-base sm:text-lg mb-4">
//                 We use cookies and similar technologies for the following purposes:
//               </p>
//               <ul className="list-disc list-inside text-gray-700 space-y-3 text-base sm:text-lg">
//                 <li>
//                   <strong>Service Delivery:</strong> To enable essential features, such as maintaining user sessions, remembering items in a shopping cart, or securing your account.
//                 </li>
//                 <li>
//                   <strong>Personalization:</strong> To save your preferences, such as language or display settings, for a tailored experience.
//                 </li>
//                 <li>
//                   <strong>Performance Improvement:</strong> To analyze usage patterns and optimize the functionality and design of our apps and websites.
//                 </li>
//                 <li>
//                   <strong>Advertising:</strong> To serve relevant ads or limit the frequency of ads you see, often through third-party services like Google Ads or social media platforms.
//                 </li>
//                 <li>
//                   <strong>Client Services:</strong> For apps and websites developed for our clients, we may implement cookies as per their requirements, ensuring compliance with applicable laws.
//                 </li>
//               </ul>
//             </section>

//             <section id="third-party-cookies" className="border-t border-gray-200 pt-6 mb-8">
//               <h2 className="text-2xl font-semibold text-gray-800 mb-4">Third-Party Cookies</h2>
//               <p className="text-gray-700 leading-relaxed text-base sm:text-lg mb-4">
//                 Some cookies are set by third-party services integrated into our apps and websites, such as:
//               </p>
//               <ul className="list-disc list-inside text-gray-700 space-y-3 text-base sm:text-lg mb-4">
//                 <li>
//                   <strong>Analytics Providers:</strong> Tools like Google Analytics use cookies to collect usage statistics.
//                 </li>
//                 <li>
//                   <strong>Advertising Networks:</strong> Partners like Google Ads may set cookies to deliver targeted ads or measure campaign performance.
//                 </li>
//                 <li>
//                   <strong>Social Media Features:</strong> Features like the Facebook Like button or Share widgets may set cookies to enable functionality.
//                 </li>
//               </ul>
//               <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
//                 These third parties may collect data such as your IP address or pages visited. Their cookie usage is governed by their respective privacy policies, which we encourage you to review. Zynlogic does not allow third-party tracking companies to set cookies unless necessary for service delivery or with your consent.
//               </p>
//             </section>

//             <section id="cookies-in-mobile-apps" className="border-t border-gray-200 pt-6 mb-8">
//               <h2 className="text-2xl font-semibold text-gray-800 mb-4">Cookies in Mobile Apps</h2>
//               <p className="text-gray-700 leading-relaxed text-base sm:text-lg mb-4">
//                 In our mobile apps, we may use device identifiers or similar technologies instead of traditional cookies. These technologies serve similar purposes, such as remembering your preferences or tracking app usage for analytics. For apps developed for clients, we ensure that any use of cookies or identifiers complies with their instructions and applicable regulations, including GDPR and CCPA.
//               </p>
//               <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
//                 When you first install or use our apps, we may display a consent notice during the onboarding process, informing you about data collection and requesting your permission for non-essential cookies or trackers. You can manage these preferences in the app’s settings.
//               </p>
//             </section>

//             <section id="legal-basis" className="border-t border-gray-200 pt-6 mb-8">
//               <h2 className="text-2xl font-semibold text-gray-800 mb-4">Legal Basis for Using Cookies</h2>
//               <p className="text-gray-700 leading-relaxed text-base sm:text-lg mb-4">
//                 We use cookies and similar technologies based on the following legal grounds:
//               </p>
//               <ul className="list-disc list-inside text-gray-700 space-y-3 text-base sm:text-lg mb-4">
//                 <li>
//                   <strong>Consent:</strong> For non-essential cookies (e.g., analytics, advertising), we obtain your explicit consent via a cookie banner or app consent notice, as required by GDPR and PECR.
//                 </li>
//                 <li>
//                   <strong>Legitimate Interests:</strong> For strictly necessary cookies, we rely on our legitimate interest to provide functional and secure services.
//                 </li>
//                 <li>
//                   <strong>Contractual Necessity:</strong> For cookies required to deliver services you’ve requested (e.g., maintaining a session in an app), we process data to fulfill our contractual obligations.
//                 </li>
//               </ul>
//               <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
//                 For users in California, we comply with CCPA by providing options to opt out of the sale or sharing of personal data via cookies.
//               </p>
//             </section>

//             <section id="manage-cookies" className="border-t border-gray-200 pt-6 mb-8">
//               <h2 className="text-2xl font-semibold text-gray-800 mb-4">How to Manage Cookies</h2>
//               <p className="text-gray-700 leading-relaxed text-base sm:text-lg mb-4">
//                 You can control cookies and similar technologies through the following methods:
//               </p>
//               <ul className="list-disc list-inside text-gray-700 space-y-3 text-base sm:text-lg mb-4">
//                 <li>
//                   <strong>Browser Settings:</strong> Most browsers allow you to block or delete cookies. Visit the help pages for your browser (e.g., Firefox, Chrome, Safari, Edge) to learn how to manage cookie settings. Note that disabling cookies may limit some features of our websites.
//                 </li>
//                 <li>
//                   <strong>Device Settings:</strong> For mobile apps, you can manage device identifiers (e.g., IDFA or GAID) in your device’s settings. For example, enable “Limit Ad Tracking” on iOS or “Opt out of Ads Personalization” on Android.
//                 </li>
//                 <li>
//                   <strong>Cookie Consent Banner:</strong> Our websites and apps may display a cookie banner allowing you to accept, reject, or customize cookie preferences. You can revisit these settings via the “Manage Cookie Preferences” link or icon on our websites.
//                 </li>
//                 <li>
//                   <strong>Opt-Out Tools:</strong> For advertising cookies, you can opt out via tools like the Digital Advertising Alliance (DAA) at{' '}
//                   <a
//                     href="http://optout.aboutads.info/"
//                     className="text-red-600 hover:underline"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                   >
//                     optout.aboutads.info
//                   </a>{' '}
//                   (U.S.), the European Interactive Digital Advertising Alliance (EDAA) at{' '}
//                   <a
//                     href="http://youronlinechoices.eu"
//                     className="text-red-600 hover:underline"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                   >
//                     youronlinechoices.eu
//                   </a>{' '}
//                   (Europe), or the Network Advertising Initiative (NAI) at{' '}
//                   <a
//                     href="http://optout.networkadvertising.org/"
//                     className="text-red-600 hover:underline"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                   >
//                     optout.networkadvertising.org
//                   </a>.
//                 </li>
//               </ul>
//               <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
//                 Please note that you must update your preferences on each device and browser you use. Clearing cookies or resetting device identifiers may require you to renew your preferences.
//               </p>
//             </section>

//             <section id="client-apps" className="border-t border-gray-200 pt-6 mb-8">
//               <h2 className="text-2xl font-semibold text-gray-800 mb-4">Cookies in Client-Developed Applications</h2>
//               <p className="text-gray-700 leading-relaxed text-base sm:text-lg mb-4">
//                 For applications we develop or support for clients, we implement cookies and similar technologies as per their specifications. We ensure compliance with applicable laws by:
//               </p>
//               <ul className="list-disc list-inside text-gray-700 space-y-3 text-base sm:text-lg mb-4">
//                 <li>Conducting cookie audits to identify and document cookie usage.</li>
//                 <li>Providing clear information to users about cookie purposes and obtaining consent where required.</li>
//                 <li>Offering mechanisms for users to manage cookie preferences, such as opt-out options.</li>
//               </ul>
//               <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
//                 Clients are responsible for ensuring their cookie policies align with legal requirements, but we assist by integrating compliant consent mechanisms and transparent disclosures.
//               </p>
//             </section>

//             <section id="data-protection" className="border-t border-gray-200 pt-6 mb-8">
//               <h2 className="text-2xl font-semibold text-gray-800 mb-4">Data Protection and Your Rights</h2>
//               <p className="text-gray-700 leading-relaxed text-base sm:text-lg mb-4">
//                 Cookies and similar technologies may collect personal data, which we process in accordance with our Privacy Policy and applicable laws like GDPR and CCPA. You have rights over your personal data, including:
//               </p>
//               <ul className="list-disc list-inside text-gray-700 space-y-3 text-base sm:text-lg mb-4">
//                 <li><strong>Access:</strong> Request details of the personal data we hold about you.</li>
//                 <li><strong>Deletion:</strong> Request the deletion of your personal data collected via cookies.</li>
//                 <li><strong>Opt-Out:</strong> Opt out of the sale or sharing of your personal data (e.g., for CCPA compliance).</li>
//                 <li><strong>Consent Withdrawal:</strong> Withdraw consent for non-essential cookies at any time.</li>
//               </ul>
//               <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
//                 To exercise these rights or for questions about our cookie practices, contact us at <a href="mailto:privacy@zynlogic.com" className="text-red-600 hover:underline">privacy@zynlogic.com</a>.
//               </p>
//             </section>

//             <section id="changes" className="border-t border-gray-200 pt-6 mb-8">
//               <h2 className="text-2xl font-semibold text-gray-800 mb-4">Changes to This Cookies Policy</h2>
//               <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
//                 We may update this Cookies Policy to reflect changes in our practices or legal requirements. We will notify you of significant changes by posting the updated policy on our website or within our apps, with the “Last Updated” date at the top.
//               </p>
//             </section>

//             <section id="contact" className="border-t border-gray-200 pt-6">
//               <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact Us</h2>
//               <p className="text-gray-700 leading-relaxed text-base sm:text-lg mb-4">
//                 If you have questions about this Cookies Policy or our use of cookies, please contact us at:
//               </p>
//               <p className="text-gray-700 text-base sm:text-lg mb-2"><strong>Zynlogic Private Limited</strong></p>
//               <p className="text-gray-700 text-base sm:text-lg mb-2">123 Business Avenue, Tech Park, Bangalore, Karnataka 560001, India</p>
//               <p className="text-gray-700 text-base sm:text-lg mb-2">
//                 Email: <a href="mailto:privacy@zynlogic.com" className="text-red-600 hover:underline">privacy@zynlogic.com</a>
//               </p>
//               <p className="text-gray-700 text-base sm:text-lg mb-4">Phone: +91 80 1234 5678</p>
//               <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
//                 For more information about how we handle your personal data, please review our{' '}
//                 <a href="/privacy-policy" className="text-red-600 hover:underline">Privacy Policy</a>.
//               </p>
//             </section>
//           </article>
//         </div>
//       </main>

//       {/* Footer */}
//       <footer className="bg-gray-900 text-gray-300 py-8">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex flex-col md:flex-row justify-between items-center">
//             <div className="mb-6 md:mb-0">
//               <p className="text-sm">© 2025 Zynlogic Private Limited. All rights reserved.</p>
//             </div>
//             <nav className="flex space-x-6" aria-label="Footer Navigation">
//               <a href="/" className="text-sm hover:text-white transition-colors duration-200">Home</a>
//               <a href="/about" className="text-sm hover:text-white transition-colors duration-200">About Us</a>
//               <a href="/services" className="text-sm hover:text-white transition-colors duration-200">Services</a>
//               <a href="/contact" className="text-sm hover:text-white transition-colors duration-200">Contact</a>
//             </nav>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default CookiesPolicy;


import React, { useState } from 'react';
import Navbar from '../layout/Navbar'; // Assuming provided Navbar component
import Footer from '../layout/Footer';
const CookiesPolicy: React.FC = () => {
  const [isTocOpen, setIsTocOpen] = useState(false);

  const sections = [
    { id: 'what-are-cookies', title: 'What Are Cookies and Similar Technologies?' },
    { id: 'types-of-cookies', title: 'Types of Cookies We Use' },
    { id: 'how-we-use-cookies', title: 'How We Use Cookies' },
    { id: 'third-party-cookies', title: 'Third-Party Cookies' },
    { id: 'cookies-in-mobile-apps', title: 'Cookies in Mobile Apps' },
    { id: 'legal-basis', title: 'Legal Basis for Using Cookies' },
    { id: 'manage-cookies', title: 'How to Manage Cookies' },
    { id: 'client-apps', title: 'Cookies in Client-Developed Applications' },
    { id: 'data-protection', title: 'Data Protection and Your Rights' },
    { id: 'changes', title: 'Changes to This Cookies Policy' },
    { id: 'contact', title: 'Contact Us' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Header */}
      <header className="sticky top-0 z-50">
        <Navbar />
      </header>
<br></br><br></br><br></br><br></br>
      {/* Main Content */}
      <main className="flex-grow">
        <div className="relative bg-gradient-to-br from-indigo-600 to-indigo-900">
          {/* Hero Section */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Cookies Policy
            </h1>
            <p className="text-sm sm:text-base text-gray-100 max-w-2xl mx-auto">
              <strong>Last Updated:</strong> June 16, 2025
            </p>
          </div>
        </div>

        {/* Content Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col lg:flex-row gap-8">
          {/* Table of Contents (Sticky on Desktop, Collapsible on Mobile) */}
          <aside className="lg:w-1/4">
            <div className="lg:sticky lg:top-24">
              <button
                className="lg:hidden w-full bg-gray-100 text-gray-800 font-semibold py-3 px-4 rounded-lg mb-4 flex justify-between items-center hover:bg-gray-200 transition-colors duration-200"
                onClick={() => setIsTocOpen(!isTocOpen)}
                aria-expanded={isTocOpen}
                aria-controls="toc-content"
              >
                <span>Table of Contents</span>
                <svg
                  className={`w-5 h-5 transform transition-transform ${isTocOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <nav
                id="toc-content"
                className={`${
                  isTocOpen ? 'block' : 'hidden'
                } lg:block bg-white rounded-lg shadow-md p-6 mb-8`}
                aria-label="Table of Contents"
              >
                <h2 className="text-lg font-semibold text-gray-900 mb-4">Sections</h2>
                <ul className="space-y-2">
                  {sections.map((section) => (
                    <li key={section.id}>
                      <a
                        href={`#${section.id}`}
                        className="text-gray-600 hover:text-indigo-600 transition-colors duration-200 text-sm"
                        onClick={() => setIsTocOpen(false)}
                      >
                        {section.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </aside>

          {/* Policy Content */}
          <article className="lg:w-3/4 bg-gray-50 rounded-lg shadow-lg p-6 sm:p-8">
            <section id="intro" className="mb-8">
              <p className="text-gray-600 leading-relaxed text-base sm:text-lg">
                Zynlogic Private Limited ("Zynlogic," "we," "us," or "our") is committed to protecting your privacy. This Cookies Policy explains how we use cookies and similar technologies in our mobile applications, web applications, and services provided for developing and supporting applications for our clients. This policy applies to all users of our apps, websites, and services, including those developed on behalf of third-party clients.
              </p>
            </section>

            <section id="what-are-cookies" className="border-t border-gray-200 pt-6 mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">What Are Cookies and Similar Technologies?</h2>
              <p className="text-gray-600 leading-relaxed text-base sm:text-lg">
                Cookies are small text files stored on your device (e.g., computer, smartphone, or tablet) when you visit a website or use an app. They help remember information about your visit, such as preferences or login details, to enhance your experience. Similar technologies, such as device identifiers (e.g., Apple’s IDFA or Android’s GAID), local storage, or pixel tags, serve comparable functions in mobile apps and web applications.
              </p>
            </section>

            <section id="types-of-cookies" className="border-t border-gray-200 pt-6 mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Types of Cookies We Use</h2>
              <p className="text-gray-600 leading-relaxed text-base sm:text-lg mb-4">
                We use the following categories of cookies and similar technologies across our services:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-3 text-base sm:text-lg">
                <li>
                  <strong>Strictly Necessary Cookies:</strong> Essential for the operation of our websites and apps, enabling core functions like navigation, account authentication, and security. These cannot be disabled as they are critical to providing our services.
                </li>
                <li>
                  <strong>Functionality/Preference Cookies:</strong> Allow us to remember your choices (e.g., language, region, or login details) to provide a personalized experience. These may be set by us or third-party providers integrated into our services.
                </li>
                <li>
                  <strong>Performance/Analytics Cookies:</strong> Collect anonymized data on how you interact with our apps and websites, helping us improve performance, content, and user experience. For example, we may use Google Analytics, which uses cookies like <code className="bg-gray-100 px-1 rounded">_ga</code> to track user engagement without identifying individuals.
                </li>
                <li>
                  <strong>Advertising/Tracking Cookies:</strong> Used to deliver personalized ads or measure ad effectiveness. These may be set by third-party advertising partners (e.g., Google Ads) and may track your activity across devices or apps to provide relevant content.
                </li>
              </ul>
            </section>

            <section id="how-we-use-cookies" className="border-t border-gray-200 pt-6 mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">How We Use Cookies</h2>
              <p className="text-gray-600 leading-relaxed text-base sm:text-lg mb-4">
                We use cookies and similar technologies for the following purposes:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-3 text-base sm:text-lg">
                <li>
                  <strong>Service Delivery:</strong> To enable essential features, such as maintaining user sessions, remembering items in a shopping cart, or securing your account.
                </li>
                <li>
                  <strong>Personalization:</strong> To save your preferences, such as language or display settings, for a tailored experience.
                </li>
                <li>
                  <strong>Performance Improvement:</strong> To analyze usage patterns and optimize the functionality and design of our apps and websites.
                </li>
                <li>
                  <strong>Advertising:</strong> To serve relevant ads or limit the frequency of ads you see, often through third-party services like Google Ads or social media platforms.
                </li>
                <li>
                  <strong>Client Services:</strong> For apps and websites developed for our clients, we may implement cookies as per their requirements, ensuring compliance with applicable laws.
                </li>
              </ul>
            </section>

            <section id="third-party-cookies" className="border-t border-gray-200 pt-6 mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Third-Party Cookies</h2>
              <p className="text-gray-600 leading-relaxed text-base sm:text-lg mb-4">
                Some cookies are set by third-party services integrated into our apps and websites, such as:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-3 text-base sm:text-lg mb-4">
                <li>
                  <strong>Analytics Providers:</strong> Tools like Google Analytics use cookies to collect usage statistics.
                </li>
                <li>
                  <strong>Advertising Networks:</strong> Partners like Google Ads may set cookies to deliver targeted ads or measure campaign performance.
                </li>
                <li>
                  <strong>Social Media Features:</strong> Features like the Facebook Like button or Share widgets may set cookies to enable functionality.
                </li>
              </ul>
              <p className="text-gray-600 leading-relaxed text-base sm:text-lg">
                These third parties may collect data such as your IP address or pages visited. Their cookie usage is governed by their respective privacy policies, which we encourage you to review. Zynlogic does not allow third-party tracking companies to set cookies unless necessary for service delivery or with your consent.
              </p>
            </section>

            <section id="cookies-in-mobile-apps" className="border-t border-gray-200 pt-6 mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Cookies in Mobile Apps</h2>
              <p className="text-gray-600 leading-relaxed text-base sm:text-lg mb-4">
                In our mobile apps, we may use device identifiers or similar technologies instead of traditional cookies. These technologies serve similar purposes, such as remembering your preferences or tracking app usage for analytics. For apps developed for clients, we ensure that any use of cookies or identifiers complies with their instructions and applicable regulations, including GDPR and CCPA.
              </p>
              <p className="text-gray-600 leading-relaxed text-base sm:text-lg">
                When you first install or use our apps, we may display a consent notice during the onboarding process, informing you about data collection and requesting your permission for non-essential cookies or trackers. You can manage these preferences in the app’s settings.
              </p>
            </section>

            <section id="legal-basis" className="border-t border-gray-200 pt-6 mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Legal Basis for Using Cookies</h2>
              <p className="text-gray-600 leading-relaxed text-base sm:text-lg mb-4">
                We use cookies and similar technologies based on the following legal grounds:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-3 text-base sm:text-lg mb-4">
                <li>
                  <strong>Consent:</strong> For non-essential cookies (e.g., analytics, advertising), we obtain your explicit consent via a cookie banner or app consent notice, as required by GDPR and PECR.
                </li>
                <li>
                  <strong>Legitimate Interests:</strong> For strictly necessary cookies, we rely on our legitimate interest to provide functional and secure services.
                </li>
                <li>
                  <strong>Contractual Necessity:</strong> For cookies required to deliver services you’ve requested (e.g., maintaining a session in an app), we process data to fulfill our contractual obligations.
                </li>
              </ul>
              <p className="text-gray-600 leading-relaxed text-base sm:text-lg">
                For users in California, we comply with CCPA by providing options to opt out of the sale or sharing of personal data via cookies.
              </p>
            </section>

            <section id="manage-cookies" className="border-t border-gray-200 pt-6 mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">How to Manage Cookies</h2>
              <p className="text-gray-600 leading-relaxed text-base sm:text-lg mb-4">
                You can control cookies and similar technologies through the following methods:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-3 text-base sm:text-lg mb-4">
                <li>
                  <strong>Browser Settings:</strong> Most browsers allow you to block or delete cookies. Visit the help pages for your browser (e.g., Firefox, Chrome, Safari, Edge) to learn how to manage cookie settings. Note that disabling cookies may limit some features of our websites.
                </li>
                <li>
                  <strong>Device Settings:</strong> For mobile apps, you can manage device identifiers (e.g., IDFA or GAID) in your device’s settings. For example, enable “Limit Ad Tracking” on iOS or “Opt out of Ads Personalization” on Android.
                </li>
                <li>
                  <strong>Cookie Consent Banner:</strong> Our websites and apps may display a cookie banner allowing you to accept, reject, or customize cookie preferences. You can revisit these settings via the “Manage Cookie Preferences” link or icon on our websites.
                </li>
                <li>
                  <strong>Opt-Out Tools:</strong> For advertising cookies, you can opt out via tools like the Digital Advertising Alliance (DAA) at{' '}
                  <a
                    href="http://optout.aboutads.info/"
                    className="text-indigo-600 hover:text-teal-500 transition-colors duration-200"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    optout.aboutads.info
                  </a>{' '}
                  (U.S.), the European Interactive Digital Advertising Alliance (EDAA) at{' '}
                  <a
                    href="http://youronlinechoices.eu"
                    className="text-indigo-600 hover:text-teal-500 transition-colors duration-200"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    youronlinechoices.eu
                  </a>{' '}
                  (Europe), or the Network Advertising Initiative (NAI) at{' '}
                  <a
                    href="http://optout.networkadvertising.org/"
                    className="text-indigo-600 hover:text-teal-500 transition-colors duration-200"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    optout.networkadvertising.org
                  </a>.
                </li>
              </ul>
              <p className="text-gray-600 leading-relaxed text-base sm:text-lg">
                Please note that you must update your preferences on each device and browser you use. Clearing cookies or resetting device identifiers may require you to renew your preferences.
              </p>
            </section>

            <section id="client-apps" className="border-t border-gray-200 pt-6 mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Cookies in Client-Developed Applications</h2>
              <p className="text-gray-600 leading-relaxed text-base sm:text-lg mb-4">
                For applications we develop or support for clients, we implement cookies and similar technologies as per their specifications. We ensure compliance with applicable laws by:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-3 text-base sm:text-lg mb-4">
                <li>Conducting cookie audits to identify and document cookie usage.</li>
                <li>Providing clear information to users about cookie purposes and obtaining consent where required.</li>
                <li>Offering mechanisms for users to manage cookie preferences, such as opt-out options.</li>
              </ul>
              <p className="text-gray-600 leading-relaxed text-base sm:text-lg">
                Clients are responsible for ensuring their cookie policies align with legal requirements, but we assist by integrating compliant consent mechanisms and transparent disclosures.
              </p>
            </section>

            <section id="data-protection" className="border-t border-gray-200 pt-6 mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Data Protection and Your Rights</h2>
              <p className="text-gray-600 leading-relaxed text-base sm:text-lg mb-4">
                Cookies and similar technologies may collect personal data, which we process in accordance with our Privacy Policy and applicable laws like GDPR and CCPA. You have rights over your personal data, including:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-3 text-base sm:text-lg mb-4">
                <li><strong>Access:</strong> Request details of the personal data we hold about you.</li>
                <li><strong>Deletion:</strong> Request the deletion of your personal data collected via cookies.</li>
                <li><strong>Opt-Out:</strong> Opt out of the sale or sharing of your personal data (e.g., for CCPA compliance).</li>
                <li><strong>Consent Withdrawal:</strong> Withdraw consent for non-essential cookies at any time.</li>
              </ul>
              <p className="text-gray-600 leading-relaxed text-base sm:text-lg">
                To exercise these rights or for questions about our cookie practices, contact us at <a href="mailto:privacy@zynlogic.com" className="text-indigo-600 hover:text-teal-500 transition-colors duration-200">privacy@zynlogic.com</a>.
              </p>
            </section>

            <section id="changes" className="border-t border-gray-200 pt-6 mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Changes to This Cookies Policy</h2>
              <p className="text-gray-600 leading-relaxed text-base sm:text-lg">
                We may update this Cookies Policy to reflect changes in our practices or legal requirements. We will notify you of significant changes by posting the updated policy on our website or within our apps, with the “Last Updated” date at the top.
              </p>
            </section>

            <section id="contact" className="border-t border-gray-200 pt-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Us</h2>
              <p className="text-gray-600 leading-relaxed text-base sm:text-lg mb-4">
                If you have questions about this Cookies Policy or our use of cookies, please contact us at:
              </p>
              <p className="text-gray-600 text-base sm:text-lg mb-2"><strong>Zynlogic Private Limited</strong></p>
              <p className="text-gray-600 text-base sm:text-lg mb-2">kavuri hills
Trendz Aspire,Madhapur,Hitech city
Hyderabad, Telangana</p>
              <p className="text-gray-600 text-base sm:text-lg mb-2">
                Email: <a href="mailto:contact@zynlogic.com" className="text-indigo-600 hover:text-teal-500 transition-colors duration-200">contact@zynlogic.com</a>
              </p>
              <p className="text-gray-600 text-base sm:text-lg mb-4">Phone: +91 7675953062</p>
              <p className="text-gray-600 leading-relaxed text-base sm:text-lg">
                For more information about how we handle your personal data, please review our{' '}
                <a href="/privacy-policy" className="text-indigo-600 hover:text-teal-500 transition-colors duration-200">Privacy Policy</a>.
              </p>
            </section>
          </article>
        </div>
      </main>

      {/* Footer */}
     <Footer />
    </div>
  );
};

export default CookiesPolicy;