# ✏️ Make Changes to Member Details

Follow these steps to update member information and images in the project.

---

## 📂 Step 1: Open `server.js`

Navigate to:

```text
C:\Users\pcuser\Downloads\Student-Info-record-main\backend\server.js
```

OR inside project:

```text
backend → server.js
```

---

## 📝 Step 2: Edit Member Data

Go to the **seed data section** (around line ~37 in `server.js`).

Update the member details like this:

```javascript
{
  name: "Member1_Name",
  branch: "Member1_Branch",
  usn: "Member1_USN",
  interests: "Member1_Interests",
  address: "Member1_Address",
  profilePic: "http://localhost:5000/uploads/image.jpg"
}
```

👉 Replace all values with your own details.

---

## 🖼️ Step 3: Add Image

Before using the image path, make sure to:

1. Go to:

```text
backend/uploads/
```

OR

```text
C:\Users\pcuser\Downloads\Student-Info-record-main\backend\uploads
```

2. Copy your image file into this folder

Example:

```text
backend/uploads/image.jpg
```

---

## 🔗 Step 4: Match Image Name

Make sure the filename matches exactly:

```javascript
profilePic: "http://localhost:5000/uploads/image.jpg"
```

If your file is:

```text
myphoto.png
```

Then use:

```javascript
profilePic: "http://localhost:5000/uploads/myphoto.png"
```

---

## 🔁 Step 5: Apply Changes

After editing:

1. Save `server.js`
2. Restart backend:

```bash
node server.js
```

3. Reseed database:

```text
http://localhost:5000/seed
```

---

## 🌐 Step 6: Refresh Frontend

Open:

```text
http://localhost:3000
```

👉 Your updated details and image should now appear.

---

## ⚠️ Common Mistakes

* ❌ Image not inside `uploads/`
* ❌ Filename mismatch (case-sensitive)
* ❌ Forgot to run `/seed` again
* ❌ Backend not restarted

---

## ✅ Summary

| Task          | Action              |
| ------------- | ------------------- |
| Edit data     | `server.js`         |
| Add image     | `backend/uploads/`  |
| Match path    | `/uploads/filename` |
| Apply changes | Restart + `/seed`   |

---

## 👨‍💻 Note

This project uses **local image hosting**, so images must be stored inside the backend folder.

---



