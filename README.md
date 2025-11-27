# MERN E-Commerce Backend API

A scalable Node.js/Express backend for e-commerce applications with JWT authentication, user management, product CRUD operations, input validation, and comprehensive error handling. Uses in-memory database for development.

## 🚀 Features

- **User Authentication**: JWT-based register/login with bcrypt password hashing
- **Role-based Access**: User roles (customer by default)
- **Product Management**: Full CRUD with pagination and category filtering
- **Input Validation**: express-validator for secure form handling
- **Error Handling**: Global 404 and error middleware
- **Modern ES6 Modules**: Clean import/export syntax

## 📁 Project Structure

project-root/
├── app.js 
├── server.js ​
├── auth.js​
├── database/
│ └── memory.js​
├── controllers/
│ ├── userController.js 
│ └── productController.js 
├── routes/
│ ├── userRoutes.js ​
│ └── productRoutes.js 
├── middleware/
│ ├── 404handler.js 
│ └── errorHandler.js 
├── utils/
│ ├── logger.js 
│ └── role.js 
├── .env 
└── package.json


## 🛠️ Tech Stack

Node.js (ES6 modules)
├── Express.js
├── jsonwebtoken (JWT)
├── bcryptjs (password hashing)
├── express-validator
├── dotenv (env vars)
└── In-memory database (for dev)

## 🚀 Quick Start

1. **Clone & Install**

2. **Environment Setup**
Create `.env`:

2. **Environment Setup**
Create `.env`:
Server runs on `http://localhost:8080`

## 📖 API Endpoints

### Authentication
| Method | Endpoint       | Description              | Auth Required |
|--------|----------------|--------------------------|---------------|
| POST   | `/api/users/register` | Create new user     | No [file:72] |
| POST   | `/api/users/login`    | Get JWT token        | No [file:72] |

### Products
| Method | Endpoint            | Description                     | Auth |
|--------|---------------------|---------------------------------|------|
| POST   | `/api/products`     | Create product                  | ? [file:71] |
| GET    | `/api/products`     | List products (?page=1&limit=5&category=electronics) | No |
| PUT    | `/api/products/:id` | Update product                  | ? |
| DELETE | `/api/products/:id` | Delete product                  | ? |

## 🔐 Authentication Flow

1. **Register**: `POST /api/users/register` → Returns user object
2. **Login**: `POST /api/users/login` → Returns JWT token
3. **Protected Routes**: Add header `Authorization: Bearer <token>` [file:70]

## 🧪 Testing
Test register
curl -X POST http://localhost:8080/api/users/register
-H "Content-Type: application/json"
-d '{"name":"John","email":"john@example.com","password":"123456"}'

Test login
curl -X POST http://localhost:5000/api/users/login
-H "Content-Type: application/json"
-d '{"email":"john@example.com","password":"123456"}'


## 📝 Development Scripts

Add to `package.json`:

{
"scripts": {
"start": "node server.js",
"dev": "nodemon server.js"
}
}


## ⚠️ Production Notes

- Replace `memory.js` with MongoDB/Mongoose
- Add rate limiting
- Use Redis for sessions
- Deploy with PM2/Docker

## 🤝 Contributing

1. Fork repository
2. Create feature branch
3. Add tests
4. Submit PR

## 📄 License

MIT License



