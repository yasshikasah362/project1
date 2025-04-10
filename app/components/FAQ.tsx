import { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const faqList = [
  {
    question: 'Where do you source ingredients from?',
    answer: 'We use local farms and certified organic suppliers for the freshest produce.',
  },
  {
    question: 'Can I customize my meals?',
    answer: 'Yes! We offer customizable options to fit your dietary needs.',
  },
  {
    question: 'Is there a subscription required?',
    answer: 'No subscription is required. You can order anytime, but subscriptions offer perks.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-white to-green-50" id="faq">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-4xl font-bold text-center text-green-700 mb-12">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqList.map((faq, i) => (
            <div
              key={i}
              className="bg-white border border-green-100 shadow-md rounded-lg transition-all duration-300"
            >
              <button
                className="w-full flex justify-between items-center px-6 py-4 text-left text-green-800 font-semibold text-lg focus:outline-none hover:bg-green-50 transition"
                onClick={() => toggleFAQ(i)}
              >
                {faq.question}
                {openIndex === i ? (
                  <FaChevronUp className="text-green-600" />
                ) : (
                  <FaChevronDown className="text-green-600" />
                )}
              </button>
              {openIndex === i && (
                <div className="px-6 pb-4 text-gray-600 animate-fadeIn">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
