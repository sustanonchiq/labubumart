import type { FC } from 'react';
import { Button } from '../ui/Button';

interface ItemProps {}

const Item: FC<ItemProps> = () => {
  return (
    <div className="flex flex-col gap-2">
      <img
        src="https://labubu.ae/cdn/shop/files/IMG-0335.jpg?v=1746632492&width=533"
        alt=""
      />
      <h3 className="text-[16px]">
        THE MONSTERS - Exciting Macaron Vinyl Face Blind Box
      </h3>
      <span className="text-[20px]">Dhs. 375.00 AED</span>
      <Button className="w-full">Add to cart</Button>
    </div>
  );
};

export default Item;
