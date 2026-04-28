"use client";
import React from 'react'
import AboutBanner from '../components/AboutBanner';
import OurStory from '../components/OurStory';
import ExperienceSection from '../components/ExperienceSection';
import GalleryGrid from '../components/GalleryGrid';
import Testimonials from '../components/TestimonialSection';
import ContactSection from '../components/ContactSection';

export default function page() {
  return (
    <main>
        <AboutBanner/>
        <OurStory/>
        <ExperienceSection/>
        <GalleryGrid/>
        <Testimonials/>
        <ContactSection/>
    </main>
  )
}
