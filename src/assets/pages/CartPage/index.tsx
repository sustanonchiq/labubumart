import type { FC } from 'react';
import RootLayout from '../../../layouts/RootLayout';
import Container from '../../../components/ui/Container';
import CartItem from '../../../components/CartItem';
import { Button } from '../../../components/ui/Button';
import { Link } from 'react-router-dom';

interface CartPageProps {}

const CartPage: FC<CartPageProps> = () => {
  return (
    <RootLayout>
      <Container>
        <div className="flex justify-between items-center">
          <h2 className="text-[48px]">Products</h2>
          <Link to="/catalog" className="text-[20px]">
            Back to shop
          </Link>
        </div>
        <div className="grid grid-cols-[2fr_2fr_1fr] gap-10 mt-12 mb-6 text-[20px] border-b-[1px] border-[#cccccc] pb-8">
          <span>Product</span>
          <span>Amount</span>
          <span>Total</span>
        </div>
        <div className="flex flex-col gap-8">
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
        </div>
        <div className="flex flex-col w-max gap-2 mt-16">
          <div className="flex gap-3 text-[20px] md:text-[22px] items-center text-main">
            <h3 className="font-medium text-[24px] md:text-[28px]">
              Estimated total:
            </h3>
            Dhs. 75.00 AED
          </div>
          <Button className="text-[25px]">Check out</Button>
        </div>
      </Container>
    </RootLayout>
  );
};

export default CartPage;
