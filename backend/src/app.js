const express = require("express");
const session = require("express-session");
const cors = require("cors");

const { JWT_SECRET } = require("./config/env");

const passport = require("./api/middlewares/authMiddleware");
const authRoutes = require("./api/routes/authRoutes");
const userRoutes = require('./api/routes/userRoutes');

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

app.use(
  session({
    secret: JWT_SECRET,
    resave: false,
    saveUninitialized: false,
  })
);
app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use("/auth", authRoutes);
app.use('/users', userRoutes);

module.exports = app;
