import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Tv, Video } from "lucide-react";
import { cn } from "@/lib/utils";
import { Module } from "@/types/module";

const CourseModuleList = ({ module }: { module: Module }) => {
  return (
    <>
      <AccordionItem className="border-none" value={module?.slug}>
        <AccordionTrigger>{module?.title}</AccordionTrigger>
        <AccordionContent>
          <div className="flex gap-x-5 items-center flex-wrap mt-4 mb-6 text-gray-600 text-sm">
            <span className="flex items-center gap-1.5">
              <Video className="w-4 h-4" />
              {module?.lessonIds?.length} Lessons
            </span>
          </div>

          <div className="space-y-3">
            {module?.lessonIds?.length > 0 ? (
              module?.lessonIds.map((lesson) => (
                <button
                  key={lesson?._id}
                  type="button"
                  className={cn(
                    "flex items-center gap-x-2 text-slate-500 text-sm font-[500]  transition-all hover:text-slate-600  w-full"
                  )}
                >
                  <div className="flex items-center gap-x-2">
                    <Tv size={16} className={cn("text-slate-500")} />
                    {lesson?.title}
                  </div>
                </button>
              ))
            ) : (
              <div className="w-full flex justify-center items-center py-5">
                <span className="text-slate-500 text-xl font-[500]">
                  Currently no lessons are available.
                </span>
              </div>
            )}
          </div>
        </AccordionContent>
      </AccordionItem>
    </>
  );
};

export default CourseModuleList;
