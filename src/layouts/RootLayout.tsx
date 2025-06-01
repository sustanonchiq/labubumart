import type { FC, ReactNode } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout: FC<RootLayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main className="py-8">{children}</main>
      <Footer />
    </>
  );
};

export default RootLayout;
