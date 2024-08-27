import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSnackbar } from 'notistack'; // Import useSnackbar

const TransferMoney = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar(); // Hook for notifications

  const [amount, setAmount] = useState("");
  const [customers, setCustomers] = useState([]);
  const [toCustomerId, setToCustomerId] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const response = await fetch("https://banking-system-wjyob183e-vishals-projects-dd46cdeb.vercel.app/api/customers");
        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }
        const data = await response.json();
        setCustomers(data);
      } catch (error) {
        console.error("Error fetching customers:", error);
        enqueueSnackbar('Failed to load customers.', { variant: 'error' });
      } finally {
        setLoading(false);
      }
    };

    fetchCustomers();
  }, [enqueueSnackbar]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!amount || isNaN(amount) || parseFloat(amount) <= 0) {
      setErrorMessage("Please enter a valid amount.");
      return;
    }

    try {
      const response = await fetch("https://banking-system-wjyob183e-vishals-projects-dd46cdeb.vercel.app/api/customers/transfer", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fromCustomerId: id,
          toCustomerId,
          amount: parseFloat(amount),
        }),
      });

      if (response.ok) {
        enqueueSnackbar('Transfer successful!', { variant: 'success' });
        navigate("/All");
      } else {
        const errorData = await response.json();
        enqueueSnackbar(errorData.error || 'Transfer failed', { variant: 'error' });
      }
    } catch (error) {
      console.error("Error during transfer:", error);
      enqueueSnackbar('An error occurred during the transfer.', { variant: 'error' });
    }
  };

  const handleChange = (e) => {
    setToCustomerId(e.target.value);
  };

  const handleGoBack = () => {
    navigate(-1);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-[#F7F7F8]">
        <div className="border-t-4 border-[#3795BD] border-solid rounded-full w-16 h-16 animate-spin"></div>
        <p className="ml-4 text-[#3A1078]">Loading...</p>
      </div>
    );
  }

  return (
    <div className="p-4 max-w-4xl mx-auto bg-[#F7F7F8]">
      <h1 className="text-2xl font-bold mb-4 text-[#3A1078]">Transfer Money</h1>
      <form onSubmit={handleSubmit} className="bg-white p-6 border border-[#3A1078] rounded">
        <div className="mb-4">
          <label className="block text-[#3A1078]">Amount:</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
            min="0.01"
            step="0.01"
            className="border border-[#3A1078] p-2 rounded w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block text-[#3A1078]">Transfer to:</label>
          <select
            value={toCustomerId}
            onChange={handleChange}
            required
            className="border border-[#3A1078] p-2 rounded w-full"
          >
            <option value="" disabled>Select a customer</option>
            {customers
              .filter((customer) => customer._id !== id)
              .map((customer) => (
                <option key={customer._id} value={customer._id}>
                  {customer.name}
                </option>
              ))}
          </select>
        </div>
        {errorMessage && <p className="text-red-500 mb-4">{errorMessage}</p>}
        <div className="flex space-x-4">
          <button
            type="button"
            className="bg-[#4E31AA] text-[#F7F7F8] py-2 px-4 rounded hover:bg-[#3A1078]"
            onClick={handleGoBack}
          >
            Back
          </button>
          <button
            type="submit"
            className="bg-[#3A1078] text-[#F7F7F8] py-2 px-4 rounded hover:bg-[#4E31AA]"
          >
            Transfer
          </button>
        </div>
      </form>
    </div>
  );
};

export default TransferMoney;
