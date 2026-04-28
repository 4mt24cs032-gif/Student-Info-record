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
     name: "Member2_Name",
     branch: "Member2_Branch",
     usn: "Member2_USN",
     interests: "Member2_Intrests",
     address: "Member2_Address",
     profilePic: "http://localhost:5000/uploads/Demo.jpg"
    },
    {
     name: "Member3_Name",
     branch: "Member3_Branch",
     usn: "Member3_USN",
     interests: "Member3_Intrests",
     address: "Member3_Address",
     profilePic: "http://localhost:5000/uploads/Demo.jpg"
    },
    {
     name: "Member4_Name",
     branch: "Member4_Branch",
     usn: "Member4_USN",
     interests: "Member4_Intrests",
     address: "Member4_Address",
     profilePic: "http://localhost:5000/uploads/Demo.jpg"
    },
    {
     name: "Member5_Name",
     branch: "Member5_Branch",
     usn: "Member5_USN",
     interests: "Member5_Intrests",
     address: "Member5_Address",
     profilePic: "http://localhost:5000/uploads/Demo.jpg"
    }
  ]);

  res.send("Database seeded");
});

app.listen(5000, () => console.log("Server running on port 5000"));
