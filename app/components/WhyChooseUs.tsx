import Image from 'next/image';

const features = [
  {
    src: '/images/herbal.png',
    title: '100% Herbal Goods',
    desc: 'We have specially selected 100% herbal herbs from the mountains and forests to serve you.',
  },
  {
    src: '/images/premium.png',
    title: 'Premium Quality',
    desc: 'We create the best quality content through intensive research and research methodology.',
  },
  {
    src: '/images/lab.png',
    title: '100% Lab Tested & Certified',
    desc: 'All Products are 100% lab-tested and certified with the required certification.',
  },
  {
    src: '/images/effective.png',
    title: '100% Effective Products',
    desc: 'Our products are made in such a way that the ingredients present in them come into immediate effect with full energy and benefit you.',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-gradient-to-br from-green-50 via-white to-green-100 py-20" id="products">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-green-800 mb-14">What Makes Us Different</h2>
        <div className="flex flex-wrap justify-center gap-10">
          {features.map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center transform hover:-translate-y-1 max-w-xs"
            >
              <div className="w-44 h-44 relative mb-6 rounded-full overflow-hidden border-4 border-green-100 shadow-sm">
                <Image
                  src={item.src}
                  alt={item.title}
                  layout="intrinsic" // This will keep the image's original aspect ratio.
                  width={176} // Width in pixels
                  height={176} // Height in pixels
                  objectFit="cover" // This will ensure the image covers the area without being cut off.
                  className="rounded-full"
                />
              </div>
              <h3 className="text-xl font-semibold text-green-700 mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
