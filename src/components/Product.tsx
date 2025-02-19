import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import * as React from 'react';
const products = [
  {
    title: "US FDA Registration For Food, Beverages and Suppliments",
    image: "FDA food.png",
    price: 199.00,
  },
  {
    title: "US FDA Registration For Cosmetics(MoCRA)",
    image: "Mocra.png",
    price: 399.00,
  },
  {
    title: "FSVP Agent",
    image: "FSVp.png",
    price: 99.00,
  },
  {
    title: "US FDA Product Label Review",
    image: "LABEL.png",
    price: 49.00,
  },
  {
    title: "US FDA Prior Notice",
    image: "Prior.png",
    price: 49.00,
  },
  {
    title: "US LLC Registration",
    image: "LLC.png",
    price: 399.00,
  },
  {
    title: "EIN Registration",
    image: "EIN.jpeg",
    price: 99.00,
  },
  {
    title: "Registered Agent For LLC",
    image: "Agent.png",
    price: 99.00,
  },
] as const

export default function Product() {
  return (
    <section id="services" className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12"><u>SERVICES</u></h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 md:gap-8">
          {products.map((product, index) => (
            <Card key={index} className="overflow-hidden">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-auto object-cover"
              />
              <CardContent className="p-4">
                <h3 className="font-bold text-lg leading-tight mb-2">{product.title}</h3>
                <p className="text-xl font-semibold text-blue-600">${product.price.toFixed(2)}</p>
                
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

