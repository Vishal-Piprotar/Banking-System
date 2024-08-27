import React from 'react';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-[#F7F7F8]">
      <header className="bg-[#3A1078] text-[#F7F7F8] py-8">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold">About Us</h1>
          <p className="mt-2 text-lg">
            Learn more about our mission and services.
          </p>
        </div>
      </header>
      <main className="py-12">
        <div className="container mx-auto px-4">
          <section className="bg-white p-6 rounded-lg shadow-lg">
            <div className="flex flex-col md:flex-row items-center mb-12">
              <img 
                src="https://img.freepik.com/free-vector/focus-abstract-concept_335657-3014.jpg?ga=GA1.1.1178046015.1724734570&semt=ais_hybrid" 
                alt="Our Mission" 
                className="w-full md:w-3/4 lg:w-1/4  max-h-80 object-cover rounded-lg mb-6 md:mb-0 md:mr-6 "
              />
              <div className="md:w-1/2 ml-20">
                <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
                <p className="mb-4">
                  At Basic Banking System, we are committed to providing secure and efficient banking solutions for individuals and businesses. Our mission is to deliver top-notch financial services that enhance your banking experience and help you achieve your financial goals.
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center">
              <img 
                src="https://img.freepik.com/free-vector/flat-customer-service-week-illustration_23-2149644201.jpg?t=st=1724735230~exp=1724738830~hmac=52bfcf94157c42cee01ff3d836107da4221e45cd6b15d1e247f5c4f2fe0c4ca9&w=740" 
                alt="Our Services" 
                className="w-full md:w-3/4 lg:w-1/4 mr-16 max-h-80 object-cover rounded-lg mb-6 md:mb-0 md:ml-6"
              />
              <div className="md:w-1/2">
                <h2 className="text-3xl font-semibold mb-4">Our Services</h2>
                <p>
                  We offer a range of banking services designed to meet your needs, including account management, online banking, and personalized customer support. Whether you're managing personal finances or running a business, our platform provides the tools and resources you need for financial success.
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default AboutPage;
