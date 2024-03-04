"use client";
import { TextGenerateEffect } from "@/components/ui/molecules/text-generate";
import { BackgroundBeams } from "@/components/ui/organisms/bg-beams";

export default function Home() {
  const description = `I'm a seasoned web developer specializing in ReactJS and JavaScript.
  I'm known for crafting engaging websites and scalable front-end systems. 
  When I'm not coding, I'm off exploring the world, finding ways to connect with new cultures and broaden my horizons.`;

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="h-[40rem] w-full bg-neutral-950 rounded-md relative flex flex-col items-center justify-center antialiased">
        <div className="mx-auto p-4 md:px-24">
          <h1 className="relative z-10 text-3xl md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-500  text-center font-sans font-bold">
            {`Hi. I'm Corey`}
          </h1>
          <p></p>
          <p className="text-neutral-500 mx-auto my-6 text-sm md:text-md lg:text-lg text-center relative z-10">
            <TextGenerateEffect words={description} />
          </p>
        </div>
        <BackgroundBeams />
      </div>
    </main>
  );
}
