import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";
import SectionTitle from "../section-title";
import HomeCourseCard from "./HomeCourseCard";
import { fetchCourseLists } from "@/controller/course";
import ShowError from "../show-error";

const HomeCourses = async () => {
  try {
    const response = await fetchCourseLists();
    const courses = response.data;
    return (
      <>
        <section
          id="courses"
          className="container space-y-6   md:py-12 lg:py-24"
        >
          <div className="flex items-center justify-between">
            <SectionTitle>Courses</SectionTitle>
            <Link
              href={"/courses"}
              className=" text-sm font-medium  hover:opacity-80 flex items-center gap-1"
            >
              Browse All <ArrowRightIcon className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-4">
            {courses?.map((course) => {
              return <HomeCourseCard key={course._id} course={course} />;
            })}
          </div>
        </section>
      </>
    );
  } catch (error) {
    return <ShowError error={error as Error} />;
  }
};

export default HomeCourses;
