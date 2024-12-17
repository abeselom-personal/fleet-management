const mongoose = require('mongoose');

const fuelLogSchema = new mongoose.Schema(
  {
    vehicle: { type: mongoose.Schema.Types.ObjectId, ref: 'Vehicle', required: true },
    date: { type: Date, required: true },
    amount: { type: Number, required: true },
    cost: { type: Number },
    odometerReading: { type: Number },
  },
  { timestamps: true }
);

module.exports = mongoose.model('FuelLog', fuelLogSchema);
