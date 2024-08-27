import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useSnackbar } from 'notistack';

const CustomerList = () => {
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [newCustomer, setNewCustomer] = useState({
    name: "",
    email: "",
    currentBalance: ""
  });

  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const response = await axios.get('https://banking-system-j9n180bp5-vishals-projects-dd46cdeb.vercel.app/api/customers');
        setCustomers(response.data);
      } catch (error) {
        console.error("Error fetching customers:", error);
        enqueueSnackbar('Failed to load customers.', { variant: 'error' });
      } finally {
        setLoading(false);
      }
    };

    fetchCustomers();
  }, [enqueueSnackbar]);

  const handleAddCustomerClick = () => {
    setShowForm(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewCustomer((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (newCustomer.name && newCustomer.email && newCustomer.currentBalance) {
      try {
        const response = await axios.post('https://banking-system-j9n180bp5-vishals-projects-dd46cdeb.vercel.app/api/customers/create', newCustomer);
        if (response.status >= 200 && response.status < 300) {
          const data = response.data;
          setCustomers((prev) => [...prev, data]);
          setNewCustomer({ name: "", email: "", currentBalance: "" });
          setShowForm(false);
          enqueueSnackbar('Customer added successfully!', { variant: 'success' });
        } else {
          throw new Error(`Error: ${response.statusText}`);
        }
      } catch (error) {
        console.error('Error adding customer:', error);
        enqueueSnackbar('Error adding customer.', { variant: 'error' });
      }
    } else {
      enqueueSnackbar('Please fill in all fields.', { variant: 'warning' });
    }
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
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-[#3A1078]">
          <thead>
            <tr>
              <th className="border-b px-4 py-2 bg-[#3A1078] text-[#F7F7F8]">Name</th>
              <th className="border-b px-4 py-2 bg-[#3A1078] text-[#F7F7F8]">Email</th>
              <th className="border-b px-4 py-2 bg-[#3A1078] text-[#F7F7F8]">Current Balance</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((customer) => (
              <tr
                key={customer._id}
                className="hover:bg-[#EDEDF0] cursor-pointer"
                onClick={() => navigate(`/customer/${customer._id}`)}
              >
                <td className="border-b px-4 py-2">{customer.name}</td>
                <td className="border-b px-4 py-2">{customer.email}</td>
                <td className="border-b px-4 py-2">RS.{customer.currentBalance}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {!showForm ? (
        <button
          className="mt-4 bg-[#3A1078] text-[#F7F7F8] py-2 px-4 rounded hover:bg-[#4E31AA]"
          onClick={handleAddCustomerClick}
        >
          Add New Customer
        </button>
      ) : (
        <form className="mt-4 space-y-4" onSubmit={handleFormSubmit}>
          <div>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={newCustomer.name}
              onChange={handleInputChange}
              required
              className="border border-[#3A1078] p-2 rounded w-full"
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={newCustomer.email}
              onChange={handleInputChange}
              required
              className="border border-[#3A1078] p-2 rounded w-full"
            />
          </div>
          <div>
            <input
              type="number"
              name="currentBalance"
              placeholder="Current Balance"
              value={newCustomer.currentBalance}
              onChange={handleInputChange}
              required
              className="border border-[#3A1078] p-2 rounded w-full"
            />
          </div>
          <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
            <button
              className="bg-[#4E31AA] text-[#F7F7F8] py-2 px-4 rounded hover:bg-[#3A1078]"
              type="button"
              onClick={() => {
                setShowForm(false);
                setNewCustomer({ name: "", email: "", currentBalance: "" });
              }}
            >
              Cancel
            </button>
            <button
              className="bg-[#3A1078] text-[#F7F7F8] py-2 px-4 rounded hover:bg-[#4E31AA]"
              type="submit"
            >
              Add New Customer
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default CustomerList;
