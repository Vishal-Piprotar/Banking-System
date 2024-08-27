import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-[#F7F7F8]">
      <header className="bg-[#3A1078] text-[#F7F7F8] py-8">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold">Welcome to Basic Banking System</h1>
          <p className="mt-2 text-lg">
            Your trusted partner for secure and efficient banking services.
          </p>
        </div>
      </header>
      <main className="py-12">
        <div className="container mx-auto px-4">
        <section className="text-center">
            <h2 className="text-3xl font-semibold mb-6">Get Started</h2>
            <p className="mb-6">
              Ready to start managing your finances? Explore our services or contact us for more information.
            </p>
            <div className="flex justify-center">
              <Link
                to="/All"
                className="bg-[#3A1078] text-[#F7F7F8] px-6 py-3 rounded-lg shadow hover:bg-[#4E31AA]"
              >
                Explore 
              </Link>
            </div>
          </section>

          <div className='p-10'> </div>
          <section className="mb-12 text-center">
            <h2 className="text-3xl font-semibold mb-6">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <img src="https://img.freepik.com/free-vector/people-near-bank-building_74855-4455.jpg?t=st=1724734662~exp=1724738262~hmac=d757e5e7fa767f585fd204e93a2f453852a6008a72ae705f31b49ba0e3a528e2&w=996" alt="Account Management" className="w-full h-auto object-cover mb-4 rounded" />
                <h3 className="text-xl font-semibold mb-4">Account Management</h3>
                <p>Manage your accounts effortlessly with our intuitive dashboard.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <img src="https://img.freepik.com/free-vector/flat-receiving-cashback-bonus-from-paying-online_88138-766.jpg?t=st=1724734749~exp=1724738349~hmac=8e8083e5712ab293396adc38117202642c6dc1486215a4d6538e4395d602522d&w=996" alt="Online Banking" className="w-full h-auto object-cover mb-4 rounded" />
                <h3 className="text-xl font-semibold mb-4">Online Banking</h3>
                <p>Access your bank account and perform transactions anytime, anywhere.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <img src="https://img.freepik.com/free-vector/customer-support-illustration_23-2148884662.jpg?t=st=1724734802~exp=1724738402~hmac=e34a657f99f5c164e2511b1773a653abf1e40075e8ca4ea525133d3fcb14994c&w=996" alt="Customer Support" className="w-full h-auto object-cover mb-4 rounded" />
                <h3 className="text-xl font-semibold mb-4">Customer Support</h3>
                <p>Get assistance from our dedicated support team for all your banking needs.</p>
              </div>
            </div>
          </section>
       
        </div>
      </main>
    </div>
  );
};

export default HomePage;
