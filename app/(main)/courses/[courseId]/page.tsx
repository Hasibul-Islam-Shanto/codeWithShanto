import CourseDetailsIntro from "./_components/CourseDetailsIntro";
import CourseDetails from "./_components/CourseDetails";
import Testimonials from "./_components/Testimonials";
import RelatedCourses from "./_components/RelatedCourses";

const SingleCoursePage = () => {
  return (
    <>
      <CourseDetailsIntro />
      <CourseDetails />
      <Testimonials />
      <RelatedCourses />
    </>
  );
};
export default SingleCoursePage;
