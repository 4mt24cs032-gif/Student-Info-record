const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/uploads", express.static("uploads"));
// Connect MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/membersDB")
.then(() => console.log("MongoDB connected"))
.catch(err => console.log(err));

// Schema
const memberSchema = new mongoose.Schema({
  name: String,
  branch: String,
  usn: String,
  interests: String,
  address: String,
  profilePic: String
});

const Member = mongoose.model("Member", memberSchema);

// Route: Get all members
app.get("/members", async (req, res) => {
  const members = await Member.find();
  res.json(members);
});

// Insert 5 members (run once)
app.get("/seed", async (req, res) => {
  await Member.deleteMany();

  await Member.insertMany([
    {
      name: "Member1_Name",
      branch: "Member1_Branch",
      usn: "Member1_USN",
      interests: "Member1_Intrests",
      address: "Member1_Address",
      profilePic: "http://localhost:5000/uploads/Demo.jpg"
    },
    {
      name: "Amit Sharma",
      branch: "Information Science",
      usn: "IS002",
      interests: "AI, ML",
      address: "New York, USA",
      profilePic: "https://via.placeholder.com/100"
    },
    {
      name: "Priya Patel",
      branch: "Electronics",
      usn: "EC003",
      interests: "IoT, Robotics",
      address: "Chicago, USA",
      profilePic: "https://via.placeholder.com/100"
    },
    {
      name: "Rahul Verma",
      branch: "Mechanical",
      usn: "ME004",
      interests: "Design, CAD",
      address: "Texas, USA",
      profilePic: "https://via.placeholder.com/100"
    },
    {
      name: "Sneha Reddy",
      branch: "Civil",
      usn: "CV005",
      interests: "Construction, Planning",
      address: "California, USA",
      profilePic: "https://via.placeholder.com/100"
    }
  ]);

  res.send("Database seeded");
});

app.listen(5000, () => console.log("Server running on port 5000"));
