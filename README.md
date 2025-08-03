# 💎 Metal Rate Management System – Backend

This is the backend of the **Metal Rate Management System**, a full-stack MERN application to manage metal rate entries, purity levels, and filter rate history.

Deployed with:
- Backend: **Render**

🔗 Frontend repo: [metal-frontend](https://github.com/swathiselvam1999/metal-frontend)

---

## 🧰 Tech Stack

- **Backend:** Node.js, Express.js, MongoDB (Mongoose)
- **Database:** MongoDB Atlas

---

## 📦 Backend Setup

### Prerequisites

- Node.js (v16+)
- MongoDB Atlas account

### Setup

```bash
git clone https://github.com/swathiselvam1999/metal-backend.git
cd metal-backend
npm install
```

### Environment Variables

Create a `.env` file in the root of the backend folder:

```env
PORT=5000
MONGO_URI=mongodb+srv://swathi:swathidepwd@metal-management.2pitwpp.mongodb.net/?retryWrites=true&w=majority&appName=metal-management
```

### Run the Server

```bash
npm run dev
```

Server will run at: `http://localhost:5000`

---

## 🌐 Backend Deployment (Render)

1. Push this repo to GitHub
2. Go to [https://render.com](https://render.com)
3. Create a new Web Service
4. Root Directory: `/`
5. Add environment variable: `MONGO_URI`
6. Start Command: `npm run dev` or `node server.js`

Deployed backend URL:  
`https://metal-backend-p9le.onrender.com`

---

## 🧪 API Endpoints

| Method | Route            | Description             |
|--------|------------------|-------------------------|
| GET    | /purities        | Get all purities        |
| POST   | /purities        | Add a new purity        |
| PUT    | /purities/:id    | Update purity and metal |
| DELETE | /purities/:id    | Delete metal data       |
| GET    | /rates           | Get all rates (filtered)|
| POST   | /rates           | Add a new rate          |
| GET    | /rates/latest    | Get latest rate         |

---

## 👩‍💻 Author

- Swathi Selvam – [GitHub](https://github.com/swathiselvam1999)

---

## 📄 License

MIT
