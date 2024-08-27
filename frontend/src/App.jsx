import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CustomerList from "./components/CustomerList";
import CustomerDetails from "./components/CustomerDetails";
import TransferMoney from "./components/TransferMoney";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import AboutPage from "./components/About";

const App = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        {/* Main content area */}
        <main className="flex-grow">
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/All" element={<CustomerList />} />
            <Route path="/customer/:id" element={<CustomerDetails />} />
            <Route path="/transfer/:id" element={<TransferMoney />} />
          </Routes>
        </main>
        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;
