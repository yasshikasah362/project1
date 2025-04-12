import Image from 'next/image';

const features = [
  {
    src: '/images/fresh ingredients.jpg',
    title: '100% Fresh Ingredients',
    desc: 'All our meals are made with organic, fresh, and locally sourced produce.',
  },
  {
    src: '/images/nutrients.jpg',
    title: 'Balanced Nutrition',
    desc: 'Designed by nutritionists to keep your body energized and healthy.',
  },
  {
    src: '/images/delivery.jpg',
    title: 'Quick Delivery',
    desc: 'Get your healthy meals delivered straight to your doorstep.',
  },
];

export default function WhyChooseUs() {
  return (
    <section
      className="bg-gradient-to-br from-green-50 via-white to-green-100 py-20"
      id="products"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-green-800 mb-14">
          What Makes Us Different
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {features.map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center transform hover:-translate-y-1"
            >
              <div className="w-44 h-44 relative mb-6 rounded-full overflow-hidden border-4 border-green-100 shadow-sm">
                <Image
                  src={item.src}
                  alt={item.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-full"
                />
              </div>
              <h3 className="text-xl font-semibold text-green-700 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
