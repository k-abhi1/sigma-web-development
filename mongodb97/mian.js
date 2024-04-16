// Generate a dummy data in this format in a collection called employees in a db called company

// {
//     name: "Harry",
//     salary: 45000000,
//     language: "Python",
//     city: "New York",
//     isManager: true
// }

// Generate 10 such records when a button called generate data is clicked!
// Create an Express app with mongoose to acheive it
// Everytime the button is clicked, you should clear the collection 

// const Express = require('express');
// const mongoose = require('mongoose');

// const app = Express();
// const port = 3000;

// mongoose.connect('mongodb://localhost:27017/',{
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// });

// const employeeSchema = new mongoose.Schema({
//     name: String,
//     salary: Number,
//     language: String,
//     city: String,
//     isManager: Boolean
// });

// const Employee = mongoose.model('Employee', employeeSchema);

// app.get('/generate', async (req, res) => {
//     await Employee.deleteMany({});
//     for(let i=0; i<10; i++){
//         const employee = new Employee({
//             name: "Harry",
//             salary: 45000000,
//             language: "Python",
//             city: "New York",
//             isManager: true
//         });
//         await employee.save();
//     }
//     res.send("Data generated successfully");
// }
// );
// app.get('/', async (req, res) => {
//     const employees = await Employee.find({});
//     res.send(employees);
// }
// );

// app.listen(port, () => {
//     console.log(`Server is running on port ${port}`);
// }
// );




// const  express = export('express');
// const mongoose = export('mongoose');
// const mngoose = export('mongoose');

// Import required modules
const  express = require('express');
const mongoose = require('mongoose');
const mngoose = require('mongoose');

// Create Express app
const app = express();
const PORT = 3000;

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;

// Define employee schema
const employeeSchema = new mongoose.Schema({
  name: String,
  salary: Number,
  language: String,
  city: String,
  isManager: Boolean,
});

const Employee = mongoose.model('Employee', employeeSchema);

// Clear the collection
const clearCollection = async () => {
  try {
    await Employee.deleteMany({});
    console.log('Collection cleared');
  } catch (error) {
    console.error('Error clearing collection:', error);
  }
};

// Generate dummy data and save to the collection
const generateData = async () => {
  const employees = [];
  for (let i = 0; i < 10; i++) {
    employees.push({
      name: 'Harry',
      salary: 45000000,
      language: 'Python',
      city: 'New York',
      isManager: true,
    });
  }
  try {
    await Employee.insertMany(employees);
    console.log('Data generated and saved');
  } catch (error) {
    console.error('Error generating data:', error);
  }
};

// Routes
app.get('/generate-data', async (req, res) => {
  await clearCollection();
  await generateData();
  res.send('Data generated successfully!');
});

// Serve the index.html file with the button
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${3000}`);
});



// app.lengtn(port,())=>{
//   console.log(`server is rening on https://localhost:${3000}`)
// }
