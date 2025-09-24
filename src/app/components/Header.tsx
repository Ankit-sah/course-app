'use client';

import React, { useState } from 'react';
import { Menu, Button, Drawer } from 'antd';
import Link from 'next/link';
import { MenuOutlined } from '@ant-design/icons';

const Header: React.FC = () => {
  const [drawerVisible, setDrawerVisible] = useState(false);

  const showDrawer = () => {
    setDrawerVisible(true);
  };

  const closeDrawer = () => {
    setDrawerVisible(false);
  };

  const menuItems = [
    { key: 'home', label: 'Home', href: '/' },
    { key: 'courses', label: 'Courses', href: '#' },
    { key: 'about', label: 'About', href: '#' },
    { key: 'contact', label: 'Contact', href: '#' },
  ];

  return (
    <>
      <header className="py-4 bg-white shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            {/* Logo */}
            <Link href="/">
              <div className="flex items-center">
                <img 
                  alt="logo" 
                  className="object-contain w-full h-10"
                  src="/logo.svg"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    const parent = e.currentTarget.parentElement;
                    if (parent) {
                      parent.innerHTML = '<span class="text-2xl font-bold text-gray-900">CourseApp</span>';
                    }
                  }}
                />
              </div>
            </Link>

            {/* Mobile Menu Button */}
            <button 
              type="button" 
              className="flex items-center justify-center bg-transparent lg:hidden"
              onClick={showDrawer}
            >
              <MenuOutlined className="text-2xl" />
            </button>

            {/* Desktop Menu */}
            <div className="hidden w-full lg:block">
              <div className="container mx-auto">
                <div className="flex items-center justify-between w-full gap-4">
                  {/* Navigation Menu */}
                  <Menu 
                    mode="horizontal" 
                    className="flex-1 border-0 justify-center [&_.ant-menu-item]:lg:px-3 [&_.ant-menu-item]:xl:px-4"
                    selectedKeys={[]}
                    items={menuItems.map(item => ({
                      key: item.key,
                      label: (
                        <Link href={item.href} className="font-medium">
                          {item.label}
                        </Link>
                      ),
                    }))}
                  />

                  {/* Auth Buttons */}
                  <div className="flex items-center justify-between gap-4">
                    <Link 
                      href="/auth/login" 
                      className="inline-block font-medium text-gray-700 hover:text-gray-900 transition-colors"
                    >
                      Log In
                    </Link>
                    <Link 
                      href="/auth/register" 
                      className="inline-block font-medium border border-[#0F172A] rounded-lg py-3 px-5 hover:bg-[#0F172A] hover:text-white transition-colors"
                    >
                      Sign Up Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <Drawer
        title={
          <Link href="/" onClick={closeDrawer}>
            <img 
              alt="logo" 
              className="object-contain h-8"
              src="/logo.svg"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                const parent = e.currentTarget.parentElement;
                if (parent) {
                  parent.innerHTML = '<span class="text-xl font-bold text-gray-900">CourseApp</span>';
                }
              }}
            />
          </Link>
        }
        placement="right"
        onClose={closeDrawer}
        open={drawerVisible}
        className="lg:hidden"
      >
        <div className="flex flex-col space-y-6">
          {/* Mobile Menu Items */}
          {menuItems.map((item) => (
            <Link
              key={item.key}
              href={item.href}
              className="text-lg font-medium text-gray-700 hover:text-gray-900 py-2"
              onClick={closeDrawer}
            >
              {item.label}
            </Link>
          ))}
          
          <div className="border-t pt-6 mt-6">
            <Link 
              href="/auth/login" 
              className="block text-center font-medium text-gray-700 hover:text-gray-900 py-3 mb-3"
              onClick={closeDrawer}
            >
              Log In
            </Link>
            <Link 
              href="/auth/register" 
              className="block text-center font-medium border border-[#0F172A] rounded-lg py-3 px-5 hover:bg-[#0F172A] hover:text-white transition-colors"
              onClick={closeDrawer}
            >
              Sign Up Now
            </Link>
          </div>
        </div>
      </Drawer>
    </>
  );
};

export default Header;