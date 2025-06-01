import type { FC } from 'react';
import RootLayout from '../../../layouts/RootLayout';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import Img1 from '../../../assets/images/img/illustration1.webp';
import Img2 from '../../../assets/images/img/illustration2.webp';
import Img3 from '../../../assets/images/img/illustration3.webp';
import Container from '../../../components/ui/Container';
import Item from '../../../components/Item/Item';
import { Input } from '../../../components/ui/Input/input';
import { Button } from '../../../components/ui/Button';

interface HomePageProps {}

const HomePage: FC<HomePageProps> = () => {
  return (
    <RootLayout>
      <div className="-my-8">
        <Carousel
          autoPlay
          interval={4000}
          infiniteLoop
          showThumbs={false}
          showStatus={false}
          swipeable
        >
          <img src={Img1} alt="1" />
          <img src={Img2} alt="2" />
          <img src={Img3} alt="3" />
        </Carousel>
        <Container>
          <section className="mt-12">
            <h2 className="text-main text-[36px] font-bold">
              Exciting macaron
            </h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
              <Item />
              <Item />
              <Item />
              <Item />
              <Item />
              <Item />
            </div>
          </section>
          <section className="mt-12">
            <h2 className="text-main text-[36px] font-bold">Have a seat</h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
              <Item />
              <Item />
              <Item />
              <Item />
              <Item />
              <Item />
            </div>
          </section>
          <section className="mt-12">
            <h2 className="text-main text-[36px] font-bold">Limited edition</h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
              <Item />
              <Item />
              <Item />
              <Item />
              <Item />
              <Item />
            </div>
          </section>
        </Container>
        <section className="bg-main-2 mt-12 py-10">
          <Container className="flex flex-col sm:flex-row  gap-20 justify-center">
            <div className="text-center sm:text-left text-white">
              <h2 className="text-white text-[40px] mb-4">Contact us</h2>
              <div className="flex flex-col gap-2">
                <span>inquirelabubu@gmail.com </span>
                <span>WhatsApp: 0505302659 </span>
                <span>United Arab Emirates, dubai</span>
              </div>
            </div>
            <form>
              <h2 className="text-white text-[40px] mb-4">
                Let's keep in touch
              </h2>
              <div className="flex gap-2">
                <Input
                  placeholder="Email"
                  type="email"
                  className="w-full text-white border-[1px] border-white"
                />
                <Button className="border-[1px] border-white">Send</Button>
              </div>
            </form>
          </Container>
        </section>
      </div>
    </RootLayout>
  );
};

export default HomePage;
