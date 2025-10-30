# 🌐 Flivo AI Assignment

A full-stack **MERN (MongoDB, Express.js, React.js, Node.js)** project that allows users to submit a contact form and store the data securely in a MongoDB database.

---

## 🧩 Folder Structure

FlivoAIAssignment/
├── frontend/ # ReactJS (Vite + Tailwind CSS)
└── backend/ # Node.js + Express.js + MongoDB

---

## ⚙️ Tech Stack

- **Frontend:** React.js (Vite), Tailwind CSS, Axios, Lucide Icons  
- **Backend:** Node.js, Express.js, MongoDB, Mongoose  
- **Database:** MongoDB Atlas / Local MongoDB  
- **Package Manager:** npm  

---

### 🧰 Prerequisites

Make sure you have installed the following before setup:

- **Node.js** (v16 or above)  
- **npm** (v8 or above)  
- **MongoDB** (local or Atlas cloud)  
- **VS Code** (recommended for development)

---

### 🚀 Project Setup Instructions

Follow these steps to run the project locally.

##⚡ Frontend Setup (React + Vite)

1. Open a new terminal in VS Code and navigate to the frontend folder: cd frontend
2. Install all dependencies: npm install
3. Start the project: npm run dev
4. The frontend will run at: http://localhost:5173

##🧱 Backend Setup (Node.js + Express + MongoDB)

1. Open another terminal in VS Code.
2. Navigate to the backend folder: cd backend
3. Install all dependencies: npm install
4. Make sure MongoDB is connected.

If using MongoDB Atlas, create a .env file in the backend folder and add: 
PORT=your_port
MONGODB_URI=your_mongodb_connection_string

refer the .env.sample file in backend folder

5. Run the backend server: npm run dev
6. The backend will run at: http://localhost:5000  (my port is 5000)


4. Connecting Frontend with Backend

If your frontend and backend are running on different ports:

Frontend → http://localhost:5173

Backend → http://localhost:5000

Then update your Axios API URL inside the frontend code (for example in src/components/Contact.jsx):

axios.post("http://localhost:5000/api/contact", formData);


This ensures that submitted form data is sent to your backend API and stored in MongoDB.


---

# Made with ❤️ using the MERN Stack

---

### 🖥️ Clone the Repository

```bash
git clone https://github.com/vedantchaudhari22/FlivoAIAssignment.git
