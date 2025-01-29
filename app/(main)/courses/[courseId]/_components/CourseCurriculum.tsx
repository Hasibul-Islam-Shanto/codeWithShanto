import { Accordion } from "@/components/ui/accordion";
import { BookCheck, Clock10 } from "lucide-react";
import { fetchModulesByCourseId } from "@/controller/module";
import CourseModuleList from "./CourseModuleList";
import ShowError from "@/components/show-error";
import { Module } from "@/types/module";

const CourseCurriculum = async ({ courseId }: { courseId: string }) => {
  try {
    const response = await fetchModulesByCourseId(courseId);
    const modules = response.data;

    const totalChapters = modules.reduce(
      (total: number, currentValue: Module) => {
        return total + currentValue.lessonIds.length;
      },
      0
    );

    const totalHours = modules.reduce((total: number, currentValue: Module) => {
      return total + currentValue.duration;
    }, 0);

    const accordionItems = modules.map((module) => module.slug);

    return (
      <>
        <div className="flex gap-x-5 items-center justify-center flex-wrap mt-4 mb-6 text-gray-600 text-sm">
          <span className="flex items-center gap-1.5">
            <BookCheck className="w-4 h-4" />
            {totalChapters} Chapters
          </span>
          <span className="flex items-center gap-1.5">
            <Clock10 className="w-4 h-4" />
            {(totalHours / 60).toPrecision(2)} Hours
          </span>
        </div>

        {modules?.length > 0 ? (
          <Accordion
            defaultValue={accordionItems}
            type="multiple"
            className="w-full"
          >
            {modules?.map((module) => (
              <CourseModuleList key={module._id} module={module} />
            ))}
          </Accordion>
        ) : (
          <div className="w-full flex justify-center items-center py-5">
            <span className="text-slate-500 text-xl font-[500]">
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
