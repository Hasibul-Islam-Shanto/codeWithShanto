import { ArrowRight, BookOpen } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import SectionTitle from '@/components/section-title';
import { Button } from '@/components/ui/button';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { formatPrice } from '@/lib/format-price';

const courses = [
  {
    id: 1,
    title: 'Design',
    thumbnail: '/assets/images/categories/design.jpg',
  },

  {
    id: 3,
    title: 'Development',
    thumbnail: '/assets/images/categories/development.jpg',
  },
  {
    id: 4,
    title: 'Marketing',
    thumbnail: '/assets/images/categories/marketing.jpg',
  },
  {
    id: 5,
    title: 'IT & Software',
    thumbnail: '/assets/images/categories/it_software.jpg',
  },
  {
    id: 6,
    title: 'Personal Development',
    thumbnail: '/assets/images/categories/personal_development.jpg',
  },
  {
    id: 7,
    title: 'Business',
    thumbnail: '/assets/images/categories/business.jpg',
  },
  {
    id: 8,
    title: 'Photography',
    thumbnail: '/assets/images/categories/photography.jpg',
  },
  {
    id: 9,
    title: 'Music',
    thumbnail: '/assets/images/categories/music.jpg',
  },
];

const RelatedCourses = () => {
  return (
    <>
      <section className="">
        <div className="container">
          <SectionTitle className="mb-6">Related Courses</SectionTitle>
          <Carousel
            opts={{
              align: 'start',
            }}
            className="mx-auto w-full max-2xl:w-[90%]"
          >
            <CarouselPrevious />
            <CarouselNext />
            <CarouselContent>
              {courses.map(course => (
                <CarouselItem
                  key={course.id}
                  className="md:basis-1/2 lg:basis-1/3"
                >
                  <Link href={`/courses/${course.id}`}>
                    <div className="group h-full overflow-hidden rounded-lg border p-3 transition hover:shadow-sm">
                      <div className="relative aspect-video w-full overflow-hidden rounded-md">
                        <Image
                          src="/assets/images/courses/course_1.jpeg"
                          alt={'course'}
                          className="object-cover"
                          fill
                        />
                      </div>
                      <div className="flex flex-col pt-2">
                        <div className="line-clamp-2 text-lg font-medium group-hover:text-sky-700 md:text-base">
                          Reactive Accelerator
                        </div>
                        <p className="text-xs text-muted-foreground">
                          Development
                        </p>
                        <div className="my-3 flex items-center gap-x-2 text-sm md:text-xs">
                          <div className="flex items-center gap-x-1 text-slate-500">
                            <div>
                              <BookOpen className="w-4" />
                            </div>
                            <span>4 Chapters</span>
                          </div>
                        </div>

                        <div className="mt-4 flex items-center justify-between">
                          <p className="text-md font-medium text-slate-700 md:text-sm">
                            {formatPrice(49)}
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
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </section>
    </>
  );
};

export default RelatedCourses;
