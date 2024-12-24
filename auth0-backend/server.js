require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { auth } = require("express-oauth2-jwt-bearer");

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Auth0 JWT validation middleware
const checkJwt = auth({
  audience: "https://dev-gzhet0kq24j1lrur.us.auth0.com/api/v2/",
  issuerBaseURL: "https://dev-gzhet0kq24j1lrur.us.auth0.com/",
});

// Public endpoint
app.get("/api/public", (req, res) => {
  res.json({ message: "This is a public endpoint" });
});

// Protected endpoint
app.get("/api/private", checkJwt, (req, res) => {
  res.json({
    message: "This is a private endpoint",
    user: req.auth,
  });
});

// User profile endpoint
app.get("/api/profile", checkJwt, (req, res) => {
  res.json({
    user: req.auth,
    metadata: {
      lastLogin: new Date(),
      preferences: {
        theme: "light",
        notifications: true,
      },
    },
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
