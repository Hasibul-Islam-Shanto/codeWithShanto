import CourseDetailsIntro from "./_components/CourseDetailsIntro";
import CourseDetails from "./_components/CourseDetails";
import Testimonials from "./_components/Testimonials";
import RelatedCourses from "./_components/RelatedCourses";
import { fetchCourseById } from "@/controller/course";
import ShowError from "@/components/show-error";

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
        <Testimonials />
        <RelatedCourses />
      </>
    );
  } catch (error) {
    return <ShowError error={error as Error} />;
  }
};
export default SingleCoursePage;
