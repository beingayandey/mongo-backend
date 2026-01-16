import connectDB from './db/index.js';
import app from './app.js';
import express from 'express';
import userRoutes from './routes/user.routes.js';
// Connect to the database

connectDB();

app.use(express.json());
// Routes ব্যবহার করা
app.use('/api/users', userRoutes);

app.listen(5000, () => {
  console.log('🚀 Server running on port 5000');
});
