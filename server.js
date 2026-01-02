const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv').config();
const connectdb = require('./config/connectdb');
const auth = require('./middleware/auth');
const isAdmin = require('./middleware/isAdmin');

const app = express();

app.use(cors());
app.use(express.json());
connectdb();
const PORT = process.env.PORT || 3001;

const authRouter = require('./routes/client/auth');
app.use('/api/v1/auth', authRouter);

const userRouter = require('./routes/admin/user');
app.use('/api/v1/ad/users', auth, isAdmin, userRouter);



app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})