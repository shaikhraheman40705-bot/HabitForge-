import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req,res)=> res.send('HabitForge API Running ✅'));

mongoose.connect(process.env.MONGODB_URI).then(()=> console.log('MongoDB Connected ✅')).catch(e=> console.log('MongoDB Not Connected - But API will still run (Local DB not installed)'));

app.listen(process.env.PORT, ()=> console.log('Server on 5000 ✅'));