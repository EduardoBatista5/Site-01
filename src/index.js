
const express = require('express');
const { PrismaClient } = require('@prisma/client');
const authRoutes = require('./routes/authRoutes');

const app = express();
const prisma = new PrismaClient();

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

app.use('/auth', authRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
