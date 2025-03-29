const express = require('express');
const app = express();
const connect = require('./src/db/db');
const userRoutes = require('./src/routes/user.routes'); // Correct import of the router

connect(); // Assuming this connects to your database

// Apply the router middleware to the route path
app.use('/api/user', userRoutes);

app.listen(3000, () => {
  console.log("Server is running at port 3000");
});
