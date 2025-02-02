import { BookCheck, Clock10 } from 'lucide-react';

import ShowError from '@/components/show-error';
import { Accordion } from '@/components/ui/accordion';
import { fetchModulesByCourseId } from '@/controller/module';
import { Module } from '@/types/module';

import CourseModuleList from './course-module-list';

const CourseCurriculum = async ({ courseId }: { courseId: string }) => {
  try {
    const response = await fetchModulesByCourseId(courseId);
    const modules = response.data;

    const totalChapters = modules.reduce(
      (total: number, currentValue: Module) => {
        return total + currentValue.lessonIds.length;
      },
      0,
    );

    const totalHours = modules.reduce((total: number, currentValue: Module) => {
      return total + currentValue.duration;
    }, 0);

    const accordionItems = modules.map(module => module.slug);

    return (
      <>
        <div className="mb-6 mt-4 flex flex-wrap items-center justify-center gap-x-5 text-sm text-gray-600">
          <span className="flex items-center gap-1.5">
            <BookCheck className="h-4 w-4" />
            {totalChapters} Chapters
          </span>
          <span className="flex items-center gap-1.5">
            <Clock10 className="h-4 w-4" />
            {(totalHours / 60).toPrecision(2)} Hours
          </span>
        </div>

        {modules?.length > 0 ? (
          <Accordion
            defaultValue={accordionItems}
            type="multiple"
            className="w-full"
          >
            {modules?.map(module => (
              <CourseModuleList key={module._id} module={module} />
            ))}
          </Accordion>
        ) : (
          <div className="flex w-full items-center justify-center py-5">
            <span className="text-xl font-[500] text-slate-500">
              Currently no modules are available.
            </span>
          </div>
        )}
      </>
    );
  } catch (error) {
    return <ShowError error={error as Error} />;
  }
};

export default CourseCurriculum;
