'use client'

import { useState, useEffect } from 'react'
import { ChevronDown, Menu, X } from 'lucide-react'
import { Link } from "react-router-dom"
import React from 'react'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setIsScrolled(scrollPosition > 0)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
    setIsServicesOpen(false)
  }

  const toggleServices = () => {
    setIsServicesOpen(!isServicesOpen)
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 isolate bg-black
      } ${isMobileMenuOpen ? 'isolate bg-black' : ''} `}
    >
      <div className="max-w-7xl mx-auto px-4 py-2 sm:px-8 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center font-inter text-white text-3xl font-light text-corange"
          >
            <img src="1.png" alt="" />
          </Link>

          {/* Navigation Links - Desktop */}
          <div className="hidden md:flex items-center space-x-4 lg:space-x-8 mr-40">
            <a href="#home" className="text-sm font-semibold text-gray-200 hover:text-white">
            Home
            </a>
            <a href="#services" className="text-sm font-semibold text-gray-200 hover:text-white">
              Services
            </a>
            <a href="#about" className="text-sm font-semibold text-gray-200 hover:text-white">
            About us
            </a>
          </div>

          {/* order Button */}
          <a href="https://forms.gle/GduFJ2DZpQAhz3TU6"
            className="hidden md:inline-block bg-transparent border-[0.25px] border-white/10 text-sm text-gray-100 px-4 py-2 rounded-md hover:text-corange hover:border-corange transition-colors">Get A Quote</a>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden rounded-md p-2 text-gray-200 hover:text-white"
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden h-screen ">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#home" className="block text-5xl font-semibold text-gray-200 hover:text-white py-2">
Home              </a>
              <a href="#services" className="block text-5xl font-semibold text-gray-200 hover:text-white py-2">
              Services </a>
              <a href="#about" className="block text-5xl font-semibold text-gray-200 hover:text-white py-2">
                About us
              </a>
                
                
                {/* <ChevronDown className="ml-1 h-4 w-4" /> */}
              {/* {isServicesOpen && (
                <div className="pl-4">
                  <Link to="/services/programming" className="block text-5xl text-gray-200 hover:text-white py-2">
                    US FDA for Food, Beverages and Suppliments
                  </Link>
                  <Link to="/services/assignments" className="block text-5xl text-gray-200 hover:text-white py-2">
                    FDA fpr Cosmetics(MoCRA)
                  </Link>
                  <Link to="/services/tutoring" className="block text-5xl text-gray-200 hover:text-white py-2">
                    US LLC
                  </Link>
                  <Link className="block text-5xl text-gray-200 hover:text-white py-2">
                    <a href="/#product">More</a>
                  </Link>
                </div>
              )} */}
              {/* <Link to="/pricing" className="block text-5xl font-semibold text-gray-200 hover:text-white py-2">
                Our Pricing
              </Link> */}
              <a href="https://forms.gle/GduFJ2DZpQAhz3TU6"
              className="block text-5xl font-semibold text-gray-200 hover:text-white py-2"
              >Get A Quote</a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
