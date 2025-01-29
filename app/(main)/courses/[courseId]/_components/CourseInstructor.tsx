import ShowError from "@/components/show-error";
import { fetchUserById } from "@/controller/user";
import { MessageSquare, Presentation, Star, UsersRound } from "lucide-react";
import Image from "next/image";
import React from "react";

const CourseInstructor = async ({ userId }: { userId: string }) => {
  try {
    const response = await fetchUserById(userId);
    const instructorDetails = response.data;
    return (
      <>
        <div className="bg-gray-50 rounded-md p-8">
          <div className="md:flex md:gap-x-5 mb-8">
            <div className="h-[310px] w-[270px] max-w-full  flex-none rounded mb-5 md:mb-0">
              <Image
                src="/assets/images/profile.jpg"
                alt="Instrctor-Image"
                height={310}
                width={270}
                className="w-full h-full object-cover rounded"
              />
            </div>
            <div className="flex-1">
              <div className="max-w-[300px]">
                <h4 className="text-[34px] font-bold leading-[51px]">
                  {`${instructorDetails?.firstName} ${instructorDetails?.lastName}`}
                </h4>
                <div className="text-gray-600 font-medium mb-6">
                  {instructorDetails?.designation}
                </div>
                <ul className="list space-y-4">
                  <li className="flex items-center space-x-3">
                    <Presentation className="text-gray-600" />
                    <div>{instructorDetails?.courses} Courses</div>
                  </li>
                  <li className="flex space-x-3">
                    <UsersRound className="text-gray-600" />
                    <div>{instructorDetails?.enrollments} Student Learned</div>
                  </li>
                  <li className="flex space-x-3">
                    <MessageSquare className="text-gray-600" />
                    <div>{instructorDetails?.reviews} Reviews</div>
                  </li>
                  <li className="flex space-x-3">
                    <Star className="text-gray-600" />
                    <div>{instructorDetails?.avgRating} Average Rating</div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <p className="text-gray-600">{instructorDetails?.bio}</p>
        </div>
      </>
    );
  } catch (error) {
    return <ShowError error={error as Error} />;
  }
};

export default CourseInstructor;
