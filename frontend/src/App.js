import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/members")
      .then(res => setMembers(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Members List</h1>

      {members.map((m) => (
        <div key={m._id} style={{
          border: "1px solid gray",
          padding: "10px",
          margin: "10px",
          borderRadius: "8px",
          display: "flex",
          alignItems: "center",
          gap: "15px"
        }}>
          
          {/* Profile Image */}
          {m.profilePic && (
            <img 
              src={m.profilePic} 
              alt="profile"
              style={{
                width: "80px",
                height: "80px",
                borderRadius: "50%",
                objectFit: "cover"
              }}
            />
          )}

          {/* Text Content */}
          <div>
            <h3>{m.name}</h3>
            <p><b>Branch:</b> {m.branch}</p>
            <p><b>USN:</b> {m.usn}</p>
            <p><b>Interests:</b> {m.interests}</p>
            <p><b>Address:</b> {m.address}</p>
          </div>

        </div>
      ))}
    </div>
  );
}

export default App;