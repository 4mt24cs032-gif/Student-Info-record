# 📦 Student Info Record (MERN App)

A simple MERN stack application that displays student/member data stored in MongoDB.

---

## 🚀 What This Project Does

* Fetches members from MongoDB
* Displays them in a React UI
* Supports local images via backend (`/uploads`)

---

## 📁 Project Structure

```id="q8v2pk"
Student-Info-record/
├── backend/
│   ├── server.js
│   ├── package.json
│   ├── uploads/        # Local images (important)
│
├── frontend/
│   ├── package.json
│   ├── src/
│   │   ├── App.js
│   │   ├── index.js
│   ├── public/
│   │   ├── index.html
│
├── README.md
```

---

## ⚙️ Requirements

Install these before running:

* Node.js (v14+)
* npm (comes with Node)
* MongoDB (local or MongoDB Compass)

---

## 🛠️ Setup on a New Computer

### 1. Copy Project

Transfer the entire folder to your system.

---

### 2. Install Dependencies

#### Backend

```id="x8xq4r"
cd backend
npm install
```

#### Frontend

```id="5jsk3p"
cd frontend
npm install
```

---

### 4. Start Backend (Use seperate terminal (powershell))

```id="m6v2nq"
cd backend
node server.js
```

Expected output:

```id="7v5tfr"
MongoDB connected
Server running on port 5000
```

---

### 5. Seed Database (IMPORTANT)

Open in browser:

```id="tkqv2u"
http://localhost:5000/seed
```

👉 This inserts sample data into MongoDB

---
 
### 6. Start Frontend (Use seperate terminal (powershell))

```id="0j8r5k"
cd frontend
npm start
```

App will run at:

```id="r6dp6m"
http://localhost:3000
```

---

## 🖼️ Using Local Images

### Step 1: Add image

Place your image inside:

```id="5grn3u"
backend/uploads/
```

---

### Step 2: Serve images (already in code)

Make sure this exists in `server.js`:

```js id="1g5n9x"
app.use("/uploads", express.static("uploads"));
```

---

### Step 3: Use image in data

Example:

```js id="6u2b4k"
profilePic: "http://localhost:5000/uploads/image.jpg" ---> Your Image
```

---

## ❗ Important Notes

* MongoDB data is NOT included → always run `/seed`
* Backend must run before frontend

---

## 🐞 Common Issues

### ❌ No data showing

👉 Run `/seed` again

---

### ❌ Image not loading

* Check file name and path
* Try opening:

```id="k2t5qv"
http://localhost:5000/uploads/your-image.jpg
```

---

### ❌ Backend not working

* Make sure MongoDB is running

---

### ❌ Port already in use

* Change port or restart system

---

## 👨‍💻 Author

Anush

---

## 📄 Note

This project is built for learning MERN stack basics.
