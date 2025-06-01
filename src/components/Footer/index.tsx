import type { FC } from 'react';

interface FooterProps {}

const Footer: FC<FooterProps> = () => {
  return (
    <footer className="flex items-center justify-center bg-main-2 py-4">
      <a
        className="text-white"
        href="https://www.shopify.com?utm_campaign=poweredby&utm_medium=shopify&utm_source=onlinestore"
      >
        © 2025, Labubu Powered by Shopify
      </a>
    </footer>
  );
};

export default Footer;
