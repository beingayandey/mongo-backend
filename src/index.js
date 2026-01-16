import connectDB from './db/index.js';
import app from './app.js';

connectDB();

app.listen(5000, () => {
  console.log('🚀 Server running on port 5000');
});
