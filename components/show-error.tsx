import { Info } from "lucide-react";

const ShowError = ({ error }: { error: Error }) => {
  return (
    <div className="container mx-auto px-4">
      <div className="flex flex-col items-center justify-center min-h-[50vh] text-center">
        <Info className="w-12 h-12 text-red-500 mb-4" />
        <h2 className="text-2xl font-semibold mb-2">
          {error instanceof Error ? error.message : "Something went wrong"}
        </h2>
        <p className="text-gray-600">Unable to load data. Please try again.</p>
      </div>
    </div>
  );
};

export default ShowError;
