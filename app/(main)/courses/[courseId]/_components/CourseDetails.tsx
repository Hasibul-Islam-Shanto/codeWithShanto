import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import CourseOverview from "./CourseOverview";
import CourseCurriculum from "./CourseCurriculum";
import CourseInstructor from "./CourseInstructor";

const CourseDetails = () => {
  return (
    <>
      <section className="py-8 md:py-12 lg:py-24">
        <div className="container">
          <span className="bg-success px-4 py-0.5 rounded-full text-xs font-medium text-white inline-block">
            Development
          </span>
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold 2xl:text-5xl mt-3">
            Reactive Accelerator
          </h3>
          <p className="mt-3 text-gray-600 text-sm">
            Master React JS & Next JS
          </p>

          <div className="flex sm:items-center gap-5 flex-col sm:flex-row sm:gap-6 md:gap-20 mt-6">
            <div className="flex items-center gap-2">
              <Image
                className="w-[40px] h-[40px] rounded-full"
                height={40}
                width={40}
                src="/assets/images/profile.jpg"
                alt="Instructor-Image"
              />
              <p className="font-bold">Hasibul Islam Shanto</p>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <span className="text-success font-semibold">Last Updated: </span>
              <span>Feb 22, 2022</span>
            </div>
          </div>

          {/* Tab */}
          <div className="my-6">
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="grid w-full grid-cols-3 my-6 max-w-[768px]">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="curriculum">Carriculum</TabsTrigger>
                <TabsTrigger value="instructor">Instructor</TabsTrigger>
                {/* <TabsTrigger value="reviews">Reviews</TabsTrigger> */}
              </TabsList>
              <TabsContent value="overview">
                <CourseOverview />
              </TabsContent>
              <TabsContent value="curriculum">
                <CourseCurriculum />
              </TabsContent>
              <TabsContent value="instructor">
                <CourseInstructor />
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>
    </>
  );
};

export default CourseDetails;
