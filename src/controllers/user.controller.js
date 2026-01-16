// Import the User model from the models folder
import { User } from '../models/user.model.js';

// Export an async function named createUser that handles user creation
export const createUser = async (req, res) => {
  // Try block to handle potential errors
  try {
    // Create a new User instance with data from the request body
    const newUser = new User(req.body);
    // Save the new user to the database and wait for the operation
    const savedUser = await newUser.save();
    // Send a 201 status response with the saved user data in JSON format
    res.status(201).json(savedUser);
    // Catch block to handle any errors that occur
  } catch (error) {
    // Send a 500 status response with the error message
    res.status(500).json({ message: error.message });
  }
};
