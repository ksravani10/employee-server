import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import authRouter from './routes/auth.js';
import connectToDatabase from './db/db.js';
import departmentRouter from './routes/department.js';
import employeeRouter from './routes/employee.js'
import salaryRouter from './routes/salary.js'
import leaveRouter from './routes/leave.js' 
import settingRouter from './routes/setting.js'
import dashboardRouter from './routes/dashboard.js'

connectToDatabase();
dotenv.config();

const app = express();
app.use(cors({
    origin: "https://employee-frontend-tau-drab.vercel.app/login",
    credentials: true
}))
app.use(express.json())
app.use('/api/auth', authRouter);
app.use('/api/department', departmentRouter);
app.use('/api/employee', employeeRouter)
app.use('/api/salary', salaryRouter)
app.use('/api/leave', leaveRouter)
app.use('/api/setting', settingRouter)
app.use('/api/dashboard', dashboardRouter)

app.use(express.static('public/uploads'))


app.listen(process.env.PORT, () =>{
    console.log(`Server is running on port ${process.env.PORT}`)
})