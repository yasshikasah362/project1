
import Hero from './Hero';

export default function Home() {
  return (
    <>
      <Hero/>

      

    

      {/* Why Choose Us */}
      <section className="container mx-auto px-4 py-16" id="products">
        <h2 className="text-3xl font-semibold text-center mb-12">Why Choose Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {[
            {
              src: '/images/fresh ingredients.jpg',
              title: '100% Fresh Ingredients',
              desc: 'All our meals are made with organic, fresh, and locally sourced produce.',
            },
            {
              src: '/images/Nutrients.jpg',
              title: 'Balanced Nutrition',
              desc: 'Designed by nutritionists to keep your body energized and healthy.',
            },
            {
              src: '/images/delivery.jpg',
              title: 'Quick Delivery',
              desc: 'Get your healthy meals delivered straight to your doorstep.',
            },
          ].map((item, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <div className="w-40 h-40 mb-4">
                <img src={item.src} alt={item.title} className="w-full h-full object-contain rounded" />
              </div>
              <h5 className="text-xl font-semibold mb-2">{item.title}</h5>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
          <img src="/images/healthy bowl.jpg" alt="Healthy Bowl" className="rounded-lg shadow-md w-full h-auto object-cover" />
          <div>
            <h2 className="text-3xl font-bold mb-4">About Our Mission</h2>
            <p className="mb-6 text-gray-700">
              At Healthy Lifestyle Food, we believe in nourishing your body with the best nature has to offer.
              Our mission is to make healthy eating simple, delicious, and accessible to everyone.
            </p>
            <a href="#contact" className="inline-block bg-green-600 text-white px-6 py-3 rounded shadow hover:bg-green-700 transition">
              Join Our Journey
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-12">What Our Customers Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {['The food is fresh and always delicious!', 'I’ve never felt healthier!', 'Quick delivery and great customer service!'].map((quote, i) => (
              <div key={i} className="bg-green-50 p-6 rounded shadow hover:shadow-md transition">
                <p className="italic mb-4">"{quote}"</p>
                <p className="font-semibold">- Customer {i + 1}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-12">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              ['Meal Plans', 'Tailored meals to match your diet and lifestyle.'],
              ['Diet Consultation', 'Speak with certified nutritionists.'],
              ['Weekly Deliveries', 'Get fresh meals delivered every week.'],
            ].map(([title, desc], idx) => (
              <div key={idx} className="bg-white p-6 rounded shadow hover:shadow-md transition">
                <h4 className="text-xl font-semibold mb-2">{title}</h4>
                <p className="text-sm text-gray-600">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="text-center py-16 bg-green-600 text-white" id="contact">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Ready to Live Healthier?</h2>
          <p className="mb-6">Subscribe to get weekly healthy food plans and lifestyle tips.</p>
          <form className="max-w-lg mx-auto">
            <input
              type="email"
              className="w-full p-3 mb-4 rounded text-gray-800"
              placeholder="Enter your email"
              required
            />
            <button
              type="submit"
              className="w-full bg-white text-green-600 font-semibold py-3 rounded hover:bg-green-100 transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-6 max-w-3xl mx-auto">
            <div>
              <h4 className="font-semibold text-lg mb-1">Where do you source ingredients from?</h4>
              <p className="text-gray-600">We use local farms and certified organic suppliers for the freshest produce.</p>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-1">Can I customize my meals?</h4>
              <p className="text-gray-600">Yes! We offer customizable options to fit your dietary needs.</p>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-1">Is there a subscription required?</h4>
              <p className="text-gray-600">No subscription is required. You can order anytime, but subscriptions offer perks.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center py-6">
        <div className="container mx-auto px-4">
          <p>&copy; {new Date().getFullYear()} Healthy Lifestyle Food. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}
