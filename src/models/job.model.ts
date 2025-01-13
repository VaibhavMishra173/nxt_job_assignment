import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/database';

interface JobAttributes {
  id?: number;
  title: string;
  company: string;
  location: string;
  salary: number;
  description: string;
  createdAt?: Date;
  updatedAt?: Date;
}

interface JobInstance extends Model<JobAttributes>, JobAttributes {}

const Job = sequelize.define<JobInstance>('Job', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  company: {
    type: DataTypes.STRING,
    allowNull: false
  },
  location: {
    type: DataTypes.STRING,
    allowNull: false
  },
  salary: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false
  }
}, {
  tableName: 'jobs',
  timestamps: true
});

export default Job;
