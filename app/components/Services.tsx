const services = [
    ['Meal Plans', 'Tailored meals to match your diet and lifestyle.'],
    ['Diet Consultation', 'Speak with certified nutritionists.'],
    ['Weekly Deliveries', 'Get fresh meals delivered every week.'],
  ];
  
  export default function Services() {
    return (
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-12">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map(([title, desc], idx) => (
              <div key={idx} className="bg-white p-6 rounded shadow hover:shadow-md transition">
                <h4 className="text-xl font-semibold mb-2">{title}</h4>
                <p className="text-sm text-gray-600">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  