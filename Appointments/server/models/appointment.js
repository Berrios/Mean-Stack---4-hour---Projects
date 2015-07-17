var mongoose = require('mongoose');

var AppointmentSchema = new mongoose.Schema({
  full_name: { type: String, trim: true },
  complaint: { type: String },
  date: { type: Date, default: Date.now },
  time: { type : Date, default: Date.now },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now }
});

mongoose.model('Appointment', AppointmentSchema);
// UserSchema.path('first_name').required(true, "First Name is required");
// UserSchema.path('last_name').required(true, "Last Name is required");
// UserSchema.path('email').required(true, "Email is required");
// UserSchema.path('password').required(true, "Password is required");