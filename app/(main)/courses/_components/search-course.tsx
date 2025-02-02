import { Search } from 'lucide-react';
import React from 'react';

import { Input } from '@/components/ui/input';

const SearchCourse = () => {
  return (
    <>
      <div className="relative h-10 max-lg:w-full">
        <Search className="absolute left-3 top-1/2 z-10 h-4 w-4 -translate-y-1/2 transform text-gray-500" />
        <Input
          type="text"
          placeholder="Search courses..."
          className="py-2 pl-8 pr-3 text-sm" // Add additional styling as needed
        />
      </div>
    </>
  );
};

export default SearchCourse;
