// Import the express library and assign it to a variable
import express from 'express';
import fetch from 'node-fetch';
import axios from 'axios';
import path from 'path'
import { fileURLToPath } from 'url';
import { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Create an instance of an express application 
const app = express()

// Set the port the application will be running on
const port = process.env.PORT || 5500;

app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

// Set up a response for the root path of the application
app.get('/', async (req, res) => {
  try {
    // Useless Facts API URL
    const apiUrl = "https://useless-facts.sameerkumar.website/api";

    // Fetch data from the Useless Facts API
    const response = await axios.get(apiUrl);
    const funFact = response.data.data;

    // Send the fetched fun fact as a response
    res.send(`Fun Fact: ${funFact}`);
  } catch (error) {
    console.error("Error fetching fun fact:", error);
    res.status(500).send("Error fetching fun fact");
  }
});

// Set the application to listen on a port
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
