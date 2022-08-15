import mongoose from 'mongoose';
import { AccountSchema } from '../models/Account';
import { CarSchema } from '../models/Car.js';
import { HouseSchema } from '../models/House.js';
import { ValueSchema } from '../models/Value';

class DbContext {
  Values = mongoose.model('Value', ValueSchema);
  Account = mongoose.model('Account', AccountSchema);

  Cars = mongoose.model('Car', CarSchema)
  Houses = mongoose.model('House', HouseSchema)
}

export const dbContext = new DbContext()
