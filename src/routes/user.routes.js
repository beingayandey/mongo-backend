// Import express framework
import express from 'express';
// Import the createUser function from the user controller
import { createUser } from '../controllers/user.controller.js';

// Create a new router instance
const router = express.Router();

// Define a POST route for '/create' that calls the createUser function
router.post('/create', createUser);

// Export the router to be used in other parts of the app
export default router;
