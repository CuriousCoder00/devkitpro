"use client";
import Hero from "@/components/landing/hero";
import WhyChooseDevKitPro from "@/components/landing/why-choose-devkitpro";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <Hero />
      <WhyChooseDevKitPro />
    </div>
  );
}
