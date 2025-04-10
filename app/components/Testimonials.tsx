'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';

const testimonials = [
  {
    quote: 'The food is fresh and always delicious!',
    name: 'Abha',
    title: 'Fitness Coach',
    image: '/images/test1.jpg',
  },
  {
    quote: 'I’ve never felt healthier!',
    name: 'Riya',
    title: 'Yoga Instructor',
    image: '/images/test2.jpg',
  },
  {
    quote: 'Quick delivery and great customer service!',
    name: 'Shreya',
    title: 'Nutritionist',
    image: '/images/test3.jpg',
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Testimonials() {
  return (
    <section className="bg-gradient-to-b from-white to-green-50 py-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.h2
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-4xl font-bold text-gray-800 mb-16"
        >
          What Our Customers Say 💬
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {testimonials.map((item, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="bg-white rounded-3xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300"
            >
              <div className="flex justify-center mb-4">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={72}
                  height={72}
                  className="rounded-full object-cover border-4 border-green-100"
                />
              </div>
              <p className="text-gray-700 italic mb-6 text-lg leading-relaxed">
                “{item.quote}”
              </p>
              <h4 className="text-green-700 font-semibold text-lg">{item.name}</h4>
              <p className="text-sm text-gray-500">{item.title}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
