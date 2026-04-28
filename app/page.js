
import Hero from "./components/Hero";
import AboutSection from "./components/AboutSection";
import FeaturedRetreats from "./components/FeaturedRetreats";
import { client } from "@/sanity/lib/client";
import { featuredRetreatsQuery } from "@/sanity/lib/queries";
import GallerySection from "./components/GallerySection";
import TransformationSection from "./components/TransformationSection";
import JourneySection from "./components/JourneySection";
import FAQSection from "./components/FAQSection";
import ContactSection from "./components/ContactSection";
import TestimonialSection from "./components/TestimonialSection";



export default async function Home() {
  const images = [
    "/Slider/Slider1.jpg",
    "/Slider/Slider2.jpg",
    "/Slider/Slider3.jpg",
    "/Slider/Slider4.jpg",
    "/Slider/Slider5.jpg",
    "/Slider/Slider6.jpg",
  ];
  const retreats = await client.fetch(featuredRetreatsQuery);
  return (
    <>
    <main>
      <Hero/>
      <AboutSection/>
      <FeaturedRetreats data={retreats} />  
      <GallerySection images={images} />
      <TransformationSection/>
      <FAQSection/>
      <JourneySection/>
      <TestimonialSection/>
      <ContactSection/>
    </main>
    </>
  );
}
