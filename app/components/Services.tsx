'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

const products = [
  {
    name: 'Shuabaarambh Pure Aloevera Gel',
    price: '₹200',
    image: '/images/product1.jpg',
  },
  {
    name: 'MadyNashtam Anti Addiction Drop',
    price: '₹400',
    image: '/images/product2.jpg',
  },
  {
    name: 'Super Health Combo',
    price: '₹3,600',
    image: '/images/product3.png',
  },
  {
    name: 'Shuabaarambh Panch Tulsi Drop',
    price: '₹200',
    image: '/images/product4.png',
  },
  {
    name: 'Shuabaarambh Anti Pain Relief Oil',
    price: '₹275',
    image: '/images/product5.png',
  },
  {
    name: 'Shuabaarambh Herbal Fresh Toothpaste',
    price: '₹125',
    image: '/images/product6.png',
  },
  {
    name: 'Pran Urja Powder',
    price: '₹3,600',
    image: '/images/product7.png',
  },
];

export default function ProductSlider() {
  return (
    <section className="py-20 bg-gradient-to-br from-green-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-green-800 mb-10 text-center">
          Our Products
        </h2>

        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          loop={true}
          pagination={{ clickable: true }}
          spaceBetween={24}
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-10"
        >
          {products.map((product, idx) => (
            <SwiperSlide key={idx}>
              <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 border border-gray-200 overflow-hidden flex flex-col">
                <div className="w-full h-64 bg-white flex items-center justify-center p-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-contain"
                  />
                </div>
                <div className="p-5 text-center">
                  <h4 className="text-lg font-semibold text-green-800">{product.name}</h4>
                  <p className="text-green-800 font-bold text-base mt-1">{product.price}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
