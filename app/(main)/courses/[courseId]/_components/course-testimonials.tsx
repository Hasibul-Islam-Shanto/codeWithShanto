import SectionTitle from '@/components/section-title';
import ShowError from '@/components/show-error';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { fetchTestimonialsByCourseId } from '@/controller/testimonials';

import TestimonialCard from './course-testimonial-card';

const Testimonials = async ({ courseId }: { courseId: string }) => {
  try {
    const response = await fetchTestimonialsByCourseId(courseId);
    const testimonials = response.data;

    return (
      <>
        {testimonials?.length > 0 ? (
          <section className="pb-8 md:pb-12 lg:pb-24">
            <div className="container">
              <SectionTitle className="mb-6">Testimonials</SectionTitle>
              <Carousel
                opts={{
                  align: 'start',
                }}
                className="mx-auto w-full max-2xl:w-[90%]"
              >
                <CarouselPrevious />
                <CarouselNext />
                <CarouselContent className="py-4">
                  {testimonials.map(testimonial => (
                    <CarouselItem
                      key={testimonial._id}
                      className="md:basis-1/2 lg:basis-1/3"
                    >
                      <TestimonialCard testimonial={testimonial} />
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
            </div>
          </section>
        ) : (
          <div className="flex w-full items-center justify-center py-5">
            <span className="text-xl font-[500] text-slate-500">
              Currently no testimonials are available.
            </span>
          </div>
        )}
      </>
    );
  } catch (error) {
    return <ShowError error={error as Error} />;
  }
};

export default Testimonials;
