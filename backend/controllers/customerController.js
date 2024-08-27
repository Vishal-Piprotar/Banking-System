import Customer from '../models/Customer.js';

export const getAllCustomers = async (req, res) => {
  try {
    const customers = await Customer.find();
    res.json(customers);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const getCustomerById = async (req, res) => {
  try {
    const customer = await Customer.findById(req.params.id);
    if (!customer) return res.status(404).json({ error: 'Customer not found' });
    res.json(customer);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const createCustomer = async (req, res) => {
  try {
    const { name, email, currentBalance } = req.body;
    const newCustomer = new Customer({ name, email, currentBalance });
    await newCustomer.save();
    res.status(201).json(newCustomer);
  } catch (error) {
    res.status(500).json({ error: 'Failed to add customer' });
  }
};

export const transferFunds = async (req, res) => {
  const { fromCustomerId, toCustomerId, amount } = req.body;

  try {
    const fromCustomer = await Customer.findById(fromCustomerId);
    const toCustomer = await Customer.findById(toCustomerId);
    const parsedAmount = parseFloat(amount);

    if (!fromCustomer || !toCustomer) return res.status(404).json({ error: 'Customer not found' });
    if (fromCustomer.currentBalance < parsedAmount) return res.status(400).json({ error: 'Insufficient Balance' });

    fromCustomer.currentBalance -= parsedAmount;
    toCustomer.currentBalance += parsedAmount;
    await fromCustomer.save();
    await toCustomer.save();
    res.status(200).json({ message: 'Transfer Successful' });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
