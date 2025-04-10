import Image from 'next/image';

const features = [
  {
    src: '/images/fresh-ingredients.jpg',
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
    <section className="container mx-auto px-4 py-16" id="products">
      <h2 className="text-3xl font-semibold text-center mb-12">Why Choose Us?</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        {features.map((item, idx) => (
          <div key={idx} className="flex flex-col items-center">
            <div className="w-40 h-40 mb-4 relative">
              <Image
                src={item.src}
                alt={item.title}
                width={160}
                height={160}
                className="object-contain rounded"
              />
            </div>
            <h5 className="text-xl font-semibold mb-2">{item.title}</h5>
            <p className="text-sm text-gray-600">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
