"use client";

import Link from "next/link";
import courseData from "../data/music_courses.json";
import { BackgroundGradient } from "./ui/background-gradient";

interface Course {
  id: number;
  title: string;
  slug: string;
  description: string;
  price: number;
  instructor: string;
  isFeatured: boolean;
}

export default function FeaturedCourses() {
  const featuredCourses = courseData.courses.filter(
    (courses: Course) => courses.isFeatured
  );

  return (
    <div className="py-16 mt-14 bg-gray-900">
      <div>
        <div className="text-center">
          <h2 className="text-base text-teal-500 font-semibold tracking-wide uppercase">
            FEATURED COURSES
          </h2>
          <p className="mt-3 text-3xl font-extrabold text-white sm:text-4xl">
            Learn with the best
          </p>
        </div>
      </div>
      <div className="mt-10">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {featuredCourses.map((course: Course) => (
            <div key={course.id} className="flex justify-center">
              <BackgroundGradient className="rounded-2xl h-full w-full max-w-sm p-6 sm:p-8 bg-white dark:bg-zinc-900 shadow-lg">
                <div className="flex flex-col items-center text-center">
                  <p className="text-xl font-semibold text-black mt-4 mb-2 dark:text-neutral-200">
                    {course.title}
                  </p>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">
                    {course.description}
                  </p>
                  <Link
                    href={`/courses/${course.slug}`}
                    className="mt-4 text-blue-500 hover:text-blue-700"
                  >
                    Learn More
                  </Link>
                </div>
              </BackgroundGradient>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-20 text-center">
        <Link
          href="/courses"
          className="text-slate-100 border rounded-md border-teal-500 p-2 bg-teal-950"
        >
          View All Courses
        </Link>
      </div>
    </div>
  );
}
