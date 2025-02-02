import { Suspense } from 'react';

import Loader from '@/components/loader';
import ShowError from '@/components/show-error';
import { fetchCourseById } from '@/controller/course';

import CourseDetails from './_components/course-details';
import CourseDetailsIntro from './_components/course-details-intro';
import RelatedCourses from './_components/related-courses';
import Testimonials from './_components/testimonials';

const SingleCoursePage = async ({
  params,
}: {
  params: { courseId: string };
}) => {
  try {
    const response = await fetchCourseById(params.courseId);
    const course = response.data;
    return (
      <>
        <CourseDetailsIntro course={course} />
        <CourseDetails course={course} />
        <Suspense
          fallback={
            <div className="flex items-center justify-center">
              <Loader />
            </div>
          }
        >
          <Testimonials courseId={course._id} />
        </Suspense>

        <RelatedCourses />
      </>
    );
  } catch (error) {
    return <ShowError error={error as Error} />;
  }
};
export default SingleCoursePage;
