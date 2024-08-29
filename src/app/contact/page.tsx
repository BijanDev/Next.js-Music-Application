/* eslint-disable react/no-unescaped-entities */
"use client";

import { BackgroundBeams } from "@/components/ui/background-beams";
// import { Button } from "@/components/ui/moving-border";

export default function page() {
  return (
    <div className="min-h-screen bg-black py-12 pt-32">
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
          Contact Us
        </h1>
        <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
          we're here to help with any questions about our courses, programs, or
          events. Reach out and let us know how can we assist you in your
          muscial journey.
        </p>
        <input
          type="text"
          placeholder="Your email address"
          className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500  w-full relative z-10 mt-5 p-2 bg-neutral-950 placeholder:text-neutral-700"
        />
        <textarea
          name="message"
          id="message"
          placeholder="Your message"
          rows={6}
          cols={40}
          className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500  w-full relative z-10 mt-4 p-2 bg-neutral-950 placeholder:text-neutral-700"
        ></textarea>

        <div className="mt-8 text-center">
          <button
            className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800 p-4 rounded-3xl"
          >
            Explore Courses
          </button>
        </div>
      </div>
      <BackgroundBeams />
    </div>
  );
}
