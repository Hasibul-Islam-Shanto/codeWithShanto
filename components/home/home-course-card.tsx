import { ArrowRight, BookOpen } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { formatPrice } from '@/lib/format-price';
import { Courses } from '@/types/course';

import { Button } from '../ui/button';

const HomeCourseCard = ({ course }: { course: Courses }) => {
  return (
    <>
      <Link href={`/courses/${course._id}`}>
        <div className="group h-full overflow-hidden rounded-lg border p-3 transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-sm">
          <div className="relative aspect-video w-full overflow-hidden rounded-md">
            <Image
              src={`/assets/images/courses/${course?.thumbnail}`}
              alt={'course'}
              className="object-cover"
              fill
            />
          </div>
          <div className="flex flex-col pt-2">
            <div className="line-clamp-2 text-lg font-medium group-hover:text-sky-700 md:text-base">
              {course?.title}
            </div>
            <p className="text-xs text-muted-foreground">
              {course?.category?.title}
            </p>
            <div className="my-3 flex items-center gap-x-2 text-sm md:text-xs">
              <div className="flex items-center gap-x-1 text-slate-500">
                <div>
                  <BookOpen className="w-4" />
                </div>
                <span>{course?.modules?.length} Chapters</span>
              </div>
            </div>

            <div className="mt-4 flex items-center justify-between">
              <p className="text-md font-medium text-slate-700 md:text-sm">
                {formatPrice(course?.price)}
                49
              </p>

              <Button
                variant="ghost"
                className="h-7 gap-1 text-xs text-sky-700"
              >
                Enroll
                <ArrowRight className="w-3" />
              </Button>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default HomeCourseCard;
