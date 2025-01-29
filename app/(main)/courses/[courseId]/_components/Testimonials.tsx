import SectionTitle from "@/components/section-title";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import TestimonialCard from "./TestimonialCard";
import { fetchTestimonialsByCourseId } from "@/controller/testimonials";
import ShowError from "@/components/show-error";

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
                  align: "start",
                }}
                className="max-2xl:w-[90%] w-full mx-auto"
              >
                <CarouselPrevious />
                <CarouselNext />
                <CarouselContent className="py-4">
                  {testimonials.map((testimonial) => (
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
          <div className="w-full flex justify-center items-center py-5">
            <span className="text-slate-500 text-xl font-[500]">
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
