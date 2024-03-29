const express = require('express');

const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

 const signupRoutes =require('./routes/signupRoutes.cjs');
app.use('/api/Users',signupRoutes);

mongoose.connect('mongodb://localhost:27017/my_db.users')

  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error(err));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
