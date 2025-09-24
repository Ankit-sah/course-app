import React from 'react';
import { Row, Col, Image } from 'antd';
import Link from 'next/link';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'Category',
      links: [
        { label: 'Classes', href: '#' },
        { label: 'Courses', href: '#' },
        { label: 'Exam', href: '#' }
      ]
    },
    {
      title: 'Free Material',
      links: [
        { label: '9 & 10', href: '#' },
        { label: 'Loksewa', href: '#' },
        { label: 'Exam', href: '#' }
      ]
    },
    {
      title: 'Resources',
      links: [
        { label: 'Blog', href: '#' },
        { label: 'Tutorials', href: '#' },
        { label: 'Live Class', href: '#' }
      ]
    },
    {
      title: 'Support',
      links: [
        { label: 'FAQs', href: '#' },
        { label: 'Terms', href: '#' },
        { label: 'Privacy', href: '#' }
      ]
    },
    {
      title: 'Quick Link',
      links: [
        { label: 'Contact', href: '#' },
        { label: 'Blogs', href: '#' },
        { label: 'Events', href: '#' },
        { label: 'Browse Course', href: '#' }
      ]
    }
  ];

  return (
    <footer className="bg-[#0F172A]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 border-b border-gray-700">
          <Row 
            gutter={[16, 16]} 
            style={{ marginLeft: -8, marginRight: -8 }}
          >
            {/* Logo Column */}
            <Col 
              xs={24} 
              sm={24} 
              md={24} 
              lg={4} 
              style={{ paddingLeft: 8, paddingRight: 8 }}
            >
              <Link href="/">
                <div className="ant-image">
                  <Image
                    alt="logo"
                    className="object-contain w-full h-10"
                    src="/white-logo.svg"
                    preview={false}
                    fallback="/white-logo.svg"
                    placeholder={
                      <div className="w-full h-10 bg-gray-600 flex items-center justify-center">
                        <span className="text-white text-lg font-bold">Logo</span>
                      </div>
                    }
                  />
                </div>
              </Link>
            </Col>

            {/* Dynamic Footer Sections */}
            {footerSections.map((section, index) => (
              <Col 
                key={section.title}
                xs={24} 
                sm={12} 
                md={8} 
                lg={4} 
                style={{ paddingLeft: 8, paddingRight: 8 }}
              >
                <div className="mt-8 lg:mt-0">
                  <h3 className="text-base text-white font-medium py-3">
                    {section.title}
                  </h3>
                  <ul className="space-y-0">
                    {section.links.map((link) => (
                      <li key={link.label} className="py-3 ">
                        <Link 
                          href={link.href}
                          className="text-base !text-white font-normal transition-all duration-300 ease-in-out hover:ml-1 block"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </Col>
            ))}
          </Row>
        </div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center py-4 gap-4">
          <p className="text-white text-base py-2 md:py-0">
            Softbenz @ {currentYear}. All rights reserved.
          </p>
          <p className="text-white text-base py-2 md:py-0">
            Developed by Softbenzinfosys
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;