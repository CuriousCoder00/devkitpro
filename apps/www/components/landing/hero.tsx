import { Button } from "../ui/button";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="flex flex-col items-center justify-center relative w-full min-h-dvh">
      <div
        className="absolute inset-0 blur-xl z-10"
        style={{
          background:
            "linear-gradient(143.6deg, rgba(192, 132, 252, 0) 20.79%, rgba(121, 127, 249, 0.26) 40.92%, rgba(204, 171, 238, 0) 70.35%)",
        }}
      ></div>
      <div className="max-w-full mx-auto z-20">
        <div className="max-w-screen-xl z-10 mx-auto px-4 gap-12 text-gray-600 md:px-8">
          <div className="space-y-5 max-w-4xl leading-0  lg:leading-5 mx-auto text-center">
            <h1 className="text-transparent bg-clip-text bg-gradient-to-r dark:from-blue-700 dark:to-blue-200 from-blue-700 to-indigo-700 md:text-7xl font-extrabold text-6xl font-mono">
              DevKitPro
            </h1>
            <h2 className="text-4xl tracking-tighter font-geist  bg-clip-text dark:bg-[linear-gradient(180deg,_#FFF_0%,_rgba(255,_255,_255,_0.00)_202.08%)] text-transparent bg-[linear-gradient(180deg,_#370e35_0%,_rgba(255,_255,_255,_0.00)_202.08%)]  mx-auto md:text-6xl">
              Build Smarter & Launch Faster
            </h2>

            <p className="max-w-3xl mx-auto text-foreground/60 text-pretty text-lg">
              Your ultimate toolkit for React, Next.js, and backend
              configurations. Simplify development with ready-to-use components,
              optimized templates, and hassle-free stack setups.
            </p>
          </div>
        </div>
      </div>
      <div className="flex sm:flex-row flex-col items-center justify-center gap-4 mt-8 w-full">
        <Button className="px-8 py-4 bg-blue-800 hover:bg-blue-700 text-white z-20 max-sm:w-full w-56" size={"lg"}>
          <Link href={"/docs"}>Documentation</Link>
        </Button>
        <Button className="px-8 py-4 z-20 max-sm:w-full w-56 border border-blue-600 bg-transparent text-foreground hover:bg-blue-600/10" size={"lg"}>
          <Link href={"/#features"}>Explore Features</Link>
        </Button>
      </div>
    </div>
  );
}
