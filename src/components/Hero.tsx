'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import * as React from 'react';
const images = [
  // {
  //   url: 'https://images.pexels.com/photos/7470817/pexels-photo-7470817.jpeg',
  //   title: 'US FDA Registration For Dietary Suppliments',
  //   description: 'Questions about medical device registrations, which are needed to export from an overseas market to the US & to import & sell devices in the US.',
  //   cta: 'Learn More'
  // },
  {
    url: 'https://images.pexels.com/photos/2386152/pexels-photo-2386152.jpeg',
    title: 'Food Facility Registration',
    // description: 'Ensure your medical devices meet FDA quality system requirements and international standards.',
    cta: 'Reach Us'
  },
  {
    url: 'https://images.pexels.com/photos/3735654/pexels-photo-3735654.jpeg',
    title: 'Cosmetic Facility Registration',
    // description: 'Develop comprehensive regulatory strategies for medical device approval and compliance.',
    cta: 'Reach Us'
  },
  {
    url: 'https://images.pexels.com/photos/7343177/pexels-photo-7343177.jpeg',
    title: 'Food Evaluation',
    // description: 'Expert guidance on clinical trials and evaluation requirements for medical devices.',
    cta: 'Reach Us'
  },
  // {
  //   url: 'https://images.pexels.com/photos/8849295/pexels-photo-8849295.jpeg',
  //   title: 'Post-Market Surveillance',
  //   description: 'Maintain compliance with post-market surveillance requirements and safety monitoring using ai and stuff.',
  //   cta: 'Discover More'
  // },
  {
    url: 'https://images.pexels.com/photos/1098515/pexels-photo-1098515.jpeg',
    title: 'International Compliance',
    // description: 'Navigate international medical device regulations and registration processes.',
    cta: 'Reach Us'
  }
]

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  return (
    <div id='home' className="pt-20 bg-gray-50">
      <div className="relative overflow-hidden">
        <h1 className="text-6xl md:p-0 p-2 md:text-center mx-auto mt-12 max-w-max">Simplifying Global Compliance.</h1>
        {/* Main Content */}
        <div className="container mx-auto px-4 py-12">
          <Card className="border-none shadow-none bg-transparent">
            <CardContent className="p-0">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                {/* Image Section */}
                <div className="relative aspect-[16/9] bg-gray-100 rounded-lg overflow-hidden">
                  <img
                    src={images[currentIndex].url}
                    alt={images[currentIndex].title}
                    className="object-cover w-full h-full transition-opacity duration-500"
                  />
                  
                  {/* Navigation Arrows */}
                  <div className="absolute inset-0 flex items-center justify-between p-4">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-10 w-10 rounded-full bg-white/80 hover:bg-white"
                      onClick={prevSlide}
                    >
                      <ChevronLeft className="h-6 w-6" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-10 w-10 rounded-full bg-white/80 hover:bg-white"
                      onClick={nextSlide}
                    >
                      <ChevronRight className="h-6 w-6" />
                    </Button>
                  </div>
                </div>

                {/* Content Section */}
                <div className="space-y-6">
                  <h1 className="text-4xl font-bold tracking-tight">
                    {images[currentIndex].title}
                  </h1>
                  <p className="text-gray-600 text-lg">
                    {images[currentIndex].description}
                  </p>
                  {/* <Button size="lg" >
                    {images[currentIndex].cta}
                  </Button> */}
                </div>
              </div>

              {/* Navigation Dots */}
              <div className="flex justify-center gap-2 mt-8">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      currentIndex === index ? 'bg-neutral-900 w-4' : 'bg-gray-300'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

