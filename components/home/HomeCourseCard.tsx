import { formatPrice } from "@/lib/formatPrice";
import { ArrowRight, BookOpen } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { Courses } from "@/types/course";

const HomeCourseCard = ({ course }: { course: Courses }) => {
  return (
    <>
      <Link href={`/courses/${course._id}`}>
        <div className="group hover:shadow-sm overflow-hidden border rounded-lg p-3 h-full hover:scale-105 transition-all duration-500 ease-in-out">
          <div className="relative w-full aspect-video rounded-md overflow-hidden">
            <Image
              src={`/assets/images/courses/${course?.thumbnail}`}
              alt={"course"}
              className="object-cover"
              fill
            />
          </div>
          <div className="flex flex-col pt-2">
            <div className="text-lg md:text-base font-medium group-hover:text-sky-700 line-clamp-2">
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

            <div className="flex items-center justify-between mt-4">
              <p className="text-md md:text-sm font-medium text-slate-700">
                {formatPrice(course?.price)}
                49
              </p>

              <Button
                variant="ghost"
                className="text-xs text-sky-700 h-7 gap-1"
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
