import express from 'express';
import cors from 'cors';
import jobRoutes from './routes/job.routes';
import sequelize from './config/database';

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api', jobRoutes);

// Database & migrations initialization
const initDatabase = async () => {
  try {
    await sequelize.authenticate();
    console.log('Database connection established successfully.');
    
    // Sync database (in development)
    if (process.env.NODE_ENV === 'development') {
      await sequelize.sync();
      console.log('Database synchronized successfully.');
    }
  } catch (error) {
    console.error('Unable to connect to the database:', error);
    process.exit(1);
  }
};

initDatabase();

export default app;
