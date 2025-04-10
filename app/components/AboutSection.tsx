import Image from 'next/image';

export default function AboutSection() {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
        <Image 
          src="/images/healthy-bowl.jpg" 
          alt="Healthy Bowl" 
          width={600}
          height={400}
          className="rounded-lg shadow-md w-full h-auto object-cover"
        />
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
  );
}
