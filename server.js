// importing packages
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

// setups
const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(express.json());


//Connect to database
//const URI = 'mongodb://localhost:27017/awesomeBooksDB';
const URI = process.env.MONGODB_DATABASE_URI ;
mongoose.connect(URI, { useNewUrlParser: true, useCreateIndex: true,  useUnifiedTopology: true   }
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})


// import routes
const booksRouter = require('./routes/bookRoutes');

// adding /activity to before all routes
app.use('/books', booksRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});



