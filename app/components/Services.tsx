const services = [
    ['Meal Plans', 'Tailored meals to match your diet and lifestyle.'],
    ['Diet Consultation', 'Speak with certified nutritionists.'],
    ['Weekly Deliveries', 'Get fresh meals delivered every week.'],
  ];
  
  export default function Services() {
    return (
      <section className="py-20 bg-gradient-to-br from-green-50 to-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-green-800 mb-14 tracking-tight">
            Our Services
          </h2>
          <div className="grid gap-10 md:grid-cols-3">
            {services.map(([title, desc], idx) => (
              <div
                key={idx}
                className="group relative bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-transparent hover:border-green-400"
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-green-100 via-white to-green-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>
                <div className="relative z-10">
                  <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-green-100 flex items-center justify-center text-green-600 text-xl font-bold group-hover:scale-110 transition-transform duration-300">
                    {title.charAt(0)}
                  </div>
                  <h4 className="text-xl font-semibold mb-2 text-green-800">{title}</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  