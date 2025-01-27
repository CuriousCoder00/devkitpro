"use client";

import { CloudLightning, LucideAudioWaveform, LucideGlobe, LucideSlidersVertical, Settings2, Wrench } from "lucide-react";
import React from "react";

const WhyChooseDevKitPro = () => {
  return (
    <section id="features" className="py-14">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="relative max-w-2xl mx-auto sm:text-center">
          <div className="z-10">
            <h3 className="mt-4 text-3xl font-normal font-geist tracking-tighter md:text-5xl sm:text-4xl">
              Why Choose DevKitPro?
            </h3>
          </div>
          <div
            className="absolute inset-0 max-w-xs mx-auto h-44 blur-[118px]"
            style={{
              background:
                "linear-gradient(152.92deg, rgba(132, 182, 252, 0.2) 4.54%, rgba(121, 140, 249, 0.26) 34.2%, rgba(132, 158, 252, 0.1) 77.55%)",
            }}
          ></div>
        </div>
        <hr className="bg-foreground/30 h-px w-1/2 mx-auto  mt-5" />
        <div className="relative mt-12">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {data.map((item, idx) => (
              <div
                key={idx}
                className="bg-transparent transform-gpu dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#8686f01f_inset]  space-y-3 p-4 border rounded-xl bg-gradient-to-br hover:from-blue-600/10 hover:via-blue-600/5 hover:to-blue-600/0 hover:scale-105 duration-300 delay-75"
              >
                <div className="text-blue-600 rounded-full p-4 transform-gpu dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#8686f01f_inset] w-fit bg-gradient-to-tr from-blue-600/10 to-orange-500/5">
                  <item.icon />
                </div>
                <h4 className="text-lg font-bold font-geist tracking-tighter">
                  {item.title}
                </h4>
                <p className="text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseDevKitPro;

const data = [
  {
    title: "Accelerate Development",
    desc: "Start building immediately with pre-configured components, templates, and backend setups tailored to your needs.",
    icon: CloudLightning,
  },
  {
    title: "Fully Customizable",
    desc: "Every component, template, and configuration is fully customizable to fit your project requirements.",
    icon: Settings2,
  },
  {
    title: " Versatile Tech Stack Support",
    desc: "DevKitPro supports a wide range of modern technologies, ensuring you can build with your preferred stack.",
    icon: LucideGlobe,
  },
  {
    title: "Developer Centric Features",
    desc: "Built by developers, for developers—DevKitPro simplifies the complexities of project setup, so you can focus on building innovative solutions.",
    icon: Wrench,
  },
  {
    title: "Backend Integrations",
    desc: "Seamlessly integrate with Node.js, Prisma, PostgreSQL, and other backend tools.",
    icon: LucideSlidersVertical
  },
  {
    title: "Ready-Made Configurations",
    desc: "Pre-configured setups for popular tech stacks, so you can skip the boilerplate.",
    icon: LucideAudioWaveform
  }
];
