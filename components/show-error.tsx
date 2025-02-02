import { Info } from 'lucide-react';

const ShowError = ({ error }: { error: Error }) => {
  return (
    <div className="container mx-auto px-4">
      <div className="flex min-h-[50vh] flex-col items-center justify-center text-center">
        <Info className="mb-4 h-12 w-12 text-red-500" />
        <h2 className="mb-2 text-2xl font-semibold">
          {error instanceof Error ? error.message : 'Something went wrong'}
        </h2>
        <p className="text-gray-600">Unable to load data. Please try again.</p>
      </div>
    </div>
  );
};

export default ShowError;
