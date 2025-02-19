'use client'
import * as React from 'react';
import { useState } from "react"
import { Facebook, Twitter, Linkedin, InstagramIcon as TiktokIcon, MapPin, Phone, Mail, ArrowRight } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { toast } from "@/hooks/use-toast"

export default function Footer() {
  const [email, setEmail] = useState("")
  const [showForm, setShowForm] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Validate email
    const emailRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
    if (!emailRegex.test(email)) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      })
      return
    }

    // Here you would typically call your API endpoint
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      toast({
        title: "Success!",
        description: "Thank you for subscribing to our newsletter.",
      })
      setEmail("")
      setShowForm(false)
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again later.",
        variant: "destructive",
      })
    }
  }

  return (
    <footer className="relative overflow-hidden bg-black">
      <div className="container relative mx-auto px-4 pt-6">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Brand Section */}
          <div className="space-y-6">
            <img src="/logo.png" alt="Logo" className="h-20 w-20" />
            <h3 className="text-3xl font-bold text-white">
              The Compliance Consultant for better clients®
            </h3>
          </div>

          {/* Contact Section */}
          <div className="space-y-6 text-gray-300">
            <h4 className="text-lg font-semibold text-white">USA Office</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Mail className="h-5 w-5 shrink-0" />
                <p className="text-sm">info@accredcert.com</p>
              </div>
              <div className="flex items-start space-x-3">
                <Phone className="h-5 w-5 shrink-0" />
                <p className="text-sm">+1 (646) 974-6735</p>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 shrink-0" />
                <div className="text-sm">
                  <p>2105 Vista Oeste St NW,
                  Suite E - 1080</p>
                  <p>Albuquerque, NM 87120</p>
                </div>
              </div>
            </div>
            <Button
              variant="link"
              className="group px-0 text-white hover:text-yellow-400"
              asChild
            >
              <a href="#map">
                SEE ON MAP
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
          </div>

          <div className="space-y-6 text-gray-300">
            <h4 className="text-lg font-semibold text-white">India Office</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Mail className="h-5 w-5 shrink-0" />
                <p className="text-sm">info@accredcert.com</p>
              </div>
              <div className="flex items-start space-x-3">
                <Phone className="h-5 w-5 shrink-0" />
                <p className="text-sm">+91 83026 45259</p>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 shrink-0" />
                <div className="text-sm">
                  <p>Bahubali Colony, near Bohra Ganesh Temple</p>
                  <p>Udaipur, Rajasthan 313001</p>
                </div>
              </div>
            </div>
            <Button
              variant="link"
              className="group px-0 text-white hover:text-yellow-400"
              asChild
            >
              <a href="https://maps.app.goo.gl/KGkqbF3kDnQFLwjg8">
                SEE ON MAP
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
          </div>

          {/* Newsletter Section */}
          <div className="space-y-6 text-gray-300">
         

            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white">FOLLOW US</h4>
              <div className="flex space-x-6">
                <a
                  href="http://facebook.com/accredcert"
                  className="text-white transition-colors hover:text-yellow-400"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Facebook className="h-6 w-6" />
                  <span className="sr-only">Facebook</span>
                </a>
                <a
                  href="http://x.com/accredcert"
                  className="text-white transition-colors hover:text-yellow-400"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Twitter className="h-6 w-6" />
                  <span className="sr-only">Twitter</span>
                </a>
                <a
                  href="http://linkedin.com/company/accredcert"
                  className="text-white transition-colors hover:text-yellow-400"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="h-6 w-6" />
                  <span className="sr-only">Linkedin</span>
                </a>
                <a
                  href="https://www.instagram.com/accredcert/"
                  className="text-white transition-colors hover:text-yellow-400"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <TiktokIcon className="h-6 w-6" />
                  <span className="sr-only">InstaGram</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} AccredCert. All rights reserved.</p>
        </div>
      </div>

      {/* Newsletter Dialog
      <Dialog open={showForm} onOpenChange={setShowForm}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Subscribe to our newsletter</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex space-x-2">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1"
              />
              <Button type="submit">Subscribe</Button>
            </div>
          </form>
        </DialogContent>
      </Dialog> */}
    </footer>
  )
}

