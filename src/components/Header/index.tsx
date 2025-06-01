import type { FC } from 'react';
import Container from '../ui/Container';
import { Input } from '../ui/Input/input';
import { Link } from 'react-router-dom';

interface HeaderProps {}

const Header: FC<HeaderProps> = () => {
  return (
    <header className="bg-main-2">
      <Container className="flex flex-col sm:flex-row items-center gap-4 justify-between py-4">
        <h1 className="text-main font-bold text-[24px] mr-4">LabubuMart</h1>
        <div className="flex w-full">
          <div className="relative w-full">
            <svg
              className="absolute left-[6px] top-1/2 -translate-y-1/2"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M21 21L16.65 16.65"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <Input className="pl-9 bg-white" />
          </div>
        </div>
        <nav className="flex gap-4 shrink-0 text-[16px]">
          <Link to="/">Home</Link>
          <Link to="/catalog">Categories</Link>
          <Link to="/cart">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.75"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-shopping-cart-icon lucide-shopping-cart"
            >
              <circle cx="8" cy="21" r="1" />
              <circle cx="19" cy="21" r="1" />
              <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
            </svg>
          </Link>
        </nav>
      </Container>
    </header>
  );
};

export default Header;
