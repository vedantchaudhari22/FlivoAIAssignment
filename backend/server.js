import 'dotenv/config'; 
import express from 'express';
import cors from 'cors';
import connectDB from './config/connectDB.js';
import contactRoute from './routes/contactRoute.js'

const app = express();

//database connection
await connectDB();

app.use(cors()); 
app.use(express.json()); 

app.use("/api/contact", contactRoute); 

app.get('/', (req, res) => {
    res.send('API is running...');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});