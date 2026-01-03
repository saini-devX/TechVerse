const About = () => {
  return (
    <section className="px-6 py-16 bg-gray-50 mt-10 text-gray-800">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4 text-gray-900">About Us</h1>
        <p className="text-lg text-gray-600 mb-12">
          Welcome to <span className="font-semibold text-blue-500">TechCart</span>, 
          your one-stop destination for premium electronics and gadgets. 
          We’re passionate about bringing you the latest and most reliable tech 
          products with an unmatched shopping experience.
        </p>

        <div className="grid md:grid-cols-3 gap-10 text-left">
          <div className="bg-white shadow-md rounded-2xl p-6 hover:shadow-lg transition">
            <h2 className="text-xl font-semibold mb-3 text-blue-500">Our Mission</h2>
            <p className="text-gray-600">
              To deliver top-quality technology products at competitive prices, 
              empowering our customers to live smarter, more connected lives.
            </p>
          </div>

          <div className="bg-white shadow-md rounded-2xl p-6 hover:shadow-lg transition">
            <h2 className="text-xl font-semibold mb-3 text-blue-500">Our Vision</h2>
            <p className="text-gray-600">
              We aim to become the most trusted name in online electronics retail, 
              known for innovation, reliability, and excellent customer service.
            </p>
          </div>

          <div className="bg-white shadow-md rounded-2xl p-6 hover:shadow-lg transition">
            <h2 className="text-xl font-semibold mb-3 text-blue-500">Our Values</h2>
            <p className="text-gray-600">
              Integrity, customer satisfaction, and technological excellence 
              are the pillars that drive everything we do at TechCart.
            </p>
          </div>
        </div>

        <div className="mt-12">
          <h3 className="text-2xl font-semibold mb-3 text-gray-900">Why Choose Us?</h3>
          <p className="text-gray-600 max-w-3xl mx-auto">
            From cutting-edge gadgets to trusted electronics, we offer carefully 
            curated products backed by expert support. Enjoy fast delivery, secure 
            payments, and a seamless shopping experience every time you visit.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
