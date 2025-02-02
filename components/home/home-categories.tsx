import { ArrowRightIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { fetchCategoryLists } from '@/controller/category';

import SectionTitle from '../section-title';
import ShowError from '../show-error';

const HomeCategories = async () => {
  try {
    const response = await fetchCategoryLists();
    const categories = response.data;
    return (
      <>
        <section
          id="categories"
          className="container space-y-6 py-8 md:py-12 lg:py-24"
        >
          <div className="flex items-center justify-between">
            <SectionTitle>Categories</SectionTitle>

            <Link
              href={''}
              className="flex items-center gap-1 text-sm font-medium hover:opacity-80"
            >
              Browse All <ArrowRightIcon className="h-4 w-4" />
            </Link>
          </div>
          <div className="mx-auto grid grid-cols-2 justify-center gap-4 md:grid-cols-3 2xl:grid-cols-4">
            {categories.map(category => {
              return (
                <Link
                  href=""
                  key={category._id}
                  className="relative overflow-hidden rounded-lg border bg-background p-2 transition-all duration-500 ease-in-out hover:scale-105"
                >
                  <div className="flex flex-col items-center justify-between gap-4 rounded-md p-6">
                    <Image
                      src={`/assets/images/categories/${category.thumbnail}`}
                      alt={category.title}
                      width={100}
                      height={100}
                    />
                    <h3 className="font-bold">{category.title}</h3>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>
      </>
    );
  } catch (error) {
    return <ShowError error={error as Error} />;
  }
};

export default HomeCategories;
