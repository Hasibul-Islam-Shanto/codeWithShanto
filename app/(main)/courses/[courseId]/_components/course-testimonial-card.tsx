import Image from 'next/image';
import React from 'react';

import RatingStar from '@/components/rating-star';
import { Testimonials } from '@/types/testimonials';

const TestimonialCard = ({ testimonial }: { testimonial: Testimonials }) => {
  return (
    <>
      <div className="sm:break-inside-avoid">
        <blockquote className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
          <div className="flex items-center gap-4">
            <Image
              alt=""
              src="/assets/images/profile.jpg"
              width="56"
              height="56"
              className="size-14 rounded-full object-cover"
            />
            <div>
              <p className="mt-0.5 text-lg font-medium text-gray-900">
                {`${testimonial?.user?.first_name} ${testimonial?.user?.last_name}`}
              </p>
              <RatingStar rating={testimonial?.rating} />
            </div>
          </div>
          <p className="mt-4 text-gray-700">{testimonial?.content}</p>
        </blockquote>
      </div>
    </>
  );
};

export default TestimonialCard;
