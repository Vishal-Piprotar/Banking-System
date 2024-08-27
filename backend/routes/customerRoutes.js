import express from 'express';
import { getAllCustomers, getCustomerById, createCustomer, transferFunds } from '../controllers/customerController.js';

const router = express.Router();

router.get('/', getAllCustomers);
router.get('/:id', getCustomerById);
router.post('/create', createCustomer);
router.post('/transfer', transferFunds);

export default router;
