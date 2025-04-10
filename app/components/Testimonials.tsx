const testimonials = [
    'The food is fresh and always delicious!',
    'I’ve never felt healthier!',
    'Quick delivery and great customer service!',
  ];
  
  export default function Testimonials() {
    return (
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-12">What Our Customers Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((quote, i) => (
              <div key={i} className="bg-green-50 p-6 rounded shadow hover:shadow-md transition">
                <p className="italic mb-4">&quot;{quote}&quot;</p>
                <p className="font-semibold">- Customer {i + 1}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  