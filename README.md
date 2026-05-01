# 🔐 Advanced Authentication System using MERN

A modern and secure **Authentication & Authorization System** built with scalable architecture and best practices. This project includes advanced features like **JWT Authentication**, **Forgot Password via Email**, **Email Verification**, **Role-Based Access Control**, and **Admin Dashboard Access**.

Perfect for real-world SaaS apps, dashboards, and production-ready full-stack applications.

---

## 🚀 Features

### 🔑 Authentication
- User Registration & Login
- Secure Password Hashing
- JWT Token Based Authentication
- Access Token & Protected Routes
- Logout Functionality

### 📩 Email Features
- Email Verification after Signup
- Forgot Password via Email Link
- Reset Password with Secure Token

### 🛡 Authorization
- Role-Based Access Control (RBAC)
- User Roles: `User`, `Admin`
- Admin-Only Protected Routes

### 👨‍💼 Admin Features
- Manage Users
- View All Registered Users
- Change User Roles
- Delete / Block Users

### ⚡ Security Best Practices
- Encrypted Password Storage
- Secure Token Expiry
- Middleware Route Protection
- Input Validation
- Error Handling

---

## 🛠 Tech Stack

- **Frontend:** React.js / Next.js  
- **Backend:** Node.js / Express.js  
- **Database:** MongoDB / PostgreSQL  
- **Authentication:** JWT  
- **Email Service:** Nodemailer / SMTP  
- **Security:** bcrypt, middleware, validation

---

## 📂 Project Structure

```bash
src/
├── controllers/
├── routes/
├── middleware/
├── models/
├── utils/
├── config/
└── server.js
