export default function FAQ() {
    return (
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
    );
  }
  