import { Tv, Video } from 'lucide-react';

import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { cn } from '@/lib/utils';
import { Module } from '@/types/module';

const CourseModuleList = ({ module }: { module: Module }) => {
  return (
    <>
      <AccordionItem className="border-none" value={module?.slug}>
        <AccordionTrigger>{module?.title}</AccordionTrigger>
        <AccordionContent>
          <div className="mb-6 mt-4 flex flex-wrap items-center gap-x-5 text-sm text-gray-600">
            <span className="flex items-center gap-1.5">
              <Video className="h-4 w-4" />
              {module?.lessonIds?.length} Lessons
            </span>
          </div>

          <div className="space-y-3">
            {module?.lessonIds?.length > 0 ? (
              module?.lessonIds.map(lesson => (
                <button
                  key={lesson?._id}
                  type="button"
                  className={cn(
                    'flex w-full items-center gap-x-2 text-sm font-[500] text-slate-500 transition-all hover:text-slate-600',
                  )}
                >
                  <div className="flex items-center gap-x-2">
                    <Tv size={16} className={cn('text-slate-500')} />
                    {lesson?.title}
                  </div>
                </button>
              ))
            ) : (
              <div className="flex w-full items-center justify-center py-5">
                <span className="text-xl font-[500] text-slate-500">
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
