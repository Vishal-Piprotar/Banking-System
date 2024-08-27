import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const CustomerDetails = () => {
  const [customer, setCustomer] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const fetchCustomer = async () => {
      try {
        const response = await axios.get(`http://localhost:5500/api/customers/${id}`);
        setCustomer(response.data);
      } catch (error) {
        console.error("Error fetching customer details:", error);
        setErrorMessage("Failed to load customer details.");
      } finally {
        setLoading(false);
      }
    };

    fetchCustomer();
  }, [id]);

  const handleTransferClick = () => {
    if (customer && customer.currentBalance <= 0) {
      setErrorMessage('Insufficient balance to transfer.');
    } else {
      navigate(`/transfer/${id}`);
    }
  };

  const handleGoBack = () => {
    navigate(-1);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="border-t-4 border-[#3795BD] border-solid rounded-full w-16 h-16 animate-spin"></div>
        <p className="ml-4 text-[#3A1078]">Loading...</p>
      </div>
    );
  }

  return (
    <div className="p-4 max-w-md mx-auto bg-[#F7F7F8] rounded-lg shadow-lg mt-10">
      <h1 className="text-2xl font-bold mb-4 text-[#3A1078]">Customer Details</h1>
      {errorMessage && <p className="text-red-500 mb-4">{errorMessage}</p>}
      {customer && (
        <>
          <p className="mb-2">Name: <span className="font-semibold">{customer.name}</span></p>
          <p className="mb-2">Email: <span className="font-semibold">{customer.email}</span></p>
          <p className="mb-4">Current Balance: <span className="font-semibold">RS.{customer.currentBalance}</span></p>
          <div className="flex space-x-4">
            <button
              className="bg-[#4E31AA] text-[#F7F7F8] py-2 px-4 rounded hover:bg-[#3A1078]"
              onClick={handleGoBack}
            >
              Back
            </button>
            <button
              className={`bg-[#3A1078] text-[#F7F7F8] py-2 px-4 rounded hover:bg-[#4E31AA] ${customer && customer.currentBalance <= 0 ? 'cursor-not-allowed opacity-50' : ''}`}
              onClick={handleTransferClick}
              disabled={customer && customer.currentBalance <= 0}
            >
              Transfer Money
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default CustomerDetails;
