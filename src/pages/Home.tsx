import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Product from "@/components/Product";
import Contact from "@/components/Contact";
import * as React from 'react';
import Map from "@/components/Map";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <div >
      <Navbar />
      <Hero />
      <Product />
      <Map />
      <Contact />
      <Footer />
    </div>
  );
}
