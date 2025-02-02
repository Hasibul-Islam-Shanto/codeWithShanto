import Image from 'next/image';
import Link from 'next/link';

import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Course } from '@/types/course';

const CourseDetailsIntro = ({ course }: { course: Course }) => {
  return (
    <>
      <div className="grainy overflow-x-hidden">
        <section className="pt-12 sm:pt-16">
          <div className="container">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="mx-auto max-w-2xl text-center">
                <h1 className="font-inter px-6 text-lg text-gray-600">
                  {course?.subtitle}
                </h1>
                <p className="font-pj mt-5 text-4xl font-bold leading-tight text-gray-900 sm:text-5xl sm:leading-tight lg:text-6xl lg:leading-tight">
                  <span className="relative inline-flex sm:inline">
                    <span className="absolute inset-0 h-full w-full bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] opacity-30 blur-lg filter"></span>
                    <span className="relative">{course?.title} </span>
                  </span>
                </p>

                <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
                  <Link href="" className={cn(buttonVariants({ size: 'lg' }))}>
                    Enroll Now
                  </Link>
                  <Link
                    href=""
                    className={cn(
                      buttonVariants({ variant: 'outline', size: 'lg' }),
                    )}
                  >
                    See Intro
                  </Link>
                </div>
              </div>
            </div>

            <div className="mt-6 pb-12">
              <div className="relative">
                <div className="absolute inset-0 h-2/3"></div>
                <div className="relative mx-auto">
                  <div className="lg:mx-auto lg:max-w-3xl">
                    <Image
                      className="w-full rounded-lg"
                      width={768}
                      height={463}
                      src={`/assets/images/courses/${course?.thumbnail}`}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CourseDetailsIntro;
