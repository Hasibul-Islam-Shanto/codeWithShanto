import Image from 'next/image';
import { Suspense } from 'react';

import Loader from '@/components/loader';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { formattedDate } from '@/lib/helper';
import { Course } from '@/types/course';

import CourseCurriculum from './course-curriculum';
import CourseInstructor from './course-instructor';
import CourseOverview from './course-overview';

const CourseDetails = ({ course }: { course: Course }) => {
  return (
    <>
      <section className="py-8 md:py-12 lg:py-24">
        <div className="container">
          <span className="inline-block rounded-full bg-success px-4 py-0.5 text-xs font-medium text-white">
            {course?.category?.title}
          </span>
          <h3 className="mt-3 text-2xl font-bold md:text-3xl lg:text-4xl 2xl:text-5xl">
            {course?.title}
          </h3>
          <p className="mt-3 text-sm text-gray-600">{course?.subtitle}</p>

          <div className="mt-6 flex flex-col gap-5 sm:flex-row sm:items-center sm:gap-6 md:gap-20">
            <div className="flex items-center gap-2">
              <Image
                className="h-[40px] w-[40px] rounded-full"
                height={40}
                width={40}
                src="/assets/images/profile.jpg"
                alt="Instructor-Image"
              />
              <p className="font-bold">{`${course?.instructor?.firstName} ${course?.instructor?.lastName}`}</p>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <span className="font-semibold text-success">Last Updated: </span>
              <span>{formattedDate(course?.modifiedOn)}</span>
            </div>
          </div>

          {/* Tab */}
          <div className="my-6">
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="my-6 grid w-full max-w-[768px] grid-cols-3">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="curriculum">Carriculum</TabsTrigger>
                <TabsTrigger value="instructor">Instructor</TabsTrigger>
                {/* <TabsTrigger value="reviews">Reviews</TabsTrigger> */}
              </TabsList>
              <TabsContent value="overview">
                <CourseOverview course={course} />
              </TabsContent>
              <TabsContent value="curriculum">
                <Suspense
                  fallback={
                    <div className="flex items-center justify-center">
                      <Loader />
                    </div>
                  }
                >
                  <CourseCurriculum courseId={course?._id} />
                </Suspense>
              </TabsContent>

              <TabsContent value="instructor">
                <Suspense
                  fallback={
                    <div className="flex items-center justify-center">
                      <Loader />
                    </div>
                  }
                >
                  <CourseInstructor userId={course?.instructor?._id} />
                </Suspense>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>
    </>
  );
};

export default CourseDetails;
