const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config(); // Add this line to read the .env file
const app = express();
const PORT = process.env.PORT || 5000;

// ...


app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

mongoose.connection.once('open', () => {
  console.log('MongoDB connection established successfully');
});

app.get('/', (req, res) => {
  res.send('Welcome to Root Labs MVP API');
});

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
