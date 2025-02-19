'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Phone, Mail } from 'lucide-react'
import * as React from 'react';

const mapStyle = [
  {
    "elementType": "geometry",
    "stylers": [{ "saturation": -100 }]
  },
  {
    "elementType": "labels.text.fill",
    "stylers": [{ "color": "#707070" }]
  },
  {
    "elementType": "labels.text.stroke",
    "stylers": [{ "color": "#ffffff" }]
  }
]

export default function Map() {
  return (
    <section id="about" className="relative w-full min-h-[600px] bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* About Us Section */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold mb-4">About Us</h2>
              <p className="text-gray-600 leading-relaxed">
              AccredCert is a trusted & US Govt. certified FDA agent specializing in
global compliance solutions. We help businesses
navigate complex regulations, ensuring your
products meet FDA standards for U.S. market
entry. Whether you're a manufacturer,
distributor, or exporter, our expertise in
product registration, labeling, and inspections
ensures smooth compliance. With a focus on
efficiency, we work closely with our clients to
simplify regulatory processes, enabling them to
expand internationally with confidence.
              </p>

            </div>

            <div className="space-y-6">
              <h3 className="text-xl font-semibold">FAQs</h3>
              <div className="grid gap-4">
                <Card>
                  <CardContent className="p-6">
                    <h4 className="font-semibold mb-2">What is the role of an FDA
agent, and why do I need
one?</h4>
                    <p className="text-sm text-gray-600">
                    An FDA agent acts as a
liaison between the FDA and
foreign companies, ensuring
compliance with U.S.
regulations and facilitating
communication for exports.</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h4 className="font-semibold mb-2">How does AccredCert help
                    with global compliance?</h4>
                    <p className="text-sm text-gray-600">
                    AccredCert is a US FDA registered agent who helps companies
through FDA regulations, product
registration, labeling, and
compliance to meet U.S. and
global standards.</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h4 className="font-semibold mb-2">What industries does
AccredCert provide FDA
compliance services for?</h4>
                    <p className="text-sm text-gray-600">
                    AccredCert provides FDA
compliance support across
industries like pharmaceuticals,
medical devices, food,
cosmetics, and dietary
supplements, helping
manufacturers, distributors, and
exporters meet U.S. market entry
standards.</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          {/* Map Section */}
          <div className="relative h-[500px] lg:h-full min-h-[500px]">
            <Card className="absolute left-4 top-4 z-10 w-72">
              <CardHeader>
                <CardTitle className="text-lg">Our Location</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-gray-500 mt-1" />
                  <p className="text-sm text-gray-600">
                    2105 Vista Oeste St NW,<br />
                    Suite E - 1080<br />
                    Albuquerque, NM 87120
                  </p>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-gray-500" />
                  <p className="text-sm text-gray-600">+1 (646) 974-6735</p>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-gray-500" />
                  <p className="text-sm text-gray-600">info@accredcert.com</p>
                </div>
              </CardContent>
            </Card>
            
            {/* Map iframe with custom styling */}
            <div className="absolute inset-0 w-full h-full rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3263.9432071848264!2d-106.7302236!3d35.108129!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87226d5dcc6ccf2d%3A0x4fc40e2c49558846!2s2105%20Vista%20Oeste%20NW%20%231080%2C%20Albuquerque%2C%20NM%2087120%2C%20USA!5e0!3m2!1sen!2sin!4v1739423284853!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'grayscale(1) contrast(1.2)' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Office Location Map"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

