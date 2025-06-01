import { useState, type FC } from 'react';
import RootLayout from '../../../layouts/RootLayout';
import Item from '../../../components/Item/Item';
import { Input } from '../../../components/ui/Input/input';
import { Button } from '../../../components/ui/Button';
import { Select } from '../../../components/ui/Select';

interface CatalogPageProps {}

const CatalogPage: FC<CatalogPageProps> = () => {
  const [selectedFilter, setSelectedFilter] = useState('');
  console.log(selectedFilter);

  return (
    <RootLayout>
      <div className="flex flex-col md:flex-row">
        <aside className="flex flex-col gap-6 p-10 min-w-[260px]">
          {/* <h4 className="text-[18px]">Filters</h4> */}
          <div>
            <h4 className="text-[20px] mb-2">Availability</h4>
            <label className="flex gap-2 items-center text-[16px]">
              <input type="checkbox" className="w-[16px] h-[16px]" />
              In stock
            </label>
            <label className="flex gap-2 items-center text-[16px]">
              <input type="checkbox" className="w-[16px] h-[16px]" />
              Out of stock
            </label>
          </div>
          <div>
            <h4 className="text-[20px] mb-2">Sort by:</h4>
            <Select
              options={[
                { value: 'featured', label: 'Featured' },
                { value: 'bestSelling', label: 'Best selling' },
                { value: 'a-z', label: 'Alphabetically, A-Z' },
                { value: 'z-a', label: 'Alphabetically, Z-A' },
                { value: 'lowToHigh', label: 'Price, low to high' },
                { value: 'highToLow', label: 'Price, high to low' },
                { value: 'oldToNew', label: 'Date, old to new' },
                { value: 'newToOld', label: 'Date, new to old' },
              ]}
              onChange={setSelectedFilter}
            />
          </div>
          <div>
            <h4 className="mb-2 text-[20px] mb-2">Price</h4>
            <div className="flex items-center gap-2">
              <Input className="p-2 text-[14px] border-main-2 border-[1px] focus:!border-b-[1px]" />
              to
              <Input className="p-2 text-[14px] border-main-2 border-[1px] focus:!border-b-[1px]" />
            </div>
          </div>
          <Button>Применить</Button>
        </aside>
        <div className="pl-8">
          <h2 className="text-[48px] w-full">Products</h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 xl:grid-cols-4 pr-8">
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
          </div>
        </div>
      </div>
      <div className="flex items-center gap-4 mt-8 mx-auto w-max text-main">
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.75"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-chevron-left-icon lucide-chevron-left cursor-pointer"
          >
            <path d="m15 18-6-6 6-6" />
          </svg>
        </span>
        <span className="hover:underline cursor-pointer">1</span>
        <span className="hover:underline cursor-pointer">2</span>
        <span className="text-main-2 underline">3</span>
        <span className="hover:underline cursor-pointer">4</span>
        <span className="hover:underline cursor-pointer">5</span>
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.75"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-chevron-right-icon lucide-chevron-right cursor-pointer"
          >
            <path d="m9 18 6-6-6-6" />
          </svg>
        </span>
      </div>
    </RootLayout>
  );
};

export default CatalogPage;
