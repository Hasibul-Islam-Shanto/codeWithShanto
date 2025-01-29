import { Star } from "lucide-react";
import React from "react";

const RatingStar = ({ rating }: { rating: number }) => {
  return (
    <>
      <div className="flex items-center">
        {Array.from({ length: 5 }, (_, index) => (
          <Star
            key={index}
            className={`${
              index < rating ? "text-yellow-500" : "text-gray-300"
            } h-5 w-5`}
          />
        ))}
      </div>
    </>
  );
};

export default RatingStar;
