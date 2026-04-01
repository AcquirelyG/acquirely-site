const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Simple test route
app.get("/", (req, res) => {
  res.send("Acquirely backend is running");
});

// Contact form endpoint
app.post("/contact", (req, res) => {
  const { name, email, message } = req.body;

  console.log("New lead received:");
  console.log(name, email, message);

  res.json({ success: true, message: "Lead received" });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
