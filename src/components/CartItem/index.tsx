import type { FC } from 'react';
import { Input } from '../ui/Input/input';

interface CartItemProps {}

const CartItem: FC<CartItemProps> = () => {
  return (
    <div className="flex flex-col md:grid grid-cols-[2fr_2fr_1fr] gap-10 items-center pb-8 border-b-[1px] border-[#cccccc]">
      <div className="flex flex-col md:flex-row items-center gap-4">
        <img
          src="https://labubu.ae/cdn/shop/files/IMG_0341.jpg?v=1746846046&width=300"
          className="w-[200px]"
        />
        <div className="flex flex-col gap-2 text-main">
          <h3 className="text-[18px]">
            THE MONSTERS - Exciting Macaron Vinyl Face Blind Box
          </h3>
          <span>Dhs. 75.00</span>
        </div>
      </div>
      <div className="flex items-center w-max h-max overflow-hidden text-center gap-1 leading-none rounded-[20px] border-[1px] border-main">
        <div className="flex items-center justify-center p-4 text-main cursor-pointer hover:bg-[#dddddd]">
          -
        </div>
        <Input
          type="text"
          value={1}
          className="max-w-[30px] text-center !p-0 focus:border-none"
        />
        <div className="flex items-center justify-center p-4 text-main cursor-pointer hover:bg-[#dddddd]">
          +
        </div>
      </div>
      <div className="text-[24px] text-main">Dhs. 75.00</div>
    </div>
  );
};

export default CartItem;
