import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

// Test Route
app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});

// Assignment API
app.post("/api/enquiry", (req, res) => {
  const { name, email, phone } = req.body;

  // Validation
  if (!name || !email || !phone) {
    return res.status(400).json({
      success: false,
      message: "All fields are required",
    });
  }

  console.log("New Enquiry:", {
    name,
    email,
    phone,
  });

  res.status(200).json({
    success: true,
    message: "Registration Successful!",
    data: {
      name,
      email,
      phone,
    },
  });
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});