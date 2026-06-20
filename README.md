# AI & Robotics Summer Workshop

A responsive workshop landing page built with **React.js**, **Vite**, **Tailwind CSS**, and **Express.js**. The project is based on the Kidrove workshop style and includes a frontend with a registration form connected to a backend API.

---

## 🚀 Features

- Responsive Navbar
- Hero Section
- Workshop Details
- Learning Outcomes (5 Points)
- FAQ Section (Accordion)
- Registration Form
- Express.js Backend API
- Form Validation
- Responsive Design (Mobile & Desktop)

---

## 🛠️ Tech Stack

### Frontend
- React.js
- Vite
- Tailwind CSS

### Backend
- Node.js
- Express.js
- CORS

---

## 📁 Project Structure

```
fronted/
│
├── src/
│   ├── components/
│   ├── App.jsx
│   └── main.jsx
│
├── public/
├── package.json
│
└── backend/
    ├── server.js
    ├── package.json
    └── node_modules/
```

---

## ⚙️ Installation

### Frontend

```bash
npm install
npm run dev
```

### Backend

```bash
cd backend
npm install
node server.js
```

---

## 🔗 API Endpoint

### POST `/api/enquiry`

Accepts:

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "9XXXXXXXXX"
}
```

Returns:

```json
{
  "success": true,
  "message": "Registration Successful!"
}
```

---

## 📱 Responsive Design

- Desktop
- Tablet
- Mobile

---

## 👨‍💻 Author

**Sonu Kumar Singh**