# 📝 MERN-Blog

A full-stack blogging platform built using the **MERN stack** (MongoDB, Express.js, React, Node.js). This project allows users to register, log in, create, edit, and delete blog posts with a modern, responsive interface.

---

## 🚀 Features

- ✨ User Authentication (JWT-based)
- 📝 Create, Edit, Delete blog posts
- 📚 View all posts or filter by author
- 🌐 Responsive frontend using React
- 🔐 Secure backend using Node.js + Express
- 🛢️ MongoDB for data storage
- 📦 RESTful API integration
- 📸 Upload images for blog posts (optional)

---

## 📁 Project Structure

mern-blog/
├── client/ # React frontend
│ └── src/
│ ├── components/
│ ├── pages/
│ ├── App.js
│ └── index.js
├── server/ # Node + Express backend
│ ├── models/
│ ├── routes/
│ ├── controllers/
│ ├── middleware/
│ └── server.js
├── .env
├── .gitignore
├── README.md

yaml
Copy
Edit

---

## 🛠️ Tech Stack

**Frontend:** React, Axios, React Router  
**Backend:** Node.js, Express.js  
**Database:** MongoDB (via Mongoose)  
**Authentication:** JWT, bcrypt  
**Styling:** CSS/SCSS or Tailwind (optional)

---

## ⚙️ Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/Raushan1845/MERN-Blog.git
cd MERN-Blog
2. Setup the Backend
bash
Copy
Edit
cd server
npm install
# Create a .env file with your MongoDB URI and JWT_SECRET
npm start
3. Setup the Frontend
bash
Copy
Edit
cd ../client
npm install
npm start
🧪 Environment Variables (.env)
Inside the /server folder, create a .env file:

ini
Copy
Edit
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
PORT=5000
🧹 To-Do / Future Improvements
 Add image uploads (Cloudinary or local storage)

 Add WYSIWYG Markdown Editor

 Add Likes & Comments

 Admin Panel for content moderation

 Pagination for blog posts

📄 License
This project is open-source and available under the MIT License.

🤝 Contributing
Contributions, issues, and feature requests are welcome!
Feel free to open a pull request or submit an issue.

🙋‍♂️ Author
Raushan Kumar
GitHub: @Raushan1845
