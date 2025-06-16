import React from "react";
import { Link } from "react-router-dom";
import { Logo } from "@/components/logo";

const links = [
    {
        group: 'Product',
        items: [
            {
                title: 'Features',
                href: '/',
            },
            {
                title: 'Solution',
                href: '/',
            },
            {
                title: 'Customers',
                href: '/',
            },
            {
                title: 'Pricing',
                href: '/',
            },
            {
                title: 'Help',
                href: '/',
            },
            {
                title: 'About',
                href: '/about',
            },
        ],
    },
    {
        group: 'Solution',
        items: [
            {
                title: 'Startup',
                href: '/',
            },
            {
                title: 'Freelancers',
                href: '/',
            },
            {
                title: 'Organizations',
                href: '/',
            },
            {
                title: 'Students',
                href: '/',
            },
            {
                title: 'Collaboration',
                href: '/',
            },
            {
                title: 'Design',
                href: '/',
            },
            {
                title: 'Management',
                href: '/',
            },
        ],
    },
    {
        group: 'Company',
        items: [
            {
                title: 'About',
                href: '/about',
            },
            {
                title: 'Careers',
                href: '/c',
            },
            {
                title: 'Blog',
                href: '/',
            },
            {
                title: 'Press',
                href: '/',
            },
            {
                title: 'Contact',
                href: '/contact',
            },
            {
                title: 'Help',
                href: '/',
            },
            {
                title: 'Testimonials',
                href: '/testimonials',
            },
        ],
    },
    {
        group: 'Legal',
        items: [
            {
                title: 'License',
                href: '/license',
            },
            {
                title: 'Privacy',
                href: '/privacy-policy',
            },
            {
                title: 'Cookies',
                href: '/cookies-policy',
            },
            {
                title: 'Security',
                href: '/security-policy',
            },
        ],
    },
];

const Footer = () => {
    return (
        <footer className="bg-black text-white pt-20">
            <div className="mx-auto max-w-5xl px-6">
                <div className="grid gap-12 md:grid-cols-5">
                    <div className="md:col-span-2">
                        <Link
                            to="/"
                            aria-label="go home"
                            className="block size-fit">
                            <Logo />
                        </Link>
                    </div>

                    <div className="grid grid-cols-2 gap-6 sm:grid-cols-4 md:col-span-3">
                        {links.map((link, index) => (
                            <div
                                key={index}
                                className="space-y-4 text-sm">
                                <span className="block font-medium text-white">{link.group}</span>
                                {link.items.map((item, index) => (
                                    <Link
                                        key={index}
                                        to={item.href}
                                        className="text-gray-400 hover:text-white block duration-150">
                                        <span>{item.title}</span>
                                    </Link>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
                <div className="mt-12 flex flex-wrap items-end justify-between gap-6 border-t border-gray-800 py-6">
                    <span className="text-gray-400 order-last block text-center text-sm md:order-first"> 2025 Zynlogic, All rights reserved</span>
                    <div className="order-first flex flex-wrap justify-center gap-6 text-sm md:order-last">
                        <Link
                            to="https://g.co/kgs/ePucjrE"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Google Maps"
                            className="text-gray-400 hover:text-white block">
                            <svg
  className="size-6"
  xmlns="http://www.w3.org/2000/svg"
  width="1em"
  height="1em"
  viewBox="0 0 24 24"
  fill="currentColor"
>
  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z" />
</svg>

                        </Link>
                        <Link
                            to="https://www.linkedin.com/company/zynlogic/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn"
                            className="text-gray-400 hover:text-white block">
                            <svg
                                className="size-6"
                                xmlns="http://www.w3.org/2000/svg"
                                width="1em"
                                height="1em"
                                viewBox="0 0 24 24">
                                <path
                                    fill="currentColor"
                                    d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.68 1.68 0 0 0-1.68 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z"></path>
                            </svg>
                        </Link>
                        
                        
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
