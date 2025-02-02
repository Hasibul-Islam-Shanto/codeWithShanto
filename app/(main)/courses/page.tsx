import CourseCard from '@/components/course/course-card';
import ShowError from '@/components/show-error';
import { fetchCourseLists } from '@/controller/course';

import ActiveFilter from './_components/active-filter';
import FilterCourse from './_components/filter-course';
import FilterCourseMobile from './_components/filter-course-mobile';
import SearchCourse from './_components/search-course';
import SortCourse from './_components/sort-course';

const CoursesPage = async () => {
  try {
    const response = await fetchCourseLists();
    const courses = response.data;
    return (
      <section
        id="courses"
        className="container space-y-6 py-6 dark:bg-transparent"
      >
        <div className="flex flex-col items-baseline justify-between gap-4 border-b border-gray-200 pb-6 lg:flex-row">
          <SearchCourse />
          <div className="flex items-center justify-end gap-2 max-lg:w-full">
            <SortCourse />
            <FilterCourseMobile />
          </div>
        </div>

        <ActiveFilter
          filter={{
            categories: ['development'],
            price: ['free'],
            sort: '',
          }}
        />

        <section className="pb-24 pt-6">
          <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
            <FilterCourse />
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-2 lg:col-span-3 lg:grid-cols-3 xl:grid-cols-3">
              {courses.map(course => {
                return <CourseCard key={course._id} course={course} />;
              })}
            </div>
          </div>
        </section>
      </section>
    );
  } catch (error) {
    return <ShowError error={error as Error} />;
  }
};

export default CoursesPage;
